import React, { useContext, useEffect, useState } from 'react'

const ThemeContext = React.createContext({
  isDarkMode: true,
  setIsDarkMode: (_: boolean) => {},
})

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    if (document.documentElement.classList.contains('light')) {
      setIsDarkMode(false)
    }
  }, [])

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
