import clsx from 'clsx';
import * as React from 'react';

import { Navbar } from '@/components/Navbar/Navbar';
import { fontSans, fontTitle } from '@/styles/fonts';
import '@/styles/globals.css';
// import { useLocale } from 'next-intl';
import { Analytics } from '@vercel/analytics/react';
import { i18n, Locale } from '@/i18n/config';
import { Metadata } from 'next';
import { Footer } from '@/components/Footer/Footer';

const CenterFluid = dynamic(() =>
  import('@/components/CenterFluid').then(mod => mod.CenterFluid)
);
// import { CenterFluid } from '@/components/CenterFluid/CenterFluid';

import { LoadingProvider } from '@/components/LoadingComponent/LoadingCtx';
import { CenterFluidProvider } from '@/components/CenterFluid/CenterFluidCtx';
import dynamic from 'next/dynamic';
import { LoadingComponent } from '@/components/LoadingComponent/LoadingComponent';

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale: locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
}) {
  // const locale = useLocale();

  // // Show a 404 error for unknown locales
  // if (params.locale satisfies Locale) {
  //   notFound();
  // }

  return (
    <html
      lang={params.locale}
      dir='ltr'
      className='scrollbar-hide overscroll-none'
    >
      <head />
      <body
        className={clsx(fontTitle.variable, fontSans.variable, 'font-sans')}
      >
        <LoadingProvider>
          <CenterFluidProvider>
            <LoadingComponent />
            <CenterFluid />
            {/* @ts-expect-error async Server Component */}
            <Navbar locale={params.locale} />
            {children}
            <Footer />
            <Analytics />
          </CenterFluidProvider>
        </LoadingProvider>
      </body>
      {/* <PageTransition /> */}
    </html>
  );
}

// export const dynamic = 'force-dynamic';

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

export const runtime = 'edge';
