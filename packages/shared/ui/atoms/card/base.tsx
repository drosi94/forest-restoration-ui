import React from 'react'
import tw from 'twin.macro'

export type BaseCardProps = {
  /**
   * The background color of the card
   */
  color?: 'bgSecondary' | 'bgPrimary'
  /**
   * Should the card have fullWidth
   */
  fullWidth?: boolean
  /**
   * Should the card have border radius
   */
  rounded?: boolean
  /**
   * Should the card have shadow
   */
  noShadow?: boolean
  /**
   * Should the card be centered
   */
  centered?: boolean
  /**
   * The onClick handler
   */
  onClick?: any
  /**
   * Override of the base styling
   */
  overrideStylesoverrideStyles?: any
  children?: string | React.ReactNode
}

const baseStyles = tw`w-full flex flex-col gap-2 flex-wrap items-start p-4 shadow-lg border-2 leading-relaxed break-words hyphens-auto`

const colorStyles = (color: string) => [
  color === 'bgSecondary' && tw`bg-bgSecondary border-bgPrimary border-opacity-30 text-textPrimary`,
  color === 'bgPrimary' && tw`bg-bgPrimary border-bgSecondary border-opacity-30 text-textPrimary`,
]

export const BaseCard: React.FC<BaseCardProps> = React.forwardRef<any, BaseCardProps>(
  (
    {
      color = 'bgSecondary',
      rounded = true,
      noShadow,
      centered = true,
      fullWidth = false,
      onClick,
      overrideStyles,
      children,
    },
    ref
  ) => (
    <div
      onClick={onClick}
      onKeyDown={onClick}
      onKeyUp={onClick}
      role={onClick ? 'button' : 'presentation'}
      ref={ref}
      css={[
        baseStyles,
        ...colorStyles(color),
        !fullWidth && tw`container`,
        rounded && tw`rounded-lg`,
        noShadow && tw`shadow-none`,
        centered && tw`mx-auto`,
        overrideStyles,
      ]}
    >
      {children}
    </div>
  )
)
