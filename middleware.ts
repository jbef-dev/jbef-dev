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

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  // if (
  //   [
  //     '/manifest.json',
  //     '/favicon.ico',
  //     // Your other files in `public`
  //   ].includes(pathname)
  // )
  //   return

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicons|favicon.ico").*)',
  ],
};
