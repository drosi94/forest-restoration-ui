import React from 'react'
import tw, { styled } from 'twin.macro'

export type BaseCardProps = {
  /**
   * The background color of the card
   */
  color?: 'bgSecondary' | 'bgPrimary'
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
   * Override of the base styling
   */
  overrideStyles?: any
}

const baseStyles = tw`container flex flex-col gap-2 flex-wrap items-start p-4 shadow-lg border-2 leading-relaxed break-words hyphens-auto`

const colorStyles = (color: string) => [
  color === 'bgSecondary' && tw`bg-bgSecondary border-bgPrimary border-opacity-30 text-textPrimary`,
  color === 'bgPrimary' && tw`bg-bgPrimary border-bgSecondary border-opacity-30 text-textPrimary`,
]

export const BaseCard: React.FC<BaseCardProps> = styled.div(
  ({ color = 'bgSecondary', rounded = true, noShadow, centered = true, overrideStyles }) => [
    baseStyles,
    ...colorStyles(color),
    rounded && tw`rounded-lg`,
    noShadow && tw`shadow-none`,
    centered && tw`mx-auto`,
    overrideStyles,
  ]
)
