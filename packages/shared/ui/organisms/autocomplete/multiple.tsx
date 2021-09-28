import React, { useState } from 'react'
import tw from 'twin.macro'
import { useCombobox, useMultipleSelection } from 'downshift'
import { usePopper } from 'react-popper'
import { CloseButton, Pill, Typography } from '../../atoms'
import { Input } from '../../molecules'
import { getItem } from '../../utils'
import { AutocompleteProps } from '.'

export type MultipleAutocompleteProps = AutocompleteProps & {
  /**
   * Should not allow duplicate values
   */
  preventDuplicates?: boolean
}

export const MultipleAutocomplete: React.FC<MultipleAutocompleteProps> = ({
  label,
  options,
  optionLabelItem = 'label',
  optionValueItem = 'value',
  placement = 'bottom-start',
  preventDuplicates = true,
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
  const [referenceElement, setReferenceElement] = useState<any>()
  const [popperElement, setPopperElement] = useState<any>()
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
  })
  const [inputValue, setInputValue] = useState('')
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
    reset,
  } = useMultipleSelection({
    initialSelectedItems: value ?? [],
    onSelectedItemsChange: ({ selectedItems: newSelectedItems }) => {
      onChange([...newSelectedItems])
    },
  })
  const getFilteredItems = (options) =>
    options.filter((item) => {
      const label = getItem(item, optionLabelItem)
      const doesLabelMatchesInput = label.toLowerCase().startsWith(inputValue.toLowerCase())
      const isLabelSelected = getItem(selectedItems, optionLabelItem).indexOf(label) >= 0
      return preventDuplicates ? !isLabelSelected && doesLabelMatchesInput : doesLabelMatchesInput
    })
  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectItem,
    openMenu,
  } = useCombobox({
    inputValue,
    items: getFilteredItems(options),
    onStateChange: ({ inputValue, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue)

          break
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('')
            addSelectedItem(selectedItem)
            selectItem(null)
          }

          break
        default:
          break
      }
    },
  })
  return (
    <>
      <Typography
        as="label"
        css={[error && tw`dark:text-red-300 text-red-500`]}
        {...getLabelProps()}
      >
        {label} {required && <Typography tw="dark:text-red-300 text-red-500">*</Typography>}
      </Typography>
      <div>
        {selectedItems.map((selectedItem, index) => (
          <div
            key={`${getItem(selectedItem, optionLabelItem)}-${index}` || index.toString()}
            {...getSelectedItemProps({ selectedItem, index })}
            tw="inline-flex items-center mr-1 mt-1"
          >
            <Pill
              color="bgSecondary"
              textColor="textPrimary"
              onRemove={() => removeSelectedItem(selectedItem)}
            >
              {getItem(selectedItem, optionLabelItem)}
            </Pill>
          </div>
        ))}
        <div
          {...getComboboxProps({
            ref: setReferenceElement,
          })}
          css={[tw`relative`, overrideContainerStyles]}
        >
          <Input
            {...getInputProps(
              getDropdownProps({
                preventKeyAction: isOpen,
                onFocus: () => {
                  if (!isOpen && getFilteredItems(options)?.length > 0) {
                    openMenu()
                  }
                },
              })
            )}
            placeholder={placeholder}
            error={error}
            hint={hint}
            overrideInputStyles={overrideInputStyles}
            overrideHintContainerStyles={overrideHintContainerStyles}
            overrideErrorContainerStyles={overrideErrorContainerStyles}
          />
          {shouldResetOption && selectedItems?.length > 0 && (
            <div
              css={[
                tw`absolute right-2 bottom-4`,
                (error || hint) && tw`bottom-8`,
                error && hint && tw`bottom-16`,
              ]}
            >
              <CloseButton label="Reset option" onClick={() => reset()} />
            </div>
          )}
        </div>
      </div>
      <ul
        {...getMenuProps({ ref: setPopperElement })}
        style={
          isOpen && getFilteredItems(options)?.length > 0 ? styles.popper : { display: 'none' }
        }
        css={[
          tw`width[inherit] overflow-auto text-base bg-bgSecondary rounded-md shadow-lg max-h-60 ring-1 ring-primary-300 ring-opacity-5 focus:outline-none sm:text-sm z-50`,
          (!selectedItems || selectedItems.length == 0) && tw`-top-11!`,
        ]}
        {...attributes.popper}
      >
        {isOpen &&
          getFilteredItems(options).map((item, index) => (
            <li
              css={[
                tw`cursor-pointer select-none relative py-2 pl-10 pr-4`,
                highlightedIndex === index && tw`bg-primary-400 rounded-md`,
              ]}
              key={getItem(item, optionLabelItem) || index.toString()}
              {...getItemProps({ item, index, key: getItem(item, optionValueItem) })}
            >
              <Typography css={[tw`block truncate font-normal`]}>
                {getItem(item, optionLabelItem)}
              </Typography>
            </li>
          ))}
      </ul>
    </>
  )
}
