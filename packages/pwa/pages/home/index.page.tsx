import tw from 'twin.macro'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { Button, Typography, Modal } from '@forest-restoration/shared'
import { useState } from 'react'

export default function Home() {
  const { t } = useTranslation(['common', 'home'])
  const [open, setOpen] = useState(false)

  return (
    <div tw="h-screen">
      <div tw="flex justify-center items-center h-full flex-col gap-3">
        <Button>{t('common:hello')}</Button>
        <Typography as="h1" variant="heading" tw="text-2xl">
          {t('home:test')}
        </Typography>
        <Button onClick={() => setOpen((v) => !v)}>{open ? 'close' : 'open'}</Button>
        <Modal
          isOpen={open}
          handleClose={() => setOpen(false)}
          title="A title"
          description="My descr"
        >
          <span>fef</span>
        </Modal>
      </div>
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
