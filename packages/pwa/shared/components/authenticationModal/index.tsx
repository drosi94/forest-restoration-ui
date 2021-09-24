import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Modal, Typography } from '@forest-restoration/shared'

import { FirebaseAuthUI } from '../firebaseAuthUI'
import { useAuthentication } from '../../providers/authentication'
import { firebase } from '../../../firebase/clientApp'



export const AuthenticationModal = ({ isOpen, setIsOpen, version = '5.0.0' }) => {
  const { locale } = useRouter()
  const { t } = useTranslation(['common', 'authentication'])
  const {isAuthenticated, user} = useAuthentication()

  const isLocaleRtl = false
  const authLanguage = locale?.split('-')[0] ?? 'en'

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
      <Modal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        title={t('authentication:Authentication')}
      >
        {!isAuthenticated ? (
          <FirebaseAuthUI  />
        ) : (
          <div>
            <Typography variant="body">
              Welcome {user.displayName}! You are now signed-in!
              <Typography underlined color="primary">
                <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
              </Typography>
            </Typography>
          </div>
        )}
      </Modal>
    </>
  )
}
