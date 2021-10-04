import 'twin.macro'
import { useTranslation } from 'next-i18next'

import { getServerSideTranslations } from 'shared/utils/serverSideTranslations'
import { AuthenticatedOnly } from 'shared/components/authenticatedOnly'

const options = [
  { label: 'Test1', value: 'test1' },
  { label: 'Test2', value: 'test2' },
]

export default function Home() {
  const { t } = useTranslation(['common', 'home'])

  return (
    <div tw="h-full py-8">
      <div tw="flex h-full flex-col p-12 gap-3">
        <AuthenticatedOnly>
          <div>geia</div>
        </AuthenticatedOnly>
      </div>
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
