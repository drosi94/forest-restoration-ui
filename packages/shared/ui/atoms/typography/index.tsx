import tw, { styled } from 'twin.macro'

export type TypographyProps = {
  /**
   * The html element of the text
   */
  as?: string
  /**
   * The variant of the text, if set, overrides font color, font size and font family
   */
  variant?: 'heading' | 'body' | 'body2'
  /**
   * The color of the text
   */
  color?: 'textPrimary' | 'textSecondary' | 'primary' | 'secondary'
  /**
   * The font size of the text
   */
  fontSize?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  /**
   * The font family of the text
   */
  fontFamily?: 'sans' | 'serif' | 'mono' | 'notoSerif'
  /**
   * The text should be underlined
   */
  underlined?: boolean
  /**
   * The text should be italic
   */
  italic?: boolean
  /**
   * The font weight of the text
   */
  fontWeight?:
    | 'light'
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
  htmlFor?: string
  css?: any
  children?: string | React.ReactNode
  [key: string]: any
}

const variantStyles = {
  heading: [tw`font-notoSerif dark:text-primaryTemp-400 text-primaryTemp-900 text-xl`],
  body: [tw`font-sans text-base text-textPrimary`],
  body2: [tw`font-sans text-lg text-textPrimary`],
}

const fontSizeStyles = {
  xsmall: [tw`text-xs`],
  small: [tw`text-sm`],
  medium: [tw`text-base`],
  large: [tw`text-lg`],
  xlarge: [tw`text-xl`],
  xxlarge: [tw`text-2xl`],
}

const fontFamilyStyles = {
  serif: [tw`font-serif`],
  notoSerif: [tw`font-notoSerif`],
  sans: [tw`font-sans`],
  mono: [tw`font-mono`],
}

const fontWeightStyles = {
  light: [tw`font-light`],
  normal: [tw`font-normal`],
  bold: [tw`font-bold`],
  100: [tw`font-thin`],
  200: [tw`font-extralight`],
  300: [tw`font-light`],
  400: [tw`font-normal`],
  500: [tw`font-medium`],
  600: [tw`font-semibold`],
  700: [tw`font-bold`],
  800: [tw`font-extrabold`],
  900: [tw`font-black`],
}

export const Typography: React.FC<TypographyProps> = styled.span(
  ({
    variant,
    color = 'textPrimary',
    fontSize = 'medium',
    fontFamily = 'sans',
    fontWeight = 'normal',
    underlined,
    italic,
  }) => [
    color === 'textPrimary' && tw`text-base-content`,
    color === 'textSecondary' && tw`text-base-100`,
    color === 'primary' && tw`text-primary`,
    color === 'secondary' && tw`text-secondary`,
    ...fontSizeStyles[fontSize],
    ...fontFamilyStyles[fontFamily],
    ...fontWeightStyles[fontWeight],
    underlined && tw`underline`,
    italic && tw`italic`,
    ...(variant ? variantStyles[variant] : []),
  ]
)
