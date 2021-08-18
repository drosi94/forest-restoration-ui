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
        primary: colors.emerald,
        secondary: colors.gray,
        neutral: colors.gray,
        headerText: colors.emerald,
        colorText: colors.white,
        colorTextSecondary: colors.black,
        danger: colors.red[800],
        bgPrimary: "#696969",
        bgModal: "#484848",
        white: colors.white,
        black: colors.black,
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss-filters')],
  xwind: {
    mode: 'objectstyles',
  },
}
