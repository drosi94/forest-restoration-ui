import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import tw from 'twin.macro'
import { Typography, Logo } from '../../../shared'
import { ToggleTheme } from '../../shared/components/toggleTheme'

import logoImage from '../../public/icon-384x384.png'
import { getServerSideTranslations } from '../../shared/utils/serverSideTranslations'

export default function Maintenance() {
  const { t } = useTranslation('maintenance')

  return (
    <div>
      <div tw="p-2 float-right">
        <ToggleTheme />
      </div>
      <div css={[tw`flex flex-col w-full items-center justify-center gap-2`]}>
        <div>
          <Logo
            CustomImageComponent={<Image alt="Logo" src={logoImage} width="200" height="200" />}
          />
        </div>

        <div tw="space-y-1 mt-2 max-w-xs px-2 md:max-w-none ">
          <Typography as="h1" fontSize="xxlarge" color="primary" tw="text-center">
            {t('maintenance:Forest Restoration')}
          </Typography>
          <Typography as="p" variant="body2">
            💻 {t('maintenance:Something great is building...')}
          </Typography>
          <Typography as="p" variant="body2">
            📖 {t('maintenance:Read more')}{' '}
            <Typography color="primary" underlined>
              {' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/drive/folders/1WFFxw82sffyXTs-3liRE7-qbZ3dvEKc9?usp=sharing"
              >
                {t('maintenance:here')}
              </a>
            </Typography>
            .
          </Typography>
          <Typography as="p" variant="body2">
            {t('maintenance:If you want to help in development, see the')}{' '}
            <Typography color="primary" underlined>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/drosi94/forest-restoration-ui"
              >
                github
              </a>{' '}
            </Typography>
            {t('maintenance:repository')} 😃
          </Typography>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...await getServerSideTranslations(locale, ['maintenance']),
    },
  }
}
