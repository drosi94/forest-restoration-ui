import 'twin.macro'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class PWADocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#fff" />
          <script src="/themeToggle.js" defer />
        </Head>
        <body tw="bg-bgPrimary text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default PWADocument
