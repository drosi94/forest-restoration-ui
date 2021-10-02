import { MenuIcon } from '@heroicons/react/solid'
import React, { useRef, useState } from 'react'
import { useClickAway, useMedia } from 'react-use'
import tw from 'twin.macro'
import { Logo } from '../../atoms'

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
  /**
   * Show the secondary navigation component next to mobile menu icon
   */
  showSecondaryNavInMobile?: boolean
}

export const Navbar: React.FC<NavbarProps> = ({
  customLogo,
  primaryNav,
  secondaryNav,
  showSecondaryNavInMobile = true,
}) => {
  const isSmallDevice = useMedia('(max-width: 768px)')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const ref = useRef(null)
  useClickAway(ref, () => {
    if (isSmallDevice && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  })

  return (
    <>
      <nav
        ref={ref}
        tw="sm:hidden navbar xl:max-w-7xl mx-auto py-2 px-2 mb-2 shadow-lg bg-base-200 text-base-content rounded-box"
      >
        <div tw="navbar-start">
          <div tw="hidden md:block">
            {customLogo ? (
              customLogo
            ) : (
              <a href="#" tw="py-3 px-4">
                <Logo size="custom" width={45} height={45} />
              </a>
            )}
          </div>
        </div>
        <div tw="flex justify-center navbar-center">
          <ul tw="hidden md:flex md:items-center md:gap-12">{primaryNav}</ul>
        </div>

        <div tw="hidden md:flex md:items-center md:gap-8 md:navbar-end">{secondaryNav}</div>

        {/* Small Screens */}
        <div tw="md:hidden flex justify-between items-center navbar-start">
          <button onClick={() => setIsMobileMenuOpen((value) => !value)}>
            <MenuIcon width="30" height="30" tw="text-textPrimary" />
          </button>
          {showSecondaryNavInMobile && <div tw="flex gap-4 items-center">{secondaryNav}</div>}
        </div>
      </nav>
      <div css={[tw`md:hidden`, isSmallDevice && !isMobileMenuOpen && tw`hidden`]}>
        <ul tw="flex flex-col py-2 px-4 space-y-3">{primaryNav}</ul>
      </div>
    </>
  )
}

export * from './userActionsPopover'
