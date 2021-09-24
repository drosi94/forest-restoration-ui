import { useEffect, useState } from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { UserIcon } from '@heroicons/react/solid'
import { Logo, Navbar, Typography, UserActionsPopover } from '@forest-restoration/shared'

import { useAuthentication } from '../../providers/authentication'
import { ToggleTheme } from '../toggleTheme'
import { AuthenticationModal } from '../authenticationModal'
import { firebase } from '../../../firebase/clientApp'
import { NavLink } from './navLink'
import toast from 'react-hot-toast'


export const Navigation = () => {
  const { t } = useTranslation(['common', 'authentication', 'navigation'])
  const {isAuthenticated, user} = useAuthentication()

  const [isAuthenticationModalOpened, setIsAuthenticationModalOpened] = useState(false)
  useEffect(() => {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      setIsAuthenticationModalOpened(true)
    }
  }, [])

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut()
      toast.success(t('authentication:Logged Out'))
    } catch(err) {
      toast.error(t('common:Something went wrong'))
      throw err;
    }

  }

  return (
    <>
      <header>
        <Navbar
          customLogo={
            <Logo
              CustomImageComponent={
                <Link href="/" passHref>
                  <a>
                    <Image
                      alt="Forest Restoration Logo"
                      src="/icon-384x384.png"
                      width="50"
                      height="50"
                    />
                  </a>
                </Link>
              }
            />
          }
          primaryNav={
            <>
              <NavLink href="/" exact title={t('navigation:Home')} />
              <NavLink href="/home" title={t('navigation:Playground')} />
              <NavLink href="/blog" title={t('navigation:Blog')} />
            </>
          }
          secondaryNav={
            <>
              {isAuthenticated ? (
                <UserActionsPopover displayName={user.displayName}>
                  <div tw="flex flex-col w-96">
                    <div tw="p-2">
                      <Typography>{t('authentication:You are logged in as')}: {' '}
                        <Typography color="primary">{user.displayName}</Typography>
                      </Typography>
                    </div>
                    <button onClick={handleLogout} tw="py-3 px-2 text-left hover:bg-primary-500">
                      <Typography>{t('navigation:Logout')}</Typography>
                    </button>
                  </div>
                </UserActionsPopover>
              ) : (
                <button
                  tw="border-2 border-textPrimary rounded-full p-1 hover:opacity-70 active:border-gray-500"
                  onClick={() => setIsAuthenticationModalOpened(true)}
                >
                  <UserIcon tw="text-textPrimary" width={18} aria-label={t('navigation:Login')} />
                </button>
              )}
              <ToggleTheme />
            </>
          }
        />
      </header>
      <AuthenticationModal
        isOpen={isAuthenticationModalOpened}
        setIsOpen={setIsAuthenticationModalOpened}
      />
    </>
  )
}
