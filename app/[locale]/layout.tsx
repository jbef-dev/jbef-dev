// import { Footer } from '@ui/Footer/Footer';
import { NextIntlClientProvider } from 'next-intl/client';
import { notFound } from 'next/navigation';
import clsx from 'clsx';
import { Navbar } from '@ui/Navbar/Navbar';

import { inter, openSans, font_title, font_special } from '@styles/fonts';
import '@styles/globals.css';
// import { ScrollIndicator } from './(home)/ScrollIndicator/ScrollIndicator';
// import { NextIntlServerProvider } from 'next-intl/server';
import { useLocale } from 'next-intl';
import { LocalesType } from '@/i18n/config';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: LocalesType;
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const locale = useLocale();

  // Show a 404 error for unknown locales
  if (params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@i18n/messages/${locale}.ts`)).default;
  } catch (e) {
    notFound();
  }

  return (
    <html lang={locale} dir='ltr' className='scrollbar-hide'>
      {/*
<head /> will contain the components returned by the nearest parent
head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
*/}
      <head />
      <body
        className={clsx(
          font_title.variable,
          font_special.variable,
          inter.variable,
          openSans.variable,
          'font-sans'
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
