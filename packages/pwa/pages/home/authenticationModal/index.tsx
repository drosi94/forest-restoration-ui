import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import firebase from 'firebase'
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
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
}

export const AuthenticationModal = ({ isOpen, setIsOpen, version = '5.0.0' }) => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const { locale } = useRouter()
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user)
    })
    return () => {
      unregisterAuthObserver()
    } // Make sure we un-register Firebase observers when the component unmounts.
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
        title="Authentication"
        description={
          !isSignedIn
            ? 'Please select the way that you want to firebase.authenticate. You can create/use your local account (Sign in with email) or your existing one in google, facebook etc'
            : ''
        }
        Footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}
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
