import React from 'react'
import { Toaster } from 'react-hot-toast'

export const Toast = ({ darkMode = true }) => {
  return (
    <Toaster
      position="top-center"
      gutter={8}
      toastOptions={{
        // Define default options
        duration: 5000,
        style: {
          borderRadius: '10px',
          background: darkMode ? '#333' : null,
          color: darkMode ? '#fff' : null,
        },
      }}
    />
  )
}
