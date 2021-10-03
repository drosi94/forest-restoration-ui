import React from 'react'
import tw from 'twin.macro'
import { Typography } from '../..'
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
  const splitDisplayName = displayName?.split(' ')
  const containerButton = React.forwardRef<any, any>((props, ref) => {
    return (
      <button ref={ref} aria-label={label} {...props} {...rest}>
        {customImage ? (
          customImage
        ) : (
          <div tw="avatar placeholder">
            <div tw="!flex items-center justify-center bg-base-100 text-base-100 rounded-full w-10 h-10">
              <Typography fontSize="xlarge" tw="uppercase">
                {splitDisplayName?.[0][0] +
                  (splitDisplayName?.[1]?.[0] ?? splitDisplayName?.[0][1])}
              </Typography>
            </div>
          </div>
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
