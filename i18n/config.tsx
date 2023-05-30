import { getRequestConfig } from 'next-intl/server';
import enMessages from '@/i18n/messages/en';

// using 'as const' to infer the types, but makes
// it incompatible with mutable type string[]
// therefore, we need to copy the array to keep the
// inferred types and make it mutable
const DEFAULTLOCALE = 'en';
const validLocales = [DEFAULTLOCALE, 'es', 'fr'] as const;
const LOCALES = [...validLocales]; // make LOCALES mutable
type I18nLocales = (typeof LOCALES)[number];

type I18nMessages = typeof enMessages;

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.ts`)).default,
}));

export { DEFAULTLOCALE, LOCALES, type I18nMessages, type I18nLocales };
