import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css`
  body {
    -webkit-tap-highlight-color: ${theme`colors.primary`};
    background: ${theme`colors.base-100`};
    color: ${theme`colors.base-content`};
    ${tw`antialiased`}
  }
`

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)
