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
  theme: {
    screens: {
      xs: '0px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'responsive-xs': 'clamp(1rem, 4.5vw, 1.3rem)',
        'responsive-sm': 'clamp(1rem, 5.5vw, 1.7rem)',
        'responsive-md': 'clamp(1rem, 6vw, 2rem)',
        'responsive-lg': 'clamp(1rem, 7vw, 2.4rem)',
        'responsive-xl': 'clamp(1.15rem, 8.2vw, 2.8rem)',
        'responsive-2xl': 'clamp(1.2rem, 9.5vw, 3.5rem)',
        'responsive-3xl': 'clamp(1.5rem, 9.75vw, 3.8rem)',
        'responsive-4xl': 'clamp(1.8rem, 10.1vw, 4.2rem)',
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
          main: '#0474ed',
          dark: '#E89B00',
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
    plugin(function({ addComponents, theme }) {
      addComponents({
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
        '.gradient-hero': {
          background: theme('colors.grayscale.900'),
          background:
            'linear-gradient(180deg, ' +
            '#000000' +
            '90 0%, ' +
            '#000000' +
            '50 10%, ' +
            '#000000' +
            '35 20%, ' +
            '#000000' +
            '45 40%, ' +
            '#000000' +
            'aa 75%, ' +
            '#000000' +
            ' 100%)',
        },
      });
    }),
  ],
};
