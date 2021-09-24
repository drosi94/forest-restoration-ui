import { useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  const { pathname, replace } = useRouter()

  useLayoutEffect(() => {
    if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE == 'true' && pathname == '/') {
      replace('/maintenance')
    }
  })

  return <div></div>
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'navigation', 'authentication'])),
    },
  }
}
