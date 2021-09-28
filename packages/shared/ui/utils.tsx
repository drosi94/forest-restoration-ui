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

export const getAccentColorStyles = (color: Color) => {
  switch (color) {
    case 'primary':
      return tw`accent-primary-600`
    case 'secondary':
      return tw`accent-secondary-300`
    case 'textPrimary':
      return tw`accent-textPrimary`
    case 'textSecondary':
      return tw`accent-textSecondary`
    case 'bgPrimary':
      return tw`accent-bgPrimary`
    case 'bgSecondary':
      return tw`accent-bgSecondary`
    default:
      return tw`accent-white`
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

// TODO: FIND A BETTER NAME
export const getItem = (item: string | any, key: string | (() => string)) => {
  if (Array.isArray(item)) {
    return item.map((i) => getItem(i, key))
    // throw new Error('Maybe you forgot to add the multiple prop')
  } else {
    return item
      ? typeof item === 'string'
        ? item
        : item[typeof key === 'function' ? key() : key]
      : null
  }
}

export const mergeRefs = (...refs) => {
  const filteredRefs = refs.filter(Boolean)
  if (!filteredRefs.length) return null
  if (filteredRefs.length === 0) return filteredRefs[0]
  return (inst) => {
    for (const ref of filteredRefs) {
      if (typeof ref === 'function') {
        ref(inst)
      } else if (ref) {
        ref.current = inst
      }
    }
  }
}
