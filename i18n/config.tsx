import { getRequestConfig } from 'next-intl/server';
import enMessages from '@/i18n/messages/en';

// using 'as const' to infer the types, but makes
// it incompatible with mutable type string[]
// therefore, we need to copy the array to keep the
// inferred types and make it mutable
export const DEFAULTLOCALE = 'en';
const validLocales = [DEFAULTLOCALE, 'es', 'fr'] as const;
export const LOCALES = [...validLocales]; // make LOCALES mutable
export type I18nLocales = (typeof LOCALES)[number];

export type I18nMessages = typeof enMessages;

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`@/i18n/messages/${locale}.ts`)).default,
}));
