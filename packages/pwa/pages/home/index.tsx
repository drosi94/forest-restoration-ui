import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { Button } from '@forest-restoration/shared'

export default function Home() {
  const { t } = useTranslation(['common', 'home'])

  return (
    <div>
      <Button>{t('common:hello')}</Button>

      <span>{t('home:test')}</span>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  }
}
