import React from 'react'
import tw from 'twin.macro'

import { Typography } from '../typography'

export type ErrorProps = {
  children: string | React.ReactNode
  overrideErrorContainerStyles?: any
}

export const Error: React.FC<ErrorProps> = ({ children, overrideErrorContainerStyles }) => {
  return (
    <div css={[tw`mt-0.5`, overrideErrorContainerStyles]}>
      {typeof children === 'string' ? (
        <Typography fontSize="small" css={[tw`text-error-300`]}>
          {children}
        </Typography>
      ) : (
        children
      )}
    </div>
  )
}

export default Error
