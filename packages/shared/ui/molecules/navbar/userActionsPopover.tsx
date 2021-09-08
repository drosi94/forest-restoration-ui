import React from 'react'
import tw from 'twin.macro'
import { Popover } from '../popover'

export type UserActionsPopoverProps = {
  /**
   * The user's display name
   */
  displayName: string
}

export const UserActionsPopover: React.FC<UserActionsPopoverProps> = ({
  displayName,
  children,
}) => {
  const containerButton = React.forwardRef<any, any>((props, ref) => {
    return (
      <button ref={ref} {...props}>
        <img
          tw="h-full w-full object-cover"
          src={`https://eu.ui-avatars.com/api/?name=${displayName}&background=10b981&color=eaeaea`}
          alt="user's avatar"
        />
      </button>
    )
  })
  return (
    <Popover
      label="User Actions"
      buttonComponent={containerButton}
      overrideButtonStyles={tw`p-0! block h-10 w-10 rounded-full overflow-hidden `}
    >
      <div tw="w-40 bg-bgSecondary text-textPrimary border border-gray-400">{children}</div>
    </Popover>
  )
}
