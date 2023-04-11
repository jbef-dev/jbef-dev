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
        'responsive-xs': 'clamp(0.7rem, 0.5929rem + 0.2679vw, 0.85rem)',
        'responsive-sm': 'clamp(0.85rem, 0.7429rem + 0.2679vw, 1rem)',
        'responsive-md': 'clamp(1.1rem, 1.0031rem + 0.4134vw, 1.4rem)',
        'responsive-lg': 'clamp(1.4rem, 1.077rem + 1.3781vw, 2.4rem)',
        'responsive-xl': 'clamp(2.1rem, 0.1714rem + 4.8214vw, 3.2rem)',
        'responsive-2xl': 'clamp(2.6rem, 1.8894rem + 3.0319vw, 4.8rem)',
        'responsive-3xl': 'clamp(2.8rem, 1.5403rem + 5.3747vw, 6.7rem)',
        'responsive-4xl': 'clamp(3.35rem, 1.6058rem + 7.4419vw, 8.75rem)',
        'responsive-5xl': 'clamp(4rem, 2.062rem + 8.2687vw, 10rem)',
        'responsive-6xl': 'clamp(5rem, 2.739rem + 9.6469vw, 12rem)',
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
