import { appWithTranslation } from 'next-i18next'
import { GlobalStyles } from 'twin.macro'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)
