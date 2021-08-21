import React from 'react'
import { toast } from 'react-hot-toast'
import { Meta } from '@storybook/react'

import { Button, Toast } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Toast',
  component: Toast,
} as Meta

export const Primary = () => {
  return (
    <>
      <Toast />
      <Button onClick={() => toast('Hey! I am a toast')}>Show Toast</Button>
    </>
  )
}

export const Success = () => {
  return (
    <>
      <Toast />
      <Button onClick={() => toast.success('Hey! I am a success toast')}>Show Toast</Button>
    </>
  )
}

export const Error = () => {
  return (
    <>
      <Toast />
      <Button onClick={() => toast.error('Hey! I am a error toast')}>Show Toast</Button>
    </>
  )
}

export const Loading = () => {
  return (
    <>
      <Toast />
      <Button onClick={() => toast.loading('Hey! I am a loading toast')}>Show Toast</Button>
    </>
  )
}

export const Custom = () => {
  return (
    <>
      <Toast />
      <Button onClick={() => toast(<div className="border-4">Hey I am custom toast</div>)}>
        Show Toast
      </Button>
    </>
  )
}

export const CustomJSX = () => {
  return (
    <>
      <Toast />
      <Button
        onClick={() => toast.custom(<div className="border-4">Hey I am custom JSX toast</div>)}
      >
        Show Toast
      </Button>
    </>
  )
}
