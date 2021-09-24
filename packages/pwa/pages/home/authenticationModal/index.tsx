import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { firebase } from '../../../firebase/clientApp'
import { Button, Modal, Typography } from '../../../../shared'
import { FirebaseAuthUI } from '../../../shared/components/firebaseAuthUI'

const uiConfig = {
  signInFlow:
    process.browser && firebase.auth().isSignInWithEmailLink(window.location.href)
      ? 'redirect'
      : 'popup',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
      forceSameDevice: false,
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
}

export const AuthenticationModal = ({ isOpen, setIsOpen, version = '5.0.0' }) => {
  const { locale } = useRouter()
  const { t } = useTranslation(['common', 'authentication'])

  const [isSignedIn, setIsSignedIn] = useState(false)
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user)
    })
    return () => {
      unregisterAuthObserver()
    }
  }, [])

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
        {!isSignedIn ? (
          <FirebaseAuthUI uiConfig={uiConfig} />
        ) : (
          <div>
            <Typography variant="body">
              Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!
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
