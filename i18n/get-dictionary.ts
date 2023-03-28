// import 'server-only';
import type { Locale } from './config';
import enMessages from './messages/en';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries: { [k in Locale]: () => Promise<typeof enMessages> } = {
  en: () => import('./messages/en').then(module => module.default),
  es: () => import('./messages/es').then(module => module.default),
  fr: () => import('./messages/fr').then(module => module.default),
};

const getDictionary = async (locale: Locale) => dictionaries[locale]();

export { getDictionary };
