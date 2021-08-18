import tw, { styled } from 'twin.macro'

export type ButtonProps = {
  as?: string
  /**
   * The variant of the button
   */
  variant?: 'contained' | 'outlined' | 'text'
  /**
   * The color of the button
   */
  color?: 'primary' | 'secondary'
  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Full width button
   */
  fullWidth?: boolean
  /**
   * Rounded button
   */
  rounded?: boolean
  /**
   * Disable shadow.
   */
  noShadow?: boolean
  /**
   * Disabled button.
   */
  disabled?: boolean
  children?: string | React.ReactNode
}

const baseStyles = tw`
relative flex justify-center py-2 px-4 border border-transparent shadow-md text-sm leading-5 font-medium 
focus[outline-none ring-4 ring-primary-400] transition duration-150
ease-in-out cursor-pointer
`

const colorAndVariantStyles = (color: string, variant: string) => {
  switch (variant) {
    case 'contained':
      return [
        color === 'primary' &&
          tw`bg-primary-800 hover:bg-primary-500 active:bg-primary-900  text-white`,
        color === 'secondary' &&
          tw`bg-secondary-500 hover:bg-secondary-400 active:bg-secondary-700 text-black`,
      ]
    case 'outlined':
      return [
        color === 'primary' &&
          tw`border-primary-800 border-opacity-50 hover:border-opacity-100 hover:bg-primary-300 hover:bg-opacity-20 active:bg-primary-900 active:bg-opacity-20 text-primary-500`,
        color === 'secondary' &&
          tw`border-secondary-500 border-opacity-50 hover:border-opacity-100 hover:bg-secondary-400 hover:bg-opacity-20 active:bg-secondary-900 active:bg-opacity-20 text-secondary-700`,
      ]
    case 'text':
      return [
        color === 'primary' &&
          tw`hover:border-opacity-100 hover:bg-primary-300 hover:bg-opacity-20 active:bg-primary-900 active:bg-opacity-20 text-primary-500`,
        color === 'secondary' &&
          tw`hover:border-opacity-100 hover:bg-secondary-400 hover:bg-opacity-20 active:bg-secondary-900 active:bg-opacity-20 text-secondary-700`,
      ]
    default:
      return []
  }
}
export const Button: React.FC<ButtonProps> = styled.button(
  ({
    as,
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    fullWidth,
    rounded,
    noShadow,
    disabled,
  }) => [
    baseStyles,
    ...colorAndVariantStyles(color, variant),
    size === 'small' && tw`text-xs`,
    size === 'large' && tw`text-lg`,
    rounded && tw`rounded-lg`,
    (noShadow || variant === 'text') && tw`shadow-none`,
    disabled && tw`opacity-50 pointer-events-none cursor-not-allowed`,
    as === 'a' && tw`w-auto inline-block`,
    fullWidth && tw`min-w-full`,
  ]
)
