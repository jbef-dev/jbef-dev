// import { getRequestConfig } from 'next-intl/server';
// import enMessages from '@/i18n/messages/en';

// using 'as const' to infer the types, but makes
// it incompatible with mutable type string[]
// therefore, we need to copy the array to keep the
// inferred types and make it mutable
// const DEFAULTLOCALE = 'en';
// const validLocales = [DEFAULTLOCALE, 'es', 'fr'] as const;
// const LOCALES = [...validLocales]; // make LOCALES mutable
// type I18nLocales = (typeof LOCALES)[number];
//
// type I18nMessages = typeof enMessages;
//
// export default getRequestConfig(async ({ locale }) => ({
//   messages: (await import(`@/i18n/messages/${locale}.ts`)).default,
// }));
//
// export { DEFAULTLOCALE, LOCALES, type I18nMessages, type I18nLocales };

import enMessages from '@/i18n/messages/en';

const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'fr'],
  cookieLocaleName: 'NEXT_LOCALE',
} as const;

type Locale = (typeof i18n)['locales'][number];
type Dictionary = typeof enMessages;

export { i18n, type Locale, type Dictionary };
