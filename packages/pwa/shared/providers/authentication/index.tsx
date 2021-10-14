import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { createContainer } from 'react-tracked'
import toast from 'react-hot-toast'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocumentData } from 'react-firebase-hooks/firestore'

import { firebase, firestore } from '../../../firebase/clientApp'

export type UserDocument = {
  username?: string
  gender?: string
  birthDate?: number
  hasCompleteProfile?: boolean
} & firebase.User

export type State = {
  isAuthenticated?: boolean
  user?: UserDocument
  loading?: boolean
}

const useAuthenticationState = () => {
  const [user, loading, error] = useAuthState(firebase.auth())
  const [userDocument, isUserDocumentLoading] = useDocumentData(
    user?.uid ? firestore.doc(`users/${user?.uid}`) : null
  )

  const [state, setState] = useState<State>(() => {
    try {
      const storedUser = process.browser ? localStorage.getItem('user') : null
      return {
        isAuthenticated: !!storedUser,
        user: storedUser ? (JSON.parse(storedUser) as UserDocument) : null,
      }
    } catch (err) {
      return {
        isAuthenticated: false,
        user: null,
      }
    }
  })

  useEffect(() => {
    if (loading || isUserDocumentLoading) {
      setState({
        ...state,
        loading: true,
      })
    } else {
      if (user && userDocument) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            displayName: userDocument.displayName || user.displayName,
            email: user.email,
            photoURL: userDocument.photoURL || user.photoURL,
          })
        )
        setState({
          isAuthenticated: true,
          user: { ...user, ...userDocument },
          loading: false,
        })
      } else {
        setState({
          isAuthenticated: false,
          user: null,
          loading: false,
        })
      }
    }

    if (!loading && error) {
      localStorage.removeItem('user')
      toast.error('Something went wrong. Try again')
    }
  }, [user, loading, error, isUserDocumentLoading, userDocument])

  return [state, setState] as readonly [State, Dispatch<SetStateAction<State>>]
}

export const {
  Provider: AuthenticationProvider,
  useTrackedState: useAuthentication,
  useUpdate: useSetAuthentication,
} = createContainer(useAuthenticationState)
