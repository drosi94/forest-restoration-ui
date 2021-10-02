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
  overrideStyles?: any
  children?: string | React.ReactNode
}

const baseStyles = tw`card bordered lg:card-side shadow-lg leading-relaxed break-words hyphens-auto`

const colorStyles = (color: string) => [
  color === 'bgSecondary' && tw`bg-base-200 text-base-content`,
  color === 'bgPrimary' && tw`bg-base-100 text-base-content`,
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
      <div tw="card-body">{children}</div>
    </div>
  )
)
