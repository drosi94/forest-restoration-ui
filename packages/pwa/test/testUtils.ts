import { render } from '@testing-library/react'
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers = ({ children }) => {
  return children
}

const customRender = (ui, options = {}) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender as render }

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}));