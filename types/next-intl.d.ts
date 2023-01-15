import { MessagesType, Locales } from '@config/locale/localeConfig';

declare global {
  interface IntlMessages extends MessagesType {}
}
