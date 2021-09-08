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
    <nav ref={ref} tw="bg-bgSecondary">
      <div tw="xl:max-w-7xl mx-auto py-2 px-4">
        <div tw="flex justify-between">
          <div>
            {customLogo ? (
              customLogo
            ) : (
              <a href="#" tw="flex items-center py-3 px-4">
                <Logo size="custom" width={45} height={45} />
              </a>
            )}
          </div>
          <div tw="flex justify-center space-x-6 flex-1">
            <div tw="hidden md:flex items-center space-x-4">{primaryNav}</div>
          </div>

          <div tw="hidden md:flex items-center space-x-4">{secondaryNav}</div>

          <div tw="md:hidden flex items-center space-x-4">
            <button onClick={() => setIsMobileMenuOpen((value) => !value)}>
              <MenuIcon width="30" height="30" tw="text-textPrimary" />
            </button>
            {showSecondaryNavInMobile && <div tw="flex space-x-1 items-center">{secondaryNav}</div>}
          </div>
        </div>
      </div>

      <div css={[tw`md:hidden`, isSmallDevice && !isMobileMenuOpen && tw`hidden`]}>
        <div tw="flex flex-col py-2 px-4 space-y-2">{primaryNav}</div>
      </div>
    </nav>
  )
}

export * from './userActionsPopover'
