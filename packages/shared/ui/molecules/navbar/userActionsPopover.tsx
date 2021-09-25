import React from 'react'
import tw from 'twin.macro'
import { Popover } from '../popover'

export type UserActionsPopoverProps = {
  label: string
  /**
   * The user's display name
   */
  displayName?: string
  /**
   * Custom image to render
   */
  customImage?: React.ReactElement
}

export const UserActionsPopover: React.FC<UserActionsPopoverProps> = ({
  label,
  displayName,
  customImage,
  children,
  ...rest
}) => {
  const containerButton = React.forwardRef<any, any>((props, ref) => {
    return (
      <button ref={ref} aria-label={label} {...props} {...rest}>
        {customImage ? (
          customImage
        ) : (
          <img
            tw="h-full w-full object-cover"
            src={`https://eu.ui-avatars.com/api/?name=${displayName}&background=10b981&color=eaeaea`}
            alt="user's avatar"
          />
        )}
      </button>
    )
  })
  return (
    <Popover
      label={label}
      buttonComponent={containerButton}
      overrideButtonStyles={tw`p-0! block h-10 w-10 rounded-full overflow-hidden `}
    >
      <div tw="bg-bgSecondary text-textPrimary border border-gray-400">{children}</div>
    </Popover>
  )
}
