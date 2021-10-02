import { MotionProps } from 'framer-motion'
import tw, { styled } from 'twin.macro'

export type ButtonProps = MotionProps & {
  as?: string | any
  type?: 'button' | 'submit' | 'reset'
  /**
   * The variant of the button
   */
  variant?: 'contained' | 'outline' | 'text'
  /**]
   * The color of the button
   */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'warning'
  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Full width button
   */
  fullWidth?: boolean
  /**
   * Wide button
   */
  wide?: boolean
  /**
   * Disable shadow.
   */
  noShadow?: boolean
  /**
   * Disabled button.
   */
  disabled?: boolean
  /**
   * Loading button.
   */
  isLoading?: boolean
  ref?: any
  onClick?: () => void
  children?: string | React.ReactNode
}

const baseStyles = tw`btn shadow-lg`

const colorStyles = {
  primary: tw`btn-primary`,
  secondary: tw`btn-secondary`,
  error: tw`btn-error`,
  warning: tw`btn-warning `,
  info: tw`btn-info`,
}

const backgroundHoverColor = {
  primary: tw`hover:bg-primary`,
  secondary: tw`hover:bg-secondary`,
  error: tw`hover:bg-error`,
  warning: tw`hover:bg-warning`,
  info: tw`hover:bg-info`,
}

const variantStyles = (color) => ({
  contained: [tw``],
  text: [tw`btn-ghost shadow-none`, backgroundHoverColor[color]],
  outline: [tw`btn-outline`, backgroundHoverColor[color]],
})

export const Button: React.FC<ButtonProps> = styled.button(
  ({
    as,
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    fullWidth,
    wide,
    noShadow,
    disabled,
    isLoading,
  }) => [
    baseStyles,
    colorStyles[color],
    ...variantStyles(color)[as !== 'a' ? variant : 'text'],
    size === 'small' && tw`btn-sm`,
    size === 'large' && tw`btn-lg`,
    wide && tw`btn-wide`,
    noShadow && tw`shadow-none`,
    disabled && tw`btn-disabled opacity-60 cursor-not-allowed`,
    fullWidth && tw`btn-block`,
    isLoading && tw`loading`,
  ]
)

export * from './animated'
