import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { GlobalStyles } from 'twin.macro'
import { Toast } from '@forest-restoration/shared'
import { ThemeProvider, useThemeProvider } from '../shared/providers/themeProvider'

import '../theme.css'

function MyApp({ Component, pageProps }) {
  const { isDarkMode } = useThemeProvider()

  return (
    <>
      <Toast darkMode={isDarkMode} />
      <Head>
        <title>Forest Restoration</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

function AppWithProviders({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <MyApp Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(AppWithProviders)
