import { useEffect } from 'react'
import tw from 'twin.macro'
import { useRouter } from 'next/router'

import { getServerSideTranslations } from '../shared/utils/serverSideTranslations'

export default function Home() {
  const { pathname, replace } = useRouter()

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE == 'true' && pathname == '/') {
      replace('/maintenance')
    }
  })

  return <div tw="h-[calc(100 * var(--vh))]"></div>
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await getServerSideTranslations(locale)),
    },
  }
}
