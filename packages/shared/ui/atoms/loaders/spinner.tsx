import React from 'react'
import tw, { theme } from 'twin.macro'

export type SpinnerProps = {
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
}

const styles = {
  div: {
    borderTopColor: theme('colors.primary'),
    animation: 'spinner 1.5s linear infinite',
  },
  '@-webkit-keyframes spinner': {
    '0%': { WebkitTransform: 'rotate(0deg)' },
    '100%': { WebkitTransform: 'rotate(360deg)' },
  },
  '@keyframes spinner': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
}

const getSizeStyles = {
  xsmall: tw`h-4 w-4 border-2 border-t-2`,
  small: tw`h-8 w-8 border-2 border-t-2`,
  medium: tw`h-16 w-16 border-4 border-t-4`,
  large: tw`h-32 w-32 border-8 border-t-8`,
  xlarge: tw`h-64 w-64 border-8 border-t-8`,
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'medium' }) => {
  return (
    <div css={[styles, tw`flex justify-center items-center border-headerText-500`]}>
      <div css={[tw`ease-linear rounded-full border-gray-200`, getSizeStyles[size]]}></div>
    </div>
  )
}
