const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./**/pages/**/*.{js,ts,jsx,tsx}', './**/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: colors.indigo,
        secondary: colors.yellow,
        neutral: colors.gray,
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss-filters')],
  xwind: {
    mode: 'objectstyles',
  },
}
