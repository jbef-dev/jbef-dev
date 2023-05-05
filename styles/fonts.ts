import { Inter, Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const fontTitle = localFont({
  // src: '../public/fonts/Nohemi-VF.ttf',
  src: '../public/fonts/Meshed-VF.ttf',
  variable: '--font-title',
  display: 'swap',
});

// export const fontTitle = Poppins({
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700'],
//   variable: '--font-title',
//   // style: 'normal',
//   display: 'swap',
// });
