const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './shared/components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        notoSerif: ['Noto Serif', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primaryTemp: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
        secondaryTemp: {
          50: 'var(--secondary-50)',
          100: 'var(--secondary-100)',
          200: 'var(--secondary-200)',
          300: 'var(--secondary-300)',
          400: 'var(--secondary-400)',
          500: 'var(--secondary-500)',
          600: 'var(--secondary-600)',
          700: 'var(--secondary-700)',
          800: 'var(--secondary-800)',
          900: 'var(--secondary-900)',
        },
        neutral: colors.gray,
        headerText: colors.emerald,
        textPrimary: 'var(--textPrimary)',
        textSecondary: 'var(--textSecondary)',
        danger: colors.red[500],
        warning: colors.orange[500],
        info: colors.blue[500],
        danger: colors.red,
        bgPrimary: 'var(--bgPrimary)',
        bgSecondary: 'var(--bgSecondary)',
        white: colors.white,
        black: colors.black,
      },
      minWidth: {
        24: '6rem',
        48: '12rem',
        72: '24rem',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-filters'),
    require('@tailwindcss/typography'),
    require('tailwindcss-hyphens'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-accent-color')(),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#03925e' /* Primary color */,
          'primary-focus': '#026c45' /* Primary color - focused */,
          'primary-content': '#ebebeb' /* Foreground content color to use on primary color */,
          secondary: '#71717a' /* Secondary color */,
          'secondary-focus': '#3f3f46' /* Secondary color - focused */,
          'secondary-content': '#ebebeb' /* Foreground content color to use on secondary color */,
          accent: '#03925e' /* Accent color */,
          'accent-focus': '#026c45' /* Accent color - focused */,
          'accent-content': '#ebebeb' /* Foreground content color to use on accent color */,
          neutral: colors.gray[500] /* Neutral color */,
          'neutral-focus': colors.gray[900] /* Neutral color - focused */,
          'neutral-content': '#ebebeb' /* Foreground content color to use on neutral color */,
          'base-100': '#ffffff' /* Base color of page, used for blank backgrounds */,
          'base-200': '#e8e8e8' /* Base color, a little darker */,
          'base-300': '#bfc3c9' /* Base color, even more darker */,
          'base-content': '#606060' /* Foreground content color to use on base color */,
          info: colors.blue[500] /* Info */,
          success: '#03925e' /* Success */,
          warning: colors.orange[500] /* Warning */,
          error: colors.red[500] /* Error */,
        },
        dark: {
          primary: '#10b981' /* Primary color */,
          'primary-focus': '#147d50' /* Primary color - focused */,
          'primary-content': '#ffffff' /* Foreground content color to use on primary color */,
          secondary: '#71717a' /* Secondary color */,
          'secondary-focus': '#3f3f46' /* Secondary color - focused */,
          'secondary-content': '#ffffff' /* Foreground content color to use on secondary color */,
          accent: '#10b981' /* Accent color */,
          'accent-focus': '#147d50' /* Accent color - focused */,
          'accent-content': '#ffffff' /* Foreground content color to use on accent color */,
          neutral: colors.gray[500] /* Neutral color */,
          'neutral-focus': colors.gray[900] /* Neutral color - focused */,
          'neutral-content': '#000000' /* Foreground content color to use on neutral color */,
          'base-100': '#696969' /* Base color of page, used for blank backgrounds */,
          'base-200': '#484848' /* Base color, a little darker */,
          'base-300': '#2d2d2d' /* Base color, even more darker */,
          'base-content': '#ffffff' /* Foreground content color to use on base color */,
          info: colors.blue[500] /* Info */,
          success: '#10b981' /* Success */,
          warning: colors.orange[500] /* Warning */,
          error: colors.red[300] /* Error */,
        },
      },
    ],
  },
}
