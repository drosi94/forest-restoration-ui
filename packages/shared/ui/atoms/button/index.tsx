import tw, { styled } from 'twin.macro'

export type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  rounded?: boolean
  disabled?: boolean
}

const baseStyles = tw`
relative flex w-32 justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium 
focus[outline-none ring-4 ring-primary-400] transition duration-150
ease-in-out cursor-pointer
`

export const Button: React.FC<ButtonProps> = styled.button(
  ({ variant = 'primary', size = 'medium', fullWidth, rounded, disabled }) => [
    baseStyles,
    variant === 'primary' &&
      tw`bg-primary-400 hover:bg-primary-200 active:bg-primary-600  text-gray-700`,
    variant === 'secondary' &&
      tw`bg-secondary-500 hover:bg-secondary-400 active:bg-secondary-700 text-black`,
    disabled && tw`opacity-50 pointer-events-none cursor-not-allowed`,
    size === 'small' && tw`text-xs`,
    size === 'large' && tw`text-lg`,
    fullWidth && tw`min-w-full`,
    rounded && tw`rounded-lg `,
  ]
)
