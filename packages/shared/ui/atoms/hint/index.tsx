import React from 'react'
import tw from 'twin.macro'

import { Typography } from '../typography'

export type HintProps = {
  children: string | React.ReactNode
  overrideHintContainerStyles?: any
}

export const Hint: React.FC<HintProps> = ({ children, overrideHintContainerStyles }) => {
  return (
    <div css={[tw`mt-0.5`, overrideHintContainerStyles]}>
      {typeof children === 'string' ? (
        <Typography italic fontSize="small" tw="label-text-alt">
          {children}
        </Typography>
      ) : (
        children
      )}
    </div>
  )
}
