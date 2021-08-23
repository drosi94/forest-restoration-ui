require('tailwindcss/tailwind.css')
import { themes } from '@storybook/theming'
import '../../pwa/theme.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark },
    // Override the default light theme
    light: { ...themes.normal },
  },
  backgrounds: {
    default: 'primary',
    values: [
      {
        name: 'primary',
        value: '#696969',
      },
      {
        name: 'modal',
        value: '#484848',
      },
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'black',
        value: '#000',
      },
      {
        name: 'gray',
        value: '#eee',
      },
    ],
  },
}

export const decorators = [
  (Story) => {
    return <Story />
  },
]
