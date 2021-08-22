const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['**/*.{js,ts,jsx,tsx}'],
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
        primary: {...colors.emerald, 800: "#147D50"},
        secondary: colors.gray,
        neutral: colors.gray,
        headerText: colors.emerald,
        textPrimary: colors.white,
        textSecondary: colors.black,
        danger: colors.red[800],
        bgPrimary: "#696969",
        bgSecondary: "#484848",
        white: colors.white,
        black: colors.black,
      },
      minWidth: {
        '24': '6rem',
        '48': '12rem',
        '72': '24rem',
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss-filters'), require('@tailwindcss/typography'), require('tailwindcss-hyphens')],
  xwind: {
    mode: 'objectstyles',
  },
}
