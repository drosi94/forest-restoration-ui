import React from 'react'
import tw from 'twin.macro'
import { CloseButton } from '../closeButton'
import { Typography } from '../typography'
import { getColorStyles, getTextColorStyles, Color } from '../../utils'

export type PillProps = {
  children?: string | React.ReactNode
  color?: Color
  textColor?: Color
  icon?: React.ReactNode | HTMLElement
  onRemove?: () => void
}

export const Pill: React.FC<PillProps> = ({
  children,
  color = 'primary',
  textColor = 'textPrimary',
  icon,
  onRemove,
}) => {
  return (
    <span
      css={[
        tw`flex w-[fit-content] justify-center items-center m-1 font-medium  py-2 px-2 rounded-full bg-base-100 text-base-content border border-base-content border-opacity-70`,
        getColorStyles(color as Color),
      ]}
    >
      {icon && (
        <span>
          <span
            css={[tw`flex relative w-4 h-4 justify-center items-center mr-1 text-xs rounded-lg`]}
          >
            {icon}
          </span>
        </span>
      )}
      {typeof children === 'string' ? (
        <Typography
          css={[tw`max-w-full flex-initial text-xs`, getTextColorStyles(textColor as Color)]}
        >
          {children}
        </Typography>
      ) : (
        children
      )}
      {onRemove && (
        <div css={[tw`ml-2`, getTextColorStyles(textColor as Color)]}>
          <CloseButton onClick={onRemove} preventPropagation width={14} />
        </div>
      )}
    </span>
  )
}
