import { appWithTranslation } from 'next-i18next'
import { GlobalStyles } from 'twin.macro'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)
