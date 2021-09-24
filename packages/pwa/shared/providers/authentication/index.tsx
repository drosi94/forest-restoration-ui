import {  Dispatch, SetStateAction, useEffect, useState } from 'react'
import { createContainer } from 'react-tracked'
import { firebase} from '../../../firebase/clientApp'



export type State = {
  isAuthenticated?: boolean;
  user?: firebase.User;
};

const initialState = {
  isAuthenticated: false,
  user: null,
}

const useAuthenticationState = () => {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      setState({
        isAuthenticated: !!user,
        user: user
      })
    })

    return () => {
      unregisterAuthObserver()
    }
  }, [])

  return [state, setState] as readonly [State, Dispatch<SetStateAction<State>>];
}

export const { Provider: AuthenticationProvider, useTrackedState: useAuthentication, useUpdate: useSetAuthentication} =
  createContainer(useAuthenticationState);
