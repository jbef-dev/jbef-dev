import { NextIntlConfig } from 'next-intl';

import enMessages from '@/i18n/messages/en';
import esMessages from '@/i18n/messages/es';
import frMessages from '@/i18n/messages/fr';

// using 'as const' to infer the types, but makes
// it incompatible with mutable type string[]
// therefore, we need to copy the array to keep the
// inferred types and make it mutable
export const defaultLocale = 'en';
const validLocales = [defaultLocale, 'es', 'fr'] as const;
export const LOCALES = [...validLocales]; // make LOCALES mutable
export type I18nLocales = typeof LOCALES[number];

export type I18nMessages = typeof enMessages;

export const messages: {
  [k in I18nLocales]: I18nMessages;
} = {
  en: enMessages,
  es: esMessages,
  fr: frMessages,
};

const config: NextIntlConfig = {
  locales: LOCALES,
  defaultLocale: defaultLocale,
  async getMessages({ locale }) {
    return (await import(`@/i18n/messages/${locale}.ts`)).default;
  },
};

export default config;
