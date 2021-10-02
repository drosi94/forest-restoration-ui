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
          tw`absolute w-full overflow-auto text-base bg-base-200 rounded-md shadow-lg max-h-60 sm:text-sm z-50`,
        ]}
      >
        {shouldResetOption && (
          <Listbox.Option css={[tw`cursor-pointer select-none relative`]} value={null}>
            {({ selected, active }) => (
              <div css={[tw`py-2 pl-10 pr-4`, active && tw`bg-primary rounded-md`]}>
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
              </div>
            )}
          </Listbox.Option>
        )}
        {options.map((option, index) => (
          <Listbox.Option
            key={index}
            css={[tw`cursor-pointer select-none relative text-gray-900`]}
            value={option}
          >
            {({ active }) => {
              const selected = getItem(option, optionValueItem) === getItem(value, optionValueItem)
              return (
                <div css={[tw`py-2 pl-10 pr-4`, active && tw`bg-primaryTemp-400 rounded-md`]}>
                  <Typography css={[tw`block truncate font-normal`, selected && tw`font-medium`]}>
                    {getItem(option, optionLabelItem) || noOptionText}
                  </Typography>
                  {selected ? (
                    <Typography css={[tw`absolute inset-y-0 left-0 flex items-center pl-3`]}>
                      <CheckIcon css={[tw`w-5 h-5`]} aria-hidden="true" />
                    </Typography>
                  ) : null}
                </div>
              )
            }}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Transition>
  )
}
