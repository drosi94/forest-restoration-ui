import React, { useState, useEffect } from 'react'
import { Button, Modal, Typography } from '../../../../shared'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'

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

export const AuthenticationModal = ({ isOpen, setIsOpen }) => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user)
    })
    return () => unregisterAuthObserver() // Make sure we un-register Firebase observers when the component unmounts.
  }, [])

  return (
    <Modal
      isOpen={isOpen}
      handleClose={() => setIsOpen(false)}
      title="Authentication"
      description={
        !isSignedIn
          ? 'Please select the way that you want to authenticate. You can create/use your local account (Sign in with email) or your existing one in google, facebook etc'
          : ''
      }
      Footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}
    >
      {!isSignedIn ? (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
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
  )
}
