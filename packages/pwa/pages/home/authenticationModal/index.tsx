import React, { useState } from 'react'
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth'
import { Modal, Typography } from '../../../../shared'
import { firebaseApp } from '../../../firebase/clientApp'

const auth = getAuth(firebaseApp)

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
}

export const AuthenticationModal = ({ isOpen, setIsOpen }) => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} title="Authentication">
      {!isSignedIn ? (
        <Typography variant="body">Login</Typography>
      ) : (
        <div>
          <Typography variant="body">
            Welcome {auth.currentUser.displayName}! You are now signed-in!
            <Typography underlined color="primary">
              <a onClick={() => auth.signOut()}>Sign-out</a>
            </Typography>
          </Typography>
        </div>
      )}
    </Modal>
  )
}
