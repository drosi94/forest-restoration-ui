import React from 'react'
import { Toaster } from 'react-hot-toast'

export const Toast = () => {
  return (
    <Toaster
      position="top-center"
      gutter={8}
      toastOptions={{
        // Define default options
        duration: 5000,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }}
    />
  )
}
