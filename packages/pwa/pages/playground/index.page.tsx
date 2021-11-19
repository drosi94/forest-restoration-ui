import 'twin.macro'
import React from 'react'
import { useTranslation } from 'next-i18next'

import { getServerSideTranslations } from 'shared/utils/serverSideTranslations'

export default function Home() {
  const { t } = useTranslation(['common', 'home'])

  return <div></div>
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await getServerSideTranslations(locale, ['home'])),
    },
  }
}
