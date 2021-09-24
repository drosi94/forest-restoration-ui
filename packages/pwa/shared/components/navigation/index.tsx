import { useEffect, useState } from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { Button, Logo, Navbar, Typography, UserActionsPopover } from '@forest-restoration/shared'
import { ToggleTheme } from '../toggleTheme'
import { UserIcon } from '@heroicons/react/solid'
import { AuthenticationModal } from '../../../pages/home/authenticationModal'
import { firebase } from '../../../firebase/clientApp'

const isAuthenticated = false

export const Navigation = () => {
  const { t } = useTranslation(['common', 'navigation'])

  const [isAuthenticationModalOpened, setIsAuthenticationModalOpened] = useState(false)
  useEffect(() => {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      setIsAuthenticationModalOpened(true)
    }
  }, [])
  return (
    <>
      <header>
        <Navbar
          customLogo={
            <Logo
              CustomImageComponent={
                <Image alt="Logo" src="/icon-384x384.png" width="50" height="50" />
              }
            />
          }
          primaryNav={
            <>
              <Link href="/home" passHref>
                <a>
                  <Typography tw="hover:opacity-70">{t('navigation:Home')}</Typography>
                </a>
              </Link>
              <Link href="/maintenance" passHref>
                <a>
                  <Typography tw="hover:opacity-70">Maintenance</Typography>
                </a>
              </Link>
            </>
          }
          secondaryNav={
            <>
              {isAuthenticated ? (
                <UserActionsPopover displayName="test">
                  <div tw="flex flex-col">
                    <a href="#" tw="py-3 px-2 hover:bg-primary-500">
                      <Typography tw="hover:opacity-70">{t('navigation:Logout')}</Typography>
                    </a>
                  </div>
                </UserActionsPopover>
              ) : (
                <button
                  tw="border-2 border-textPrimary rounded-full p-1 hover:opacity-70 active:border-gray-500"
                  onClick={() => setIsAuthenticationModalOpened(true)}
                >
                  <UserIcon tw="text-textPrimary" width={24} aria-label={t('navigation:Login')} />
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
