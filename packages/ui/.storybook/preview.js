require('tailwindcss/tailwind.css')
import { useEffect } from 'react'
import { addDecorator } from '@storybook/react'

import { themes } from '@storybook/theming'
import { useDarkMode } from 'storybook-dark-mode'
import '../../pwa/theme.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'primaryDark',
    values: [
      {
        name: 'primaryDark',
        value: '#696969',
      },
      {
        name: 'secondaryDark',
        value: '#484848',
      },
      {
        name: 'primaryLight',
        value: '#ffffff',
      },
      {
        name: 'secondaryLight',
        value: '#e8e8e8',
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
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, html: { className: 'dark' } },
    // Override the default light theme
    light: { ...themes.normal, html: { className: 'light' } },
  },
}

const ThemeProvider = ({ children }) => {
  const darkMode = useDarkMode()
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [darkMode])

  return children
}

addDecorator((Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
))

export const globalTypes = {
  darkMode: true,
}
