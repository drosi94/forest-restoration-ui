import 'twin.macro'
import React from 'react'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'

import { getServerSideTranslations } from 'shared/utils/serverSideTranslations'
import { AuthenticatedOnly } from 'shared/components/authenticatedOnly'

const options = [
  { label: 'Test1', value: 'test1' },
  { label: 'Test2', value: 'test2' },
]

export default function Home() {
  const { t } = useTranslation(['common', 'home'])

  const Map = React.useMemo(
    () =>
      dynamic(() => import('./map'), {
        loading: () => <p>A map is loading</p>,
        ssr: true,
      }),
    []
  )

  return (
    <div tw="margin-top[-7px]">
      <Map />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await getServerSideTranslations(locale, ['home'])),
    },
  }
}
