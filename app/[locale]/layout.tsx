// import { NextIntlClientProvider } from 'next-intl/client';
import { notFound } from 'next/navigation';
import clsx from 'clsx';
import { Header } from '@/components/Header/Header';
// import { Header } from '@/ui/Header/Header';

import { fontSans, fontLogo, fontTitle, fontSpecial } from '@/styles/fonts';
import '@/styles/globals.css';
import { useLocale } from 'next-intl';
import { I18nLocales } from '@/i18n/config';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: I18nLocales;
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const locale = useLocale();

  // Show a 404 error for unknown locales
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} dir='ltr' className='scrollbar-hide'>
      <head />
      <body
        className={clsx(
          fontTitle.variable,
          fontSpecial.variable,
          fontSans.variable,
          fontLogo.variable,
          'font-sans'
        )}
      >
        {/* @ts-expect-error Server Component */}
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

// IMPORTANT
// fixes issue with page being created statically and used dynamically
// with this setting, it is only created dynamically, SSR
export const dynamic = 'force-dynamic';
