import createIntlMiddleware from 'next-intl/middleware';
import { DEFAULTLOCALE, LOCALES } from './i18n/config';

// The middleware intercepts requests to `/` and will redirect
// to one of the configured locales instead (e.g. `/en`).
// In the background a cookie is set that will remember the
// locale of the last page that the user has visited.
// The middleware furthermore passes runtime configuration
// to components in your app.
export default createIntlMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULTLOCALE,
});

export const config = {
  // Skip all internal paths
  // matcher: ['/((?!_next).*)'],
  // Skip all non-content paths (CAREFUL if a folder or file is located as direct child
  // inside public folder, you need to add it here so the route does not become internationalized)
  matcher: ['/((?!_next|assets|favicons|favicon.ico).*)'],
};
