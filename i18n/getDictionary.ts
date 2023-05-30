// import 'server-only'; // optional to detect if this code si run on client and spit out error

import type { I18nLocales } from './config';
import enMessages from './messages/en';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries: { [k in I18nLocales]: () => Promise<typeof enMessages> } = {
  en: () => import('./messages/en').then(module => module.default),
  es: () => import('./messages/es').then(module => module.default),
  fr: () => import('./messages/fr').then(module => module.default),
};

const getDictionary = async (locale: I18nLocales) => dictionaries[locale]();

export { getDictionary };
