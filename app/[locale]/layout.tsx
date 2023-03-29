import { notFound } from 'next/navigation';
import clsx from 'clsx';
import { Header } from '@/ui/Header/Header';

import { fontSans, fontTitle } from '@/styles/fonts';
import '@/styles/globals.css';
import { useLocale } from 'next-intl';
import { I18nLocales } from '@/i18n/config';
import { Metadata } from 'next';
import { Footer } from '@/ui/Footer/Footer';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: I18nLocales;
  };
}) {
  const locale = useLocale();

  // Show a 404 error for unknown locales
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} dir='ltr' className='scrollbar-hide'>
      <head />
      <body
        className={clsx(fontTitle.variable, fontSans.variable, 'font-sans')}
      >
        {/* @ts-expect-error Server Component */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    icons: {
      icon: [
        {
          sizes: '32x32',
          type: 'image/png',
          url: '/favicons/favicon-32x32.png',
        },
        {
          sizes: '16x16',
          type: 'image/png',
          url: '/favicons/favicon-16x16.png',
        },
      ],
      apple: { sizes: '180x180', url: '/favicons/apple-touch-icon.png' },
      shortcut: '/favicons/favicon.ico',
    },
    manifest: '/favicons/site.webmanifest',
    themeColor: '#ffffff',
  };
}
