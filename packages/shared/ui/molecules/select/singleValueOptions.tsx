import React, { Fragment } from 'react'
import tw from 'twin.macro'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
import { Typography } from '../../atoms'
import { getItem } from '../../utils'

export const SingleValueOptions = ({
  shouldResetOption,
  noOptionText,
  optionValueItem,
  optionLabelItem,
  options,
  value,
}) => {
  return (
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
                  <Typography italic css={[tw`absolute inset-y-0 left-0 flex items-center pl-3`]}>
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
            {() => {
              const selected = getItem(option, optionValueItem) === getItem(value, optionValueItem)
              return (
                <>
                  <Typography css={[tw`block truncate font-normal`, selected && tw`font-medium`]}>
                    {getItem(option, optionLabelItem) || noOptionText}
                  </Typography>
                  {selected ? (
                    <Typography css={[tw`absolute inset-y-0 left-0 flex items-center pl-3`]}>
                      <CheckIcon css={[tw`w-5 h-5`]} aria-hidden="true" />
                    </Typography>
                  ) : null}
                </>
              )
            }}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Transition>
  )
}
