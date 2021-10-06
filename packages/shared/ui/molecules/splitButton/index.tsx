import React from 'react'
import tw from 'twin.macro'
import { Typography } from '../..'
import { Button } from '../../atoms/button'
import { Popover } from '../popover'
import { ChevronUpIcon } from '@heroicons/react/solid'

export type SplitButtonPopoverProps = {
  label: string
}

export const SplitButtonPopover: React.FC<SplitButtonPopoverProps> = ({
  label,
  children,
  ...rest
}) => {
  const containerButton = React.forwardRef<any, any>((props, ref) => {
    return (
      <Button ref={ref} aria-label={label} {...props} {...rest} tw="!rounded-l-none !rounded-r-md !flex items-center justify-center ">
          <ChevronUpIcon css={[tw` w-5 h-5`]} />
      </Button>
    )
  })
  return (
    <div tw="flex">
      <Button tw="!rounded-r-none !rounded-l-md">lol</Button>
      <Popover
        label={label}
        buttonComponent={containerButton}
        overrideButtonStyles={tw`p-0! block h-10 w-10 rounded-full overflow-hidden `}
      >
        <div tw="bg-bgSecondary text-textPrimary border border-gray-400">{children}</div>
      </Popover>
    </div>
  )
}
