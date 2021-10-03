import tw from 'twin.macro'
import toast from 'react-hot-toast'
import { AnimateSharedLayout } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { HomeIcon, PlayIcon, UserIcon, BookOpenIcon } from '@heroicons/react/solid'
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
    <header tw="sticky top-0 z-40">
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
          <AnimateSharedLayout>
            <NavLink href="/" exact title={t('navigation:Home')} icon={<HomeIcon width="24" />} />
            <NavLink
              href="/home"
              title={t('navigation:Playground')}
              icon={<PlayIcon width="24" />}
            />
            <NavLink href="/blog" title={t('navigation:Blog')} icon={<BookOpenIcon width="24" />} />
          </AnimateSharedLayout>
        }
        secondaryNav={
          <>
            <ToggleTheme />
            {isAuthenticated ? (
              <UserActionsPopover
                data-testid="nav-user-actions-popover"
                label={t('navigation:User actions')}
                customImage={user.photoURL && <img src={user.photoURL} alt={user.displayName} />}
                displayName={
                  user.displayName ?? user?.email.replaceAll('.', '')?.replace('@', '') ?? ''
                }
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
                  <button
                    onClick={handleLogout}
                    data-testid="nav-logout-button"
                    tw="py-3 px-2 text-left hover:bg-primary"
                  >
                    <Typography>{t('navigation:Logout')}</Typography>
                  </button>
                </div>
              </UserActionsPopover>
            ) : (
              <AuthenticationLink shallow passHref>
                <a
                  data-testid="nav-login-link"
                  tw="border-2 border-textPrimary rounded-full p-1 hover:opacity-70 active:border-gray-500"
                >
                  <UserIcon tw="text-textPrimary" width={18} aria-label={t('navigation:Login')} />
                </a>
              </AuthenticationLink>
            )}
          </>
        }
      />
    </header>
  )
}
