import React, { useContext, useEffect, useRef, useState } from 'react'

const ThemeContext = React.createContext({
  isDarkMode: null,
  setIsDarkMode: (_: boolean) => {},
})

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const isFirstTime = useRef(true)

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (!isFirstTime.current) {
      isDarkMode ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
    }
    isFirstTime.current = false
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
