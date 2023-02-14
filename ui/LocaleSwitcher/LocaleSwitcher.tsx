import { LOCALES } from '@/i18n/config';
import { useLocale } from 'next-intl';
import { LocaleOptions } from './LocaleOptions';

export const LocaleSwitcher = () => {
  const locale = useLocale();

  const otherLocales = LOCALES.filter(l => l != locale);

  return (
    <button className='relative flex items-center justify-center font-title mix-blend-difference'>
      <div className='flex flex-col items-center justify-center'>
        <LocaleOptions locale={locale} otherLocales={otherLocales} />
      </div>
    </button>
  );
};
