import React, { useRef, useState } from 'react'
import tw from 'twin.macro'
import { useClickAway } from 'react-use'
import { MenuIcon, DotsHorizontalIcon } from '@heroicons/react/solid'
import { SideDrawer, Typography } from '../..'
import { UserActionsPopover } from '.'

{
  /* <div css={[tw`md:hidden`, isSmallDevice && !isMobileMenuOpen && tw`hidden`]}>
<ul tw="flex flex-col py-2 px-4 space-y-3">{primaryNav}</ul>
</div> */
}

// {
//   /* Small Screens */
// }
// ;<div tw="md:hidden flex justify-between items-center navbar-start">
//   <button onClick={() => setIsMobileMenuOpen((value) => !value)}>
//     <MenuIcon width="30" height="30" tw="text-textPrimary" />
//   </button>
//   {showSecondaryNavInMobile && <div tw="flex gap-4 items-center">{secondaryNav}</div>}
// </div>

const containerButton = React.forwardRef<any, any>(({ label, ...rest }, ref) => {
  return (
    <button ref={ref} aria-label={label} {...rest}>
      <DotsHorizontalIcon width={30} height={30} />
    </button>
  )
})

export const SmallScreensNavBar = ({ primaryNav, secondaryNav, userActions }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const ref = useRef(null)
  useClickAway(ref, () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  })

  return (
    <div tw="flex flex-col gap-2">
      <nav tw="navbar mb-2 shadow-lg bg-base-200 text-base-content rounded-box">
        <div tw="flex-none">
          <button
            tw="btn btn-square btn-ghost"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
          >
            <MenuIcon width="30" height="30" />
          </button>
        </div>
        <div tw="flex-1 px-2 mx-2">
          <Typography fontWeight="bold" fontSize="large">
            Forest Restoration
          </Typography>
        </div>
        {userActions && <div tw="flex-none">{userActions}</div>}
      </nav>
      {isMobileMenuOpen && (
        <SideDrawer
          drawerRef={ref}
          title=""
          isOpen={isMobileMenuOpen}
          handleClose={() => setIsMobileMenuOpen(false)}
          overrideDialogBaseStyles={tw`w-48`}
        >
          <div tw="flex flex-col gap-4">
            <ul tw="flex gap-2 justify-between">{secondaryNav}</ul>
            <ul tw="flex flex-col py-2 px-4 space-y-3">{primaryNav}</ul>
          </div>
        </SideDrawer>
      )}
    </div>
  )
}
