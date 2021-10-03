import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuthentication } from '../../providers/authentication'
import { publicPaths } from './publicPaths'

export function RouteGuard({ children }) {
  const { isAuthenticated, loading } = useAuthentication()
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    // on initial load - run auth check]

    authCheck(router.asPath)

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false)
    router.events.on('routeChangeStart', hideContent)

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck)

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent)
      router.events.off('routeChangeComplete', authCheck)
    }
  }, [isAuthenticated])

  function authCheck(url) {
    const userExistInLocalStorage = process.browser ? !!localStorage.getItem('user') : false
    if (userExistInLocalStorage) {
      setAuthorized(true)
    } else {
      const path = url.split('?')[0]
      if (!isAuthenticated && !publicPaths.includes(path)) {
        setAuthorized(false)
        router.push({
          pathname: '/',
        })
      } else {
        setAuthorized(true)
      }
    }
  }

  return authorized && children
}
