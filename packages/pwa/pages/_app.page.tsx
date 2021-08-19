import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { GlobalStyles } from 'twin.macro'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Forest Restoration</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)
