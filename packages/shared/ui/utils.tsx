import tw from 'twin.macro'

export type Color =
  | 'primary'
  | 'secondary'
  | 'bgPrimary'
  | 'bgSecondary'
  | 'textPrimary'
  | 'textSecondary'

export const getColorStyles = (color: Color) => {
  switch (color) {
    case 'primary':
      return tw`bg-primary-500`
    case 'secondary':
      return tw`bg-secondary-300`
    case 'textPrimary':
      return tw`bg-textPrimary`
    case 'textSecondary':
      return tw`bg-textSecondary`
    case 'bgPrimary':
      return tw`bg-bgPrimary`
    case 'bgSecondary':
      return tw`bg-bgSecondary`
    default:
      return tw`bg-white`
  }
}

export const getTextColorStyles = (color: Color) => {
  switch (color) {
    case 'primary':
      return tw`text-primary-500`
    case 'secondary':
      return tw`text-secondary-300`
    case 'textPrimary':
      return tw`text-textPrimary`
    case 'textSecondary':
      return tw`text-textSecondary`
    case 'bgPrimary':
      return tw`text-bgPrimary`
    case 'bgSecondary':
      return tw`text-bgSecondary`
    default:
      return tw`text-white`
  }
}
