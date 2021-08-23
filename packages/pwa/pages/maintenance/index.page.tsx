import React from 'react'
import Image from 'next/image'
import { Trans, useTranslation } from 'next-i18next'
import tw from 'twin.macro'
import { Typography, Logo } from '../../../shared'
import logoImage from '../../public/icon-384x384.png'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Maintenance() {
  const { t } = useTranslation('maintenance')

  return (
    <div css={[tw`flex flex-col h-screen items-center justify-center`]}>
      <Logo CustomImageComponent={<Image alt="Logo" src={logoImage} width="200" height="200" />} />
      <Typography fontSize="xxlarge" color="primary">
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
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'maintenance'])),
    },
  }
}
