const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        logo: ['var(--font-logo)', ...defaultTheme.fontFamily.sans],
        // special: ['var(--font-special)', ...defaultTheme.fontFamily.sans],
        title: ['var(--font-title)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // Clamps -> min viewport: 375px / max viewport: 1536px
        'responsive-xs': 'clamp(0.7rem, 0.5929rem + 0.2679vw, 0.9rem)',
        'responsive-sm': 'clamp(0.85rem, 0.8154rem + 0.1538vw, 1rem)',
        'responsive-md': 'clamp(1.05rem, 0.9808rem + 0.3077vw, 1.35rem)',
        // 'responsive-lg': 'clamp(1.4rem, 1.0308rem + 1.641vw, 3rem)',
        'responsive-lg': 'clamp(1.4rem, 1.0885rem + 1.3846vw, 2.75rem)',
        // 'responsive-xl': 'clamp(1.95rem, 0.9923rem + 4.2564vw, 4.9rem)',
        'responsive-xl': 'clamp(1.95rem, 1.5923rem + 1.5897vw, 3.5rem)',
        // 'responsive-2xl': 'clamp(2.35rem, 1.1615rem + 5.2821vw, 6.8rem)',
        'responsive-2xl': 'clamp(2.35rem, 1.5538rem + 3.5385vw, 5.8rem)',
        // 'responsive-3xl': 'clamp(2.8rem, 1.3231rem + 6.5641vw, 8rem)',
        'responsive-3xl': 'clamp(2.8rem, 1.7846rem + 4.5128vw, 7.2rem)',
        // 'responsive-4xl': 'clamp(3.3rem, 1.4769rem + 8.1026vw, 10rem)',
        'responsive-4xl': 'clamp(3rem, 1.6385rem + 6.0513vw, 8.9rem)',
        // 'responsive-5xl': 'clamp(3.85rem, 1.8538rem + 8.8718vw, 11.2rem)',
        'responsive-5xl': 'clamp(3.7rem, 1.4713rem + 9.509vw, 10.6rem)',
        // 'responsive-6xl': 'clamp(4.5rem, 2.3077rem + 9.7436vw, 12.5rem)',
        'responsive-6xl': 'clamp(4.5rem, 2.6538rem + 8.2051vw, 12.5rem)',
      },
      borderRadius: {
        xs: '1px',
      },
      dropShadow: {
        // hero: '0px -50px 50px rgba(0,0,0,0.02)', // BIG BIG PERFORMANCE DROP
        // navbar: '0px 50px 50px rgba(0,0,0,0.08)', // BIG BIG PERFORMANCE DROP
      },
      colors: {
        accent: {
          lightest: '#4AA0FC',
          light: '#228BFC',
          main: 'rgb(226 50 94)',
          dark: 'rgb(225 10 10)',
        },
        secondary: '#F59A2C',
        primary: '#0292AE',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
        '.scrollbar-hide': {
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        },
        '.font-stretch-normal': {
          fontStretch: 'normal',
        },
        '.font-stretch-unset': {
          fontStretch: 'unset',
        },
        '.font-stretch-initial': {
          fontStretch: 'initial',
        },
        '.font-stretch-semi-expanded': {
          fontStretch: 'expanded',
        },
        '.font-stretch-expanded': {
          fontStretch: 'expanded',
        },
        '.font-stretch-extra-expanded': {
          fontStretch: 'expanded',
        },
        '.font-stretch-ultra-expanded': {
          fontStretch: 'expanded',
        },
        '.font-stretch-semi-condensed': {
          fontStretch: 'semi-condensed',
        },
        '.font-stretch-condensed': {
          fontStretch: 'condensed',
        },
        '.font-stretch-extra-condensed': {
          fontStretch: 'extra-condensed',
        },
        '.font-stretch-ultra-condensed': {
          fontStretch: 'ultra-condensed',
        },
        '.font-stretch-condensed': {
          fontStretch: 'condensed',
        },
      });
    }),
  ],
};
