import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { getServerSideTranslations } from '../shared/utils/serverSideTranslations'

export default function Home() {
  const { pathname, replace } = useRouter()

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE == 'true' && pathname == '/') {
      replace('/maintenance')
    }
  })

  return <div></div>
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await getServerSideTranslations(locale)),
    },
  }
}
