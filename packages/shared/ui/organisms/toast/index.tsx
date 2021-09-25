import React from 'react'
import { Toaster } from 'react-hot-toast'

export const Toast = ({ darkMode = true, duration = 5000, marginTop }) => {
  return (
    <Toaster
      position="top-center"
      gutter={8}
      toastOptions={{
        // Define default options
        duration,
        style: {
          marginTop,
          borderRadius: '10px',
          background: darkMode ? '#333' : null,
          color: darkMode ? '#fff' : null,
        },
      }}
    />
  )
}
