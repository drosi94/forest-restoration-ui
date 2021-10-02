import React, { useCallback } from 'react'
import tw from 'twin.macro'
import { Listbox } from '@headlessui/react'
import { Error, Hint, Typography } from '../../atoms'
import { getItem } from '../../utils'
import { SingleValueButton } from './singleValueButton'
import { MultipleValueButton } from './multipleValueButton'
import { SingleValueOptions } from './singleValueOptions'
import { MultipleValueOptions } from './multipleValueOptions'

export type SelectProps = {
  /**
   * The id of the select
   */
  id: string
  /**
   * The name of the select
   */
  name: string
  /**
   * The label of the select
   */
  label?: string
  /**
   * Is required to be filled
   */
  required?: boolean
  /**
   * The value of the select (controlled)
   */
  value?: any
  /**
   * Should receive multiple values
   */
  multiple?: boolean
  /**
   * The default value of the select (uncontrolled)
   */
  defaultValue?: any
  /**
   * The select options
   */
  options?: any[]
  /**
   * The label item property
   */
  optionLabelItem?: string | (() => string)
  /**
   * The label item property
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
   * The error if exists
   */
  error?: string | React.ReactNode
  /**
   * The hint text
   */
  hint?: string | React.ReactNode
  /**
   * Callback on every select change
   */
  onChange?: (value: any) => void
  /**
   * Override styles of the container input
   */
  overrideContainerStyles?: any
  /**
   * Override styles of the select
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

const baseSelectContainerStyle = tw`select-primary bg-primary relative w-full py-2 pl-3 pr-10 text-left rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-primaryTemp-300 focus-visible:ring-offset-2 sm:text-sm
`

export const Select: React.FC<SelectProps> = ({
  id,
  name,
  label,
  optionLabelItem = 'label',
  optionValueItem = 'value',
  required,
  options = [],
  multiple,
  noOptionText = 'No Option',
  placeholder = 'Select a value',
  value,
  onChange,
  shouldResetOption,
  error,
  hint,
  overrideContainerStyles,
  overrideSelectStyles,
  overrideHintContainerStyles,
  overrideErrorContainerStyles,
}) => {
  const removeValue = useCallback(
    (valueToRemove) => {
      const removedSelection = value?.filter(
        (selected) => getItem(selected, optionValueItem) !== getItem(valueToRemove, optionValueItem)
      )
      onChange(removedSelection)
    },
    [value, onChange]
  )

  const handleSelection = (newValue: any) => {
    if (!multiple) {
      onChange(newValue)
    } else {
      const selectedResult = value?.filter(
        (selected) => getItem(selected, optionValueItem) === getItem(newValue, optionValueItem)
      )

      if (selectedResult?.length) {
        removeValue(newValue)
      } else {
        onChange((currentValue: any[]) => [...(currentValue ?? []), newValue])
      }
    }
  }
  return (
    <Listbox value={value} onChange={handleSelection}>
      <div css={[tw`relative form-control`]}>
        <div css={[tw`flex gap-1`]}>
          <Listbox.Label as={Typography} css={[tw`label`, error && tw`text-error`]}>
            {label}
          </Listbox.Label>
          {required && <Typography tw="self-center text-error">*</Typography>}
        </div>
        {!multiple ? (
          <SingleValueButton
            baseSelectContainerStyle={baseSelectContainerStyle}
            error={error}
            value={value}
            optionLabelItem={optionLabelItem}
            placeholder={placeholder}
          />
        ) : (
          <MultipleValueButton
            baseSelectContainerStyle={baseSelectContainerStyle}
            error={error}
            value={value}
            optionLabelItem={optionLabelItem}
            placeholder={placeholder}
            removeValue={removeValue}
          />
        )}

        {!multiple ? (
          <SingleValueOptions
            {...{
              shouldResetOption,
              noOptionText,
              optionValueItem,
              optionLabelItem,
              options,
              value,
            }}
          />
        ) : (
          <MultipleValueOptions
            {...{
              optionValueItem,
              optionLabelItem,
              options,
              value,
            }}
          />
        )}
      </div>
      {hint && <Hint overrideHintContainerStyles={overrideHintContainerStyles}>{hint}</Hint>}
      {error && <Error overrideErrorContainerStyles={overrideErrorContainerStyles}>{error}</Error>}
    </Listbox>
  )
}
