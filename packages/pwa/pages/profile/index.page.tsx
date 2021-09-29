import 'twin.macro'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { getServerSideTranslations } from '../../shared/utils/serverSideTranslations'
import { CreateProfile } from './create'

export default function Profile() {
  const { t } = useTranslation(['profile'])

  return (
    <>
      <Head>
        <title>{t('profile:Forest Restoration Create Profile')}</title>
      </Head>
      <div tw="flex">
        <CreateProfile />
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
