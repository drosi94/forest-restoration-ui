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
   * Placeholder label when no option is selected
   */
  placeholder?: string
  /**
   * The value of the autocomplete (controlled)
   */
  value?: any
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
   * Override styles of the input
   */
  overrideInputStyles?: any
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
  placeholder,
  required,
  value,
  onChange,
  shouldResetOption,
  error,
  hint,
  overrideContainerStyles,
  overrideInputStyles,
  overrideHintContainerStyles,
  overrideErrorContainerStyles,
}) => {
  const [inputItems, setInputItems] = useState<any>(options)
  const [referenceElement, setReferenceElement] = useState<any>()
  const [popperElement, setPopperElement] = useState<any>()
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
  })
  const {
    isOpen,
    selectedItem,
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
    defaultSelectedItem: value,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        options.filter((item) => {
          const itemValue = getItem(item, optionLabelItem) || ''
          return itemValue.toLowerCase().startsWith(inputValue.toLowerCase())
        })
      )
    },
    onSelectedItemChange: ({ selectedItem: newItem }) => {
      onChange(newItem)
      closeMenu()
    },
    itemToString: (item) => getItem(item, optionLabelItem) || '',
  })
  return (
    <>
      <Typography as="label" css={[error && tw`text-red-300`]} {...getLabelProps()}>
        {label} {required && <Typography tw="text-red-300">*</Typography>}
      </Typography>
      <div {...getComboboxProps()} css={[tw`relative`, overrideContainerStyles]}>
        <Input
          {...getInputProps({ ref: setReferenceElement })}
          onFocus={() => openMenu()}
          placeholder={placeholder}
          error={error}
          hint={hint}
          overrideInputStyles={overrideInputStyles}
          overrideHintContainerStyles={overrideHintContainerStyles}
          overrideErrorContainerStyles={overrideErrorContainerStyles}
        />
        {shouldResetOption && selectedItem && (
          <div
            css={[
              tw`absolute right-2 bottom-4`,
              (error || hint) && tw`bottom-8`,
              error && hint && tw`bottom-16`,
            ]}
          >
            <CloseButton
              label="Reset option"
              onClick={() => {
                reset()
                onChange(null)
              }}
            />
          </div>
        )}
      </div>
      <ul
        {...getMenuProps({ ref: setPopperElement })}
        style={isOpen && inputItems.length > 0 ? styles.popper : { display: 'none' }}
        css={[
          tw`width[inherit] overflow-auto text-base bg-bgSecondary rounded-md shadow-lg max-h-60 ring-1 ring-primary-300 ring-opacity-5 focus:outline-none sm:text-sm z-50`,
        ]}
        {...attributes.popper}
      >
        {isOpen &&
          inputItems.map((item: any, index: number) => (
            <li
              key={getItem(item, optionLabelItem) || index.toString()}
              css={[
                tw`cursor-pointer select-none relative py-2 pl-10 pr-4`,
                highlightedIndex === index && tw`bg-primary-400 rounded-md`,
              ]}
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
    </>
  )
}
