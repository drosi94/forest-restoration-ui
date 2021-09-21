import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import tw from 'twin.macro'
import { Typography } from '../../../shared'

export default function Blog() {
  const { t } = useTranslation('blog')

  return (
    <div>
      <Typography>Blog works</Typography>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'blog'])),
    },
  }
}
