import { useTranslation } from 'next-i18next'
import { getServerSideTranslations } from '../../shared/utils/serverSideTranslations'
import { CreateProfile } from './create'

export default function Profile() {
  const { t } = useTranslation('profile')

  return <CreateProfile />
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await getServerSideTranslations(locale, ['profile'])),
    },
  }
}
