import React, { useState } from 'react'
import tw from 'twin.macro'
import { usePopper } from 'react-popper'
import type { Placement } from '@popperjs/core'
import { Popover as BasePopover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Button, Typography } from '../../atoms'

export type PopoverProps = {
  /**
   * The label of the button
   */
  label: string
  buttonComponent?: any
  containerComponent?: any
  panelComponent?: any
  placement?: Placement
  children: React.ReactNode
  overrideButtonStyles?: any
}

export const Popover: React.FC<PopoverProps> = ({
  children,
  label,
  buttonComponent = Button,
  containerComponent,
  panelComponent,
  placement = 'bottom-start',
  overrideButtonStyles,
}) => {
  const [referenceElement, setReferenceElement] = useState()
  const [popperElement, setPopperElement] = useState()
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: 'preventOverflow',
        options: {
          boundary: 'clippingParents',
        },
      },
      {
        name: 'flip',
        options: {
          allowedAutoPlacements: ['bottom-end'],
          fallbackPlacements: ['bottom-end', 'top-start'],
          altBoundary: true,
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, 4],
        },
      },
    ],
  })
  return (
    <BasePopover as={containerComponent} css={[tw`relative`]}>
      {({ open }) => (
        <>
          <BasePopover.Button
            as={buttonComponent}
            ref={setReferenceElement}
            css={[
              tw`
                px-3 py-2 inline-flex items-center hover:text-opacity-100 focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-white focus-visible:ring-opacity-75`,
              !open && tw`text-opacity-90`,
              overrideButtonStyles,
            ]}
          >
            <Typography css={[tw`dark:text-textPrimary text-textSecondary`]}>{label}</Typography>
            <ChevronDownIcon
              css={[
                tw`
              ml-2 h-5 w-5 dark:text-textPrimary text-textSecondary group-hover:text-opacity-80 transition ease-in-out duration-150`,
                !open && tw`text-opacity-70`,
              ]}
              aria-hidden="true"
            />
          </BasePopover.Button>
          <BasePopover.Overlay />
          {/* @ts-ignore */}
          <BasePopover.Panel
            as={panelComponent}
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <div tw="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">{children}</div>
          </BasePopover.Panel>
        </>
      )}
    </BasePopover>
  )
}
