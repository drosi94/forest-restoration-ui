require('tailwindcss/tailwind.css')
import { addDecorator } from '@storybook/react'
import { useEffect } from 'react'
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
        value: '#171212',
      },
      {
        name: 'secondaryDark',
        value: '#120E0E',
      },
      {
        name: 'primaryLight',
        value: '#ffffff',
      },
      {
        name: 'secondaryLight',
        value: '#F9FAFB',
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
  themes: {
    default: 'forest',
    list: [
      { name: 'forest', class: 'dark', color: 'black' },
      { name: 'emerald', class: 'light', color: 'white' },
    ],
    target: 'root',
    onChange: (theme) => {
      document
        .getElementById('storybook-preview-iframe')
        .contentWindow.document.documentElement.setAttribute('data-theme', theme.name)
    },
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
