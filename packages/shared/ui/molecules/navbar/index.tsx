import { MenuIcon } from '@heroicons/react/solid'
import React, { useRef, useState } from 'react'
import { useClickAway, useMedia } from 'react-use'
import tw from 'twin.macro'
import { Logo } from '../../atoms'
import { SmallScreensNavBar } from './smallScreens'

export type NavbarProps = {
  /**
   * The custom logo component
   */
  customLogo?: React.ReactNode
  /**
   * The primary navigation component
   */
  primaryNav?: React.ReactNode
  /**
   * The secondary navigation component
   */
  secondaryNav?: React.ReactNode

  userActions?: React.ReactNode
}

export const Navbar: React.FC<NavbarProps> = ({
  customLogo,
  primaryNav,
  secondaryNav,
  userActions,
}) => {
  const isSmallDevice = useMedia('(max-width: 768px)')

  if (isSmallDevice) {
    return (
      <SmallScreensNavBar
        primaryNav={primaryNav}
        secondaryNav={secondaryNav}
        userActions={userActions}
      />
    )
  }

  return (
    <nav tw="navbar xl:max-w-7xl mx-auto py-2 px-4 min-h-6 mb-2 shadow-lg bg-base-300 text-base-content rounded-box">
      <div tw="navbar-start">
        {customLogo ? (
          customLogo
        ) : (
          <a href="#" tw="py-3 px-4">
            <Logo size="custom" width={40} height={40} />
          </a>
        )}
      </div>
      <div tw="flex justify-center navbar-center">
        <ul tw="flex items-center gap-12">{primaryNav}</ul>
      </div>
      <div tw="flex items-center gap-8 navbar-end">
        {secondaryNav}
        {userActions}
      </div>
    </nav>
  )
}

export * from './userActionsPopover'
