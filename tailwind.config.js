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
      fontFamily: {
        logo: ['var(--font-logo)', ...defaultTheme.fontFamily.sans],
        title: ['var(--font-title)', ...defaultTheme.fontFamily.sans],
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'responsive-xs': 'clamp(0.75rem, 1.15vw, 0.9rem)',
        'responsive-sm': 'clamp(0.85rem, 1.25vw, 1rem)',
        'responsive-md': 'clamp(1rem, 1.5vw, 1.2rem)',
        'responsive-lg': 'clamp(1.25rem, 1.9vw, 1.5rem)',
        'responsive-xl': 'clamp(1.5rem, 2.4vw, 1.9rem)',
        'responsive-2xl': 'clamp(1.75rem, 3vw, 2.4rem)',
        'responsive-3xl': 'clamp(2rem, 4.1vw, 3rem)',
        'responsive-4xl': 'clamp(2.2rem, 5.8vw, 3.8rem)',
        'responsive-5xl': 'clamp(2.45rem, 7.8vw, 4.6rem)',
        'responsive-6xl': 'clamp(2.65rem, 8.2vw, 5rem)',
        'responsive-7xl': 'clamp(2.8rem, 9.8vw, 6.1rem)',
        'responsive-8xl': 'clamp(2.95rem, 10.6vw, 7.3rem)',
        'responsive-9xl': 'clamp(3.05rem, 11.2vw, 8.8rem)',
        'responsive-10xl': 'clamp(3.15rem, 11.7vw, 10rem)',
      },
      borderRadius: {
        xs: '1px',
      },
      dropShadow: {
        // hero: '0px -50px 50px rgba(0,0,0,0.02)', // BIG BIG PERFORMANCE DROP
        // navbar: '0px 50px 50px rgba(0,0,0,0.08)', // BIG BIG PERFORMANCE DROP
      },
      colors: {
        primary: {
          100: '#72B5FD',
          200: '#4AA0FC',
          300: '#4AA0FC',
          400: '#008CFF',
          500: '#0474ed',
          600: '#025BCF',
          700: '#366381',
          800: '#366381',
          900: '#12212B',
        },
        accent: {
          lightest: '#4AA0FC',
          light: '#228BFC',
          main: 'rgb(226 50 94)',
          dark: 'rgb(196 72 104)',
          // dark: 'rgb(43 109 182)',
        },
        grayscale: {
          50: '#F8F9FA',
          100: '#F0F2F2',
          200: '#E7EBEE',
          300: '#DBE0E6',
          400: '#C3CCD5',
          500: '#6C757D',
          600: '#495057',
          700: '#343A40',
          800: '#212529',
          900: '#121417',
        },
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
        '.gradient-primary': {
          background: theme('colors.primary.500'),
          background:
            'linear-gradient(90deg, ' +
            theme('colors.primary.400') +
            ' 0%, ' +
            theme('colors.primary.500') +
            ' 100%)',
        },
        '.gradient-primary-light': {
          background: theme('colors.primary.500'),
          background:
            'linear-gradient(90deg, ' +
            theme('colors.primary.300') +
            ' 0%, ' +
            theme('colors.primary.400') +
            ' 100%)',
        },
        '.gradient-light': {
          background: theme('colors.grayscale.50'),
          background:
            'linear-gradient(90deg, ' +
            theme('colors.grayscale.50') +
            ' 0%, ' +
            theme('colors.grayscale.200') +
            ' 100%)',
        },
        '.gradient-dark': {
          background: theme('colors.grayscale.700'),
          background:
            'linear-gradient(90deg, ' +
            theme('colors.grayscale.700') +
            ' 0%, ' +
            theme('colors.grayscale.900') +
            ' 100%)',
        },
      });
    }),
  ],
};
