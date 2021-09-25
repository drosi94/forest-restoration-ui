import React, { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { FirebaseAuthUI } from '../../firebaseAuthUI'
import { BaseModal } from '../baseModal'
import { useAuthentication } from '../../../providers/authentication'

const version = '5.0.0'

export const AuthenticationModal = ({ isOpen, onClose }) => {
  const router = useRouter()
  const { t } = useTranslation(['common', 'authentication'])
  const { isAuthenticated } = useAuthentication()

  const isLocaleRtl = false
  const authLanguage = router.locale?.split('-')[0] ?? 'en'

  useEffect(() => {
    if (isAuthenticated && isOpen) {
      onClose()
    }
  }, [isAuthenticated, isOpen, onClose, router])

  return (
    <>
      <Head>
        <link
          type="text/css"
          rel="stylesheet"
          href={`https://www.gstatic.com/firebasejs/ui/${version}/firebase-ui-auth${
            isLocaleRtl ? '-rtl' : ''
          }.css`}
        />
      </Head>
      <Script
        src={`https://www.gstatic.com/firebasejs/ui/${version}/firebase-ui-auth__${authLanguage}.js`}
        strategy="beforeInteractive"
      />
      <BaseModal isOpen={isOpen} handleClose={onClose} title={t('authentication:Authentication')}>
        <FirebaseAuthUI />
      </BaseModal>
    </>
  )
}
