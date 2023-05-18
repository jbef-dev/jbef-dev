// import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

// export const fontSans = Inter({
//   subsets: ['latin'],
//   variable: '--font-sans',
//   display: 'swap',
// });

export const fontSans = localFont({
  src: '../public/fonts/Satoshi-Variable.ttf',
  variable: '--font-sans',
  display: 'swap',
});

export const fontTitle = localFont({
  src: '../public/fonts/MESHED-VF.ttf',
  // src: '../public/fonts/Boska-Variable.ttf',
  variable: '--font-title',
  display: 'block',
  // display: 'swap',
});

// export const fontTitle = Poppins({
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700'],
//   variable: '--font-title',
//   // style: 'normal',
//   display: 'swap',
// });
