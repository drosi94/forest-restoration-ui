import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import { GlobalStyles } from 'twin.macro'
import {
  Button,
  Logo,
  Navbar,
  Toast,
  Typography,
  UserActionsPopover,
} from '@forest-restoration/shared'
import { useFixHeightViewport } from '../shared/hooks/useFixHeightViewport'
import { ThemeProvider, useThemeProvider } from '../shared/providers/themeProvider'
import '../theme.css'
import '../firebase/clientApp'
import logoImage from '../public/icon-384x384.png'
import { ToggleTheme } from '../shared/components/toggleTheme'

function MyApp({ Component, pageProps }) {
  const { isDarkMode } = useThemeProvider()
  useFixHeightViewport()
  const { route } = useRouter()
  const isAuthenticated = false

  return (
    <>
      <Toast darkMode={isDarkMode} />
      <Head>
        <title>Forest Restoration</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyles />
      {route !== '/maintenance' && (
        <header>
          <Navbar
            customLogo={
              <Logo
                CustomImageComponent={<Image alt="Logo" src={logoImage} width="50" height="50" />}
              />
            }
            primaryNav={
              <>
                <Link href="/home" passHref>
                  <a>
                    <Typography tw="hover:opacity-70">Home</Typography>
                  </a>
                </Link>
                <Link href="/blog" passHref>
                  <a>
                    <Typography tw="hover:opacity-70">Blog</Typography>
                  </a>
                </Link>
              </>
            }
            secondaryNav={
              <>
                {isAuthenticated ? (
                  <UserActionsPopover displayName="test">
                    <div tw="flex flex-col">
                      <a href="#" tw="py-3 px-2 rounded hover:bg-primary-500">
                        <Typography tw="hover:opacity-70">Logout</Typography>
                      </a>
                      <a href="#" tw="py-3 px-2 rounded hover:bg-primary-500">
                        <Typography tw="hover:opacity-70">Logout</Typography>
                      </a>
                    </div>
                  </UserActionsPopover>
                ) : (
                  <Button variant="text">Login</Button>
                )}
                <ToggleTheme />
              </>
            }
          />
        </header>
      )}
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
