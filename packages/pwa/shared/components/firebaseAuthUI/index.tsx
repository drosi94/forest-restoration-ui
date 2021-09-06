import React, { useEffect, useState, useRef } from 'react'
import firebase from 'firebase'

const FIREBASEUI_CONTAINER_ID = 'firebaseui_container'

const firebaseUiDeletion = Promise.resolve()

export const FirebaseAuthUI = ({ uiConfig, className = undefined, uiCallback = undefined }) => {
  const unregisterAuthObserver = useRef(null)
  const container = useRef()

  useEffect(() => {
    let unmount = null
    const firebaseUI = window['firebaseui']
    if (firebaseUI) {
      window['firebase'] = firebase
      const firebaseAuth = firebase.auth()

      let firebaseUiWidget
      // Firebase UI only works on the Client. So we're loading the package in `useEffect`
      // So that this works when doing server-side rendering.

      // Wait in case the firebase UI instance is being deleted.
      // This can happen if you unmount/remount the element quickly.
      firebaseUiDeletion.then(() => {
        // Get or Create a firebaseUI instance.
        firebaseUiWidget =
          firebaseUI.auth.AuthUI.getInstance() || new firebaseUI.auth.AuthUI(firebaseAuth)
        if (uiConfig.signInFlow === 'popup') {
          firebaseUiWidget.reset()
        }

        // We track the auth state to reset firebaseUi if the user signs out.
        let userSignedIn = false
        unregisterAuthObserver.current = firebaseAuth.onAuthStateChanged((user) => {
          if (!user && userSignedIn) {
            firebaseUiWidget.reset()
          }
          userSignedIn = !!user
        })

        // Trigger the callback if any was set.
        if (uiCallback) {
          uiCallback(firebaseUiWidget)
        }

        // Render the firebaseUi Widget.
        firebaseUiWidget.start('#' + FIREBASEUI_CONTAINER_ID, uiConfig)

        unmount = () =>
          firebaseUiDeletion.then(() => {
            window['firebase'] = null
            unregisterAuthObserver.current()
            return firebaseUiWidget.delete()
          })
      })

      return unmount
    }
  }, [uiCallback, uiConfig])

  return (
    <>
      <div ref={container} className={className} id={FIREBASEUI_CONTAINER_ID} />
    </>
  )
}
