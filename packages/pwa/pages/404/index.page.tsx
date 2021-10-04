import 'twin.macro'
import { getServerSideTranslations } from 'shared/utils/serverSideTranslations'
import { PageLink } from 'shared/components/pageLink'
import { Typography } from '@forest-restoration/shared'
import { useTranslation } from 'react-i18next'

export default function Custom404() {
  const { t } = useTranslation(['404'])
  return (
    <div tw="container mx-auto px-4">
      <section tw="py-8 px-4 text-center">
        <div tw="flex flex-col gap-8 max-w-md mx-auto">
          <Typography
            as="span"
            tw="uppercase text-4xl lg:text-7xl text-primary-focus"
            fontFamily="notoSerif"
          >
            404
          </Typography>
          <Typography
            as="h2"
            tw="uppercase text-xl lg:text-2xl"
            color="primary"
            fontFamily="notoSerif"
          >
            {t('404:We are sorry, Page not found!')}
          </Typography>
          <Typography tw="text-sm lg:text-base">
            {t(
              '404:The page you are looking for might have been removed had its name changed or is temporarily unavailable.'
            )}
          </Typography>
          <PageLink href="/" tw="btn btn-primary btn-wide self-center">
            {t('404:Back To Homepage')}
          </PageLink>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await getServerSideTranslations(locale, ['404'])),
    },
  }
}
