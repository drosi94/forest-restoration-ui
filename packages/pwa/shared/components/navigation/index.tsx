import tw from 'twin.macro'
import toast from 'react-hot-toast'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { UserIcon } from '@heroicons/react/solid'
import { Logo, Navbar, Typography, UserActionsPopover } from '@forest-restoration/shared'

import { useAuthentication } from '../../providers/authentication'
import { ToggleTheme } from '../toggleTheme'
import { firebase } from '../../../firebase/clientApp'
import { NavLink } from './navLink'
import { AuthenticationLink } from '../modals/authentication/link'

export const Navigation = () => {
  const { t } = useTranslation(['common', 'authentication', 'navigation'])
  const { isAuthenticated, user } = useAuthentication()

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut()
      toast.success(t('navigation:Logged Out'))
    } catch (err) {
      toast.error(t('common:Something went wrong'))
      throw err
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
                <UserActionsPopover
                  displayName={user.displayName ?? user.email.replaceAll('.', '').replace('@', '')}
                >
                  <div tw="flex flex-col w-72 md:w-96">
                    <div tw="p-2">
                      <Typography>
                        {t('navigation:You are logged in as')}:{' '}
                        <Typography color="primary">
                          {user.displayName ? `${user.displayName} (${user.email})` : user.email}
                        </Typography>
                      </Typography>
                    </div>
                    <button onClick={handleLogout} tw="py-3 px-2 text-left hover:bg-primary-500">
                      <Typography>{t('navigation:Logout')}</Typography>
                    </button>
                  </div>
                </UserActionsPopover>
              ) : (
                <AuthenticationLink shallow passHref>
                  <a tw="border-2 border-textPrimary rounded-full p-1 hover:opacity-70 active:border-gray-500">
                    <UserIcon tw="text-textPrimary" width={18} aria-label={t('navigation:Login')} />
                  </a>
                </AuthenticationLink>
              )}
              <ToggleTheme />
            </>
          }
        />
      </header>
    </>
  )
}
