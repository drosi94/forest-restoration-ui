import React, { Fragment } from 'react'
import tw from 'twin.macro'
import { Button } from '../../atoms/button'
import { Popover } from '../popover'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Popover as BasePopover } from '@headlessui/react'
import { Typography } from '../..'

export type Action = {
  id: string
  label: string
  onClick: () => void
}

export type SplitButtonProps = {
  /**
   * The actions to display in the popover
   */
  actions: Action[]
  /**
   * The selected action id to display in the button. If it is not defined the first action will be selected
   */
  selectedActionId?: string
}

export const SplitButton: React.FC<SplitButtonProps> = ({ actions, selectedActionId, ...rest }) => {
  if (selectedActionId && actions.find((action) => action.id === selectedActionId) === undefined) {
    throw new Error(`The selected action id ${selectedActionId} is not defined in the actions`)
  }

  const [selectedAction, setSelectedAction] = React.useState<Action>(
    selectedActionId ? actions.find((action) => action.id === selectedActionId) : actions[0]
  )

  const { label, onClick } = selectedAction

  const containerButton = React.forwardRef<any, any>((props, ref) => {
    return (
      <Button
        ref={ref}
        aria-label={label}
        {...props}
        tw="!rounded-l-none !rounded-r-md !flex items-center justify-center "
      >
        <ChevronDownIcon tw="w-5 h-5" />
      </Button>
    )
  })

  const handleActionClick = (action: Action) => {
    setSelectedAction(action)
  }

  return (
    <div tw="flex">
      <Button tw="!rounded-r-none !rounded-l-md" onClick={onClick} {...rest}>
        {label}
      </Button>
      <Popover
        label={label}
        buttonComponent={containerButton}
        overrideButtonStyles={tw`p-0! block h-10 w-10 rounded-full overflow-hidden border-0 border-l-2 border-secondary`}
      >
        <div tw="flex flex-col w-48 md:w-72 bg-base-200">
          {actions.map((action) => (
            <BasePopover.Button as={Fragment}>
              <button
                onClick={() => handleActionClick(action)}
                tw="py-3 px-2 text-left hover:bg-primary"
              >
                <Typography>{action.label}</Typography>
              </button>
            </BasePopover.Button>
          ))}
        </div>
      </Popover>
    </div>
  )
}
