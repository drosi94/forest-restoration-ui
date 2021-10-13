const colors = require('./colors/index')
const utilities = require('./dist/utilities')
const base = require('./dist/base')
const styled = require('./dist/styled')
const utilitiesUnstyled = require('./dist/utilities-unstyled')
const utilitiesStyled = require('./dist/utilities-styled')
const themes = require('./colors/themes')
const colorNames = require('./colors/colorNames')
const hex2hsl = require('./colors/hex2hsl')

const filterObject = (raw, keysToInclude) =>
  Object.keys(raw)
    .filter((key) => keysToInclude.find((keysToInclude) => key.includes(keysToInclude)))
    .reduce((obj, key) => {
      obj[key] = raw[key]
      return obj
    }, {})

const mainFunction = ({ addBase, addComponents, addUtilities, config }) => {
  const includeComponentKeys = [
    'btn',
    'card',
    'alert',
    'breadcrumb',
    'checkbox',
    'form',
    'input',
    'radio',
    'select',
    'textarea',
    'navbar',
    'placeholder',
    'indicator',
    'badge',
    'kbd',
    'label',
    'media',
    'keyframe',
  ]

  let diasyuiIncludedItems = []

  // inject @base style
  if (config('daisyui.base') != false) {
    addBase(base)
    diasyuiIncludedItems.push('base')
  }

  addComponents(filterObject(styled, includeComponentKeys))

  let includedThemesObj = new Object()

  function convertThemeColorsToHsl(input) {
    let resultObj = {}
    if (typeof input === 'object' && input !== null) {
      Object.entries(input).forEach(([rule, value]) => {
        if (colorNames.hasOwnProperty(rule)) {
          resultObj[colorNames[rule]] = hex2hsl(value)
        } else {
          resultObj[rule] = value
        }
      })
      return resultObj
    }
    return input
  }

  // add light themes
  if (config('daisyui.themes') == false) {
    Object.entries(themes).forEach(([theme, index]) => {
      includedThemesObj[theme] = convertThemeColorsToHsl(themes[theme])
    })
  }

  // add default themes
  if (config('daisyui.themes') != false) {
    Object.entries(themes).forEach(([theme, index]) => {
      includedThemesObj[theme] = convertThemeColorsToHsl(themes[theme])
    })
  }

  // add custom themes
  if (Array.isArray(config('daisyui.themes'))) {
    config('daisyui.themes').forEach((item, index) => {
      if (typeof item === 'object' && item !== null) {
        Object.entries(item).forEach(([customThemeName, customThemevalue]) => {
          includedThemesObj['[data-theme=' + customThemeName + ']'] = convertThemeColorsToHsl(
            customThemevalue
          )
        })
      }
    })
  }

  let themeOrder = []
  if (Array.isArray(config('daisyui.themes'))) {
    config('daisyui.themes').forEach((theme, index) => {
      if (typeof theme === 'object' && theme !== null) {
        Object.entries(theme).forEach(([customThemeName, customThemevalue]) => {
          themeOrder.push(customThemeName)
        })
      } else if (includedThemesObj.hasOwnProperty('[data-theme=' + theme + ']')) {
        themeOrder.push(theme)
      }
    })
  } else if (config('daisyui.themes') != false) {
    themeOrder = [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
    ]
  } else if (config('daisyui.themes') == false) {
    themeOrder.push('light')
  }

  // inject themes in order
  themeOrder.forEach((themeName, index) => {
    if (index === 0) {
      // first theme as root
      addBase({ [':root']: includedThemesObj['[data-theme=' + themeName + ']'] })
    } else if (index === 1) {
      // auto dark
      if (themeOrder[0] != 'dark' && themeOrder.includes('dark')) {
        addBase({
          ['@media (prefers-color-scheme: dark)']: {
            [':root']: includedThemesObj['[data-theme=dark]'],
          },
        })
      }
      // theme 0 with name
      addBase({
        ['[data-theme=' + themeOrder[0] + ']']: includedThemesObj[
          '[data-theme=' + themeOrder[0] + ']'
        ],
      })
      // theme 1 with name
      addBase({
        ['[data-theme=' + themeOrder[1] + ']']: includedThemesObj[
          '[data-theme=' + themeOrder[1] + ']'
        ],
      })
    } else {
      addBase({
        ['[data-theme=' + themeName + ']']: includedThemesObj['[data-theme=' + themeName + ']'],
      })
    }
  })
  diasyuiIncludedItems.push('themes[' + themeOrder.length + ']')

  // inject @utilities style needed by components
  if (config('daisyui.utils') != false) {
    addComponents(utilities, { variants: ['responsive'] })
    addComponents(filterObject(utilitiesUnstyled, includeComponentKeys), {
      variants: ['responsive'],
    })
    addComponents(filterObject(utilitiesStyled, includeComponentKeys), { variants: ['responsive'] })
    diasyuiIncludedItems.push('utilities')
  }
}

// check if tailwindcss package exists
let isTailwindInstalled = false
try {
  require.resolve('tailwindcss/plugin')
  isTailwindInstalled = true
} catch (er) {
  isTailwindInstalled = false
}
if (isTailwindInstalled !== false) {
  module.exports = require('tailwindcss/plugin')(mainFunction, { theme: { extend: { colors } } })
} else {
  module.exports = mainFunction
}
