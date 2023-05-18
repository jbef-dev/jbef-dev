// import createIntlMiddleware from 'next-intl/middleware';
// import { DEFAULTLOCALE, LOCALES } from './i18n/config';
//
// // The middleware intercepts requests to `/` and will redirect
// // to one of the configured locales instead (e.g. `/en`).
// // In the background a cookie is set that will remember the
// // locale of the last page that the user has visited.
// // The middleware furthermore passes runtime configuration
// // to components in your app.
// export default createIntlMiddleware({
//   locales: LOCALES,
//   defaultLocale: DEFAULTLOCALE,
// });
//
// export const config = {
//   // Skip all internal paths
//   // matcher: ['/((?!_next).*)'],
//   // Skip all non-content paths (CAREFUL if a folder or file is located as direct child
//   // inside public folder, you need to add it here so the route does not become internationalized)
//   matcher: ['/((?!_next|assets|favicons|favicon.ico).*)'],
// };

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { i18n } from '@/i18n/config';

import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const headers = request.headers;
  const cookies = request.cookies;

  let locale;

  // Prio 1: Use route prefix
  if (pathName) {
    const pathLocale = pathName.split('/')[1];
    if (([...i18n.locales] as string[]).includes(pathLocale)) {
      locale = pathLocale;
    }
  }

  // Prio 2: Use cookie
  if (!locale && cookies.has(i18n.cookieLocaleName)) {
    locale = cookies.get(i18n.cookieLocaleName)?.value;
  }

  // Prio 3: Use Accept-Language headers
  if (!locale) {
    let loc;
    const languages = new Negotiator({
      headers: {
        'accept-language': headers.get('accept-language') || undefined,
      },
    }).languages();
    try {
      loc = match(languages, [...i18n.locales], i18n.defaultLocale);
    } catch (e) {
      // Invalid language, do nothing
    }
    locale = loc;
  }

  // Prio 4: Use default locale
  if (!locale) {
    locale = i18n.defaultLocale;
  }

  let response;

  // Redirect if lng in path is not supported
  if (
    !i18n.locales.some(locale => pathName.startsWith(`/${locale}`)) &&
    !pathName.startsWith('/_next')
  ) {
    response = NextResponse.redirect(
      new URL(`/${locale}${pathName}`, request.url)
    );
  } else {
    response = NextResponse.next();
  }

  // if (headers.has('referer')) {
  //   const refererUrl = new URL(headers.get('referer') || '');
  //   const lngInReferer = i18n.locales.find(l =>
  //     refererUrl.pathname.startsWith(`/${l}`)
  //   );
  //   const response = NextResponse.next();
  //   if (lngInReferer) response.cookies.set(i18n.cookieLocaleName, lngInReferer);
  //   return response;
  // }

  response.cookies.set(i18n.cookieLocaleName, locale);

  return response;
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicons|favicon.ico").*)',
  ],
};
