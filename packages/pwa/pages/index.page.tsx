import 'twin.macro'
import { useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { getServerSideTranslations } from '../shared/utils/serverSideTranslations'

export default function Home() {
  const { pathname, replace } = useRouter()

  const Map = useMemo(
    () =>
      dynamic(() => import('shared/components/map'), {
        loading: () => <p>Map is loading</p>,
        ssr: true,
      }),
    []
  )

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE == 'true' && pathname == '/') {
      replace('/maintenance')
    }
  })

  return (
    <div tw="height[78vh] margin-top[-8px] overflow-hidden">
      <Map
        center={[38.0602957, 19.9911706]}
        markers={[
          {
            id: '1',
            lat: 38.0602957,
            lng: 19.99117,
          },
        ]}
      />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await getServerSideTranslations(locale)),
    },
  }
}
