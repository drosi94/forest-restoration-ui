import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import { Typography, Switch } from '@forest-restoration/shared'
import { useThemeProvider } from '../../providers/themeProvider'

export const ToggleTheme = () => {
  const { isDarkMode, setIsDarkMode } = useThemeProvider()

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [isDarkMode])

  return (
    <div tw="flex flex-row gap-2">
      <Typography>🌞</Typography>
      <Switch
        label="Label"
        labelPosition="hidden"
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
      />
      <Typography>🌙</Typography>
    </div>
  )
}
