import React, { useContext, useEffect, useState } from 'react'

const ThemeContext = React.createContext({
  isDarkMode: null,
  setIsDarkMode: (_: boolean) => {},
})

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    isDarkMode ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
  }, [isDarkMode])

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</ThemeContext.Provider>
  )
}

export const useThemeProvider = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw Error('You cannot use `useThemeProvider` outside <ThemeProvider />')
  }
  return context
}
