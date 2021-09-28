import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { createContainer } from 'react-tracked'
import { firebase } from '../../../firebase/clientApp'

export type State = {
  isAuthenticated?: boolean
  user?: firebase.User
}

const useAuthenticationState = () => {
  const [state, setState] = useState<State>(() => {
    try {
      const storedUser = process.browser ? localStorage.getItem('user') : null
      return {
        isAuthenticated: !!storedUser,
        user: storedUser ? (JSON.parse(storedUser) as firebase.User) : null,
      }
    } catch (err) {
      return {
        isAuthenticated: false,
        user: null,
      }
    }
  })

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user: firebase.User) => {
      if (user) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            photoURL: user.photoURL,
          })
        )
      }
      setState({
        isAuthenticated: !!user,
        user: user,
      })
    })

    return () => {
      unregisterAuthObserver()
    }
  }, [])

  return [state, setState] as readonly [State, Dispatch<SetStateAction<State>>]
}

export const {
  Provider: AuthenticationProvider,
  useTrackedState: useAuthentication,
  useUpdate: useSetAuthentication,
} = createContainer(useAuthenticationState)
