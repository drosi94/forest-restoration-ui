import { useEffect } from 'react'
import tw from 'twin.macro'
import { useRouter } from 'next/router'

import { getServerSideTranslations } from '../shared/utils/serverSideTranslations'
import { AuthenticatedOnly } from 'shared/components/authenticatedOnly'
import { Typography } from '@forest-restoration/shared'

export default function Home() {
  const { pathname, replace } = useRouter()

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE == 'true' && pathname == '/') {
      replace('/maintenance')
    }
  })

  return (
    <div tw="h-[calc(100 * var(--vh))]">
      <div tw="h-full py-8">
        <div tw="flex h-full flex-col p-12 gap-3">
          <AuthenticatedOnly>
            <Typography variant="heading">ΣΥΝΔΕΘΗΚΕΣ!!</Typography>
          </AuthenticatedOnly>
        </div>
      </div>
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
