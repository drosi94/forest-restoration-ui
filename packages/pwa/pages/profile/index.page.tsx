import 'twin.macro'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { getServerSideTranslations } from 'shared/utils/serverSideTranslations'
import { useAuthentication } from 'shared/providers/authentication'

import { CreateProfile } from './create'

export default function Profile() {
  const { t } = useTranslation(['profile'])
  const { user } = useAuthentication()

  return (
    <>
      <Head>
        <title>{t('profile:Forest Restoration Create Profile')}</title>
      </Head>
      <div tw="flex">
        {!user?.hasCompleteProfile ? <CreateProfile /> : <span>PROFILE VIEW TODO</span>}
      </div>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await getServerSideTranslations(locale, ['profile'])),
    },
  }
}
