import { Archivo, Inter, Jost } from "next/font/google";
import localFont from "next/font/local";

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

// export const fontTitle = localFont({
//   src: '../public/fonts/ClashGrotesk-Variable.ttf',
//   variable: '--font-title',
//   display: 'swap',
// });

export const fontTitle = Archivo({
  subsets: ['latin'],
  // weight:['300','400','500','700','900'],
  variable: '--font-title',
  display: 'swap',
  axes: ['wdth'],
});

// export const fontSpecial = Fraunces({
//   subsets: ['latin'],
//   variable: '--font-special',
//   display: 'swap',
// });

// export const fontSpecial = Montserrat({
//   subsets: ['latin'],
//   variable: '--font-special',
//   display: 'swap',
// });

export const fontSpecial = localFont({
  src: '../public/fonts/MESHED-VF.ttf',
  variable: '--font-special',
  display: 'swap',
});
