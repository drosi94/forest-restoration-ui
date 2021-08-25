import React, { Fragment } from 'react'
import tw from 'twin.macro'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
import { Typography } from '../../atoms'
import { getItem } from '../../utils'

export const MultipleValueOptions = ({
  optionValueItem,
  optionLabelItem,
  options,
  value: values,
}) => {
  function isSelected(item: any) {
    return !!(
      values &&
      values.find(
        (value: any) => getItem(value, optionValueItem) === getItem(item, optionValueItem)
      )
    )
  }

  return (
    <Transition
      as={Fragment}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Listbox.Options
        static
        css={[
          tw`absolute w-full mt-1 overflow-auto text-base bg-bgSecondary rounded-md shadow-lg max-h-60 ring-1 ring-primary-300 ring-opacity-5 focus:outline-none sm:text-sm`,
        ]}
      >
        {options.map((option: any) => {
          const selected = isSelected(option)
          return (
            <Listbox.Option
              key={getItem(option, optionLabelItem)}
              css={[tw`cursor-pointer select-none relative`]}
              value={option}
            >
              {({ active }) => (
                <div css={[active && tw`bg-primary-500 rounded-md`]}>
                  <Typography
                    css={[
                      tw`block truncate font-normal py-2 pl-10 pr-4 `,
                      selected && tw`font-medium`,
                    ]}
                  >
                    {getItem(option, optionLabelItem)}
                  </Typography>
                  {selected && (
                    <Typography css={[tw`absolute inset-y-0 left-0 flex items-center pl-3`]}>
                      <CheckIcon css={[tw`w-5 h-5`]} aria-hidden="true" />
                    </Typography>
                  )}
                </div>
              )}
            </Listbox.Option>
          )
        })}
      </Listbox.Options>
    </Transition>
  )
}
