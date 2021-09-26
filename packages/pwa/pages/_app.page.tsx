import LogRocket from 'logrocket'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import { GlobalStyles } from 'twin.macro'
import { Toast } from '@forest-restoration/shared'
import { useFixHeightViewport } from '../shared/hooks/useFixHeightViewport'
import { ThemeProvider, useThemeProvider } from '../shared/providers/theme'
import { Navigation } from '../shared/components/navigation'
import { AuthenticationProvider } from '../shared/providers/authentication'
import '../theme.css'
import '../firebase/clientApp'
import { ModalHandler } from '../shared/components/modals/handler'

if (process.env.NODE_ENV === 'production') {
  LogRocket.init('hq4geg/forest-restoration')
}

function MyApp({ Component, pageProps }) {
  const { isDarkMode } = useThemeProvider()
  useFixHeightViewport()
  const { route } = useRouter()

  return (
    <>
      <Toast darkMode={isDarkMode} duration={4000} marginTop="2.5rem" />
      <Head>
        <title>Forest Restoration</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyles />
      {route !== '/maintenance' && <Navigation />}
      <div tw="flex flex-col h-[calc(100 * var(--vh))]">
        <main tw="flex-1">
          <Component {...pageProps} />
        </main>

        <footer tw="flex justify-center items-end p-2 border-t-2 border-secondary-300">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://vercel.com/?utm_source=forest-restoration&utm_campaign=oss"
          >
            <Image alt="Vercel Logo" src="/poweredByVercel.png" width={212} height={44} />
          </a>
        </footer>
      </div>
      <ModalHandler />
    </>
  )
}

function AppWithProviders({ Component, pageProps }) {
  return (
    <AuthenticationProvider>
      <ThemeProvider>
        <MyApp Component={Component} pageProps={pageProps} />
      </ThemeProvider>
    </AuthenticationProvider>
  )
}

export default appWithTranslation(AppWithProviders)
