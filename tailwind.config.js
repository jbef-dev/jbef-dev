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
        special: ['var(--font-special)', ...defaultTheme.fontFamily.sans],
        title: ['var(--font-title)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'responsive-xs': 'clamp(0.7rem, 1.05vw, 0.85rem)',
        'responsive-sm': 'clamp(0.85rem, 1.15vw, 1rem)',
        'responsive-md': 'clamp(1rem, 1.75vw, 1.2rem)',
        'responsive-lg': 'clamp(1.2rem, 2.5vw, 1.75rem)',
        'responsive-xl': 'clamp(2.1rem, 5.5vw, 5rem)',
        'responsive-2xl': 'clamp(2.6rem, 8vw, 7.5rem)',
        'responsive-3xl': 'clamp(2.8rem, 10.2vw, 9.5rem)',
        'responsive-4xl': 'clamp(3rem, 12.2vw, 11.5rem)',
        // 'responsive-xs': 'clamp(0.7rem, 1.05vw, 0.85rem)',
        // 'responsive-sm': 'clamp(0.85rem, 1.15vw, 1rem)',
        // 'responsive-md': 'clamp(1rem, 1.3vw, 1.2rem)',
        // 'responsive-lg': 'clamp(1.25rem, 1.7vw, 1.5rem)',
        // 'responsive-xl': 'clamp(1.5rem, 2.3vw, 1.9rem)',
        // 'responsive-2xl': 'clamp(1.75rem, 3vw, 2.4rem)',
        // 'responsive-3xl': 'clamp(2rem, 4.1vw, 3rem)',
        // 'responsive-4xl': 'clamp(2.2rem, 5.8vw, 3.8rem)',
        // 'responsive-5xl': 'clamp(2.45rem, 7.8vw, 4.6rem)',
        // 'responsive-6xl': 'clamp(2.6rem, 8.2vw, 5rem)',
        // 'responsive-7xl': 'clamp(2.7rem, 9.8vw, 6.1rem)',
        // 'responsive-8xl': 'clamp(2.8rem, 10.2vw, 7.3rem)',
        // 'responsive-9xl': 'clamp(2.95rem, 11.5vw, 12.1rem)',
        // 'responsive-10xl': 'clamp(3rem, 12.8vw, 13.5rem)',
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
          // main: 'rgb(214 69 80)',
          // main: 'rgb(215 38 56)',
          // main: 'rgb(255 89 100)',
          // main: 'rgb(156 13 56)',
          // dark: 'rgb(87 74 226)',
          // dark: '#E8175D',
          dark: 'rgb(225 10 10)',
        },
        // secondary: 'rgb(107 127 130)',
        // secondary: 'rgb(252 158 79)',
        secondary: '#F59A2C',
        primary: '#E7277B',
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
