import React, { useState } from 'react'
import tw from 'twin.macro'
import { useCombobox } from 'downshift'
import { usePopper } from 'react-popper'
import type { Placement } from '@popperjs/core'
import { CloseButton, Typography } from '../../atoms'
import { Input } from '../../molecules'
import { getItem } from '../../utils'

export type AutocompleteProps = {
  /**
   * The id of the autocomplete
   */
  id: string
  /**
   * The name of the autocomplete
   */
  name: string
  /**
   * The label of the autocomplete
   */
  label?: string
  /**
   * Is required to be filled
   */
  required?: boolean
  /**
   * The value of the autocomplete (controlled)
   */
  value?: any
  /**
   * The default value of the autocomplete (uncontrolled)
   */
  defaultValue?: any
  /**
   * The autocomplete options
   */
  options?: any[]
  /**
   * The label item property
   */
  optionLabelItem?: string | (() => string)
  /**
   * The value item property
   */
  optionValueItem?: string | (() => string)
  /**
   * The button text when nothing is selected
   */
  placeholder?: string
  /**
   * The text when nothing is selected
   */
  noOptionText?: string
  /**
   * Add reset option
   */
  shouldResetOption?: boolean
  /**
   * The placement of the autocomplete list
   */
  placement?: Placement
  /**
   * The error if exists
   */
  error?: string | React.ReactNode
  /**
   * The hint text
   */
  hint?: string | React.ReactNode
  /**
   * Callback on every autocomplete change
   */
  onChange?: (value: any) => void
  /**
   * Override styles of the container input
   */
  overrideContainerStyles?: any
  /**
   * Override styles of the autocomplete
   */
  overrideSelectStyles?: any
  /**
   * Override styles of the hint container
   */
  overrideHintContainerStyles?: any
  /**
   * Override styles of the error container
   */
  overrideErrorContainerStyles?: any
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  label,
  options,
  optionLabelItem = 'label',
  optionValueItem = 'value',
  placement = 'bottom-start',
}) => {
  const [inputItems, setInputItems] = useState<any>(options)
  const [referenceElement, setReferenceElement] = useState<any>()
  const [popperElement, setPopperElement] = useState<any>()
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
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    reset,
    openMenu,
    closeMenu,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        options.filter((item) => {
          const itemValue = getItem(item, optionLabelItem) || ''
          console.log(itemValue.toLowerCase().startsWith(inputValue.toLowerCase()))
          return itemValue.toLowerCase().startsWith(inputValue.toLowerCase())
        })
      )
    },
    onSelectedItemChange: () => {
      closeMenu()
    },
    itemToString: (item) => getItem(item, optionLabelItem) || '',
  })
  return (
    <>
      <Typography as="label" {...getLabelProps()}>
        {label}
      </Typography>
      <div {...getComboboxProps()} tw="relative">
        <Input {...getInputProps({ ref: setReferenceElement })} onFocus={() => openMenu()} />
        {selectedItem && (
          <div tw="absolute right-2 bottom-4">
            <CloseButton label="Reset option" onClick={() => reset()} />
          </div>
        )}
      </div>
      <div ref={setPopperElement}>
        <ul
          {...getMenuProps({ ref: setPopperElement })}
          style={styles.popper}
          css={[
            tw`w-full overflow-auto text-base bg-bgSecondary rounded-md shadow-lg max-h-60 ring-1 ring-primary-300 ring-opacity-5 focus:outline-none sm:text-sm`,
          ]}
          {...attributes.popper}
        >
          {isOpen &&
            inputItems.map((item: any, index: number) => (
              <li
                css={[
                  tw`cursor-pointer select-none relative py-2 pl-10 pr-4`,
                  highlightedIndex === index && tw`bg-primary-400`,
                ]}
                key={`${getItem(item, optionLabelItem)}${index}`}
                {...getItemProps({ item, index, key: getItem(item, optionValueItem) })}
              >
                <Typography
                  css={[
                    tw`block truncate font-normal`,
                    getItem(selectedItem, optionValueItem) === getItem(item, optionValueItem) &&
                      tw`font-medium`,
                  ]}
                >
                  {getItem(item, optionLabelItem)}
                </Typography>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}
