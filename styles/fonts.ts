import { Inter, Jost, Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const fontLogo = Jost({
  subsets: ['latin'],
  variable: '--font-logo',
  display: 'swap',
});

export const fontTitle = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-title',
  // style: 'normal',
  display: 'swap',
});

export const fontSpecial = localFont({
  src: '../public/fonts/MESHED-VF.ttf',
  variable: '--font-special',
  display: 'swap',
});
