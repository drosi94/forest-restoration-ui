import React from 'react'
import tw from 'twin.macro'
import { Typography } from '../typography'
import { BaseCard, BaseCardProps } from './base'

export type TitledCardProps = BaseCardProps & {
  /**
   * The title of the card
   */
  title?: string | React.ReactNode
  /**
   * Override title container style, only when text title is provided
   */
  overrideTitleContainerStyles?: any
  /**
   * Override body container style
   */
  overrideBodyContainerStyles?: any
}

export const TitledCard: React.FC<TitledCardProps> = ({
  title = 'Card',
  color = 'bgSecondary',
  rounded = true,
  noShadow,
  centered,
  overrideStyles,
  overrideTitleContainerStyles,
  overrideBodyContainerStyles,
  children,
}) => {
  return (
    <BaseCard
      color={color}
      rounded={rounded}
      noShadow={noShadow}
      centered={centered}
      overrideStyles={overrideStyles}
    >
      {typeof title === 'string' ? (
        <div css={[overrideTitleContainerStyles]}>
          <Typography as="h2" variant="heading">
            {title}
          </Typography>
        </div>
      ) : (
        { title }
      )}

      <div css={[tw`my-4`, overrideBodyContainerStyles]}>{children}</div>
    </BaseCard>
  )
}
