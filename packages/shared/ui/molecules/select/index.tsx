import React from 'react'
import tw from 'twin.macro'
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Error, Hint, Typography } from '../../atoms'

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

const baseSelectContainerStyle = tw`relative w-full py-2 pl-3 pr-10 text-left bg-primary-500 rounded-lg shadow-md cursor-default text-textPrimary focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-primary-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm
`

export const Select: React.FC<SelectProps> = ({
  id,
  name,
  label,
  optionLabelItem = 'label',
  required,
  options = [],
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
  const getLabel = (item) => {
    return item
      ? typeof item === 'string'
        ? item
        : item[typeof optionLabelItem === 'function' ? optionLabelItem() : optionLabelItem]
      : null
  }

  return (
    <Listbox value={value} onChange={onChange}>
      <div css={[tw`relative mt-1`]}>
        <div css={[tw`mb-2`]}>
          <Listbox.Label as={Typography} css={[error && tw`text-red-300`]}>
            {label} {required && <Typography tw="text-red-300">*</Typography>}
          </Listbox.Label>
        </div>
        <Listbox.Button css={[baseSelectContainerStyle, error && tw`bg-red-500`]}>
          <Typography css={[tw`block truncate dark:text-textPrimary text-textSecondary`]}>
            {getLabel(value) || placeholder}
          </Typography>
          <Typography
            css={[tw`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none`]}
          >
            <SelectorIcon css={[tw`w-5 h-5 text-textPrimary`]} aria-hidden="true" />
          </Typography>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            css={[
              tw`absolute w-full py-1 mt-1 overflow-auto text-base bg-bgSecondary rounded-md shadow-lg max-h-60 ring-1 ring-primary-300 ring-opacity-5 focus:outline-none sm:text-sm`,
            ]}
          >
            {shouldResetOption && (
              <Listbox.Option
                css={[tw`cursor-pointer select-none relative py-2 pl-10 pr-4`]}
                value={null}
              >
                {({ selected }) => (
                  <>
                    <Typography
                      italic
                      css={[tw`block truncate font-normal`, selected && tw`font-medium`]}
                    >
                      {noOptionText}
                    </Typography>
                    {selected ? (
                      <Typography
                        italic
                        css={[tw`absolute inset-y-0 left-0 flex items-center pl-3`]}
                      >
                        <CheckIcon css={[tw`w-5 h-5`]} aria-hidden="true" />
                      </Typography>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            )}
            {options.map((option, index) => (
              <Listbox.Option
                key={index}
                css={[tw`cursor-pointer select-none relative py-2 pl-10 pr-4 text-gray-900`]}
                value={option}
              >
                {({ selected }) => (
                  <>
                    <Typography css={[tw`block truncate font-normal`, selected && tw`font-medium`]}>
                      {getLabel(option) || noOptionText}
                    </Typography>
                    {selected ? (
                      <Typography css={[tw`absolute inset-y-0 left-0 flex items-center pl-3`]}>
                        <CheckIcon css={[tw`w-5 h-5`]} aria-hidden="true" />
                      </Typography>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
      {hint && <Hint overrideHintContainerStyles={overrideHintContainerStyles}>{hint}</Hint>}
      {error && <Error overrideErrorContainerStyles={overrideErrorContainerStyles}>{error}</Error>}
    </Listbox>
  )
}
