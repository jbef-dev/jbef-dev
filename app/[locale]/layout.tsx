// import { NextIntlClientProvider } from 'next-intl/client';
import { notFound } from 'next/navigation';
import clsx from 'clsx';
import { Navbar } from '@/ui/Navbar/Navbar';

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

export default function LocaleLayout({ children, params }: LayoutProps) {
  const locale = useLocale();

  // Show a 404 error for unknown locales
  if (params.locale !== locale) {
    notFound();
  }

  // let messages;
  // try {
  //   messages = (await import(`@/i18n/messages/${locale}.ts`)).default;
  // } catch (e) {
  //   notFound();
  // }

  return (
    <html lang={locale} dir='ltr' className='scrollbar-hide'>
      {/*
<head /> will contain the components returned by the nearest parent
head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
*/}
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
        {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
        <Navbar />
        {children}
        {/* <Footer /> */}
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}

// IMPORTANT
// fixes issue with page being created statically and used dynamically
// with this setting, it is only created dynamically, SSR
export const dynamic = 'force-dynamic';
