import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { getServerSideTranslations } from '../../shared/utils/serverSideTranslations'
import { useAuthentication } from '../../shared/providers/authentication'

export default function Authentication() {
  const router = useRouter()
  const { isAuthenticated } = useAuthentication()

  const { previous } = router.query

  useEffect(() => {
    router.replace({
      pathname: (previous as string) ?? '/',
      query: {
        authentication: !isAuthenticated ? true : undefined,
        ...router.query,
      },
    })
  }, [router, previous, isAuthenticated])

  return null
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await getServerSideTranslations(locale)),
    },
  }
}
