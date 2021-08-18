import { createGlobalStyle } from '@emotion/styled'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
	body {
		-webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
	}
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
