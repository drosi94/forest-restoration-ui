import React from 'react'
import tw from 'twin.macro'
import { Listbox } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/outline'
import { getItem } from '../../utils'
import { Typography } from '../../atoms'

export const SingleValueButton = ({
  baseSelectContainerStyle,
  error,
  value,
  optionLabelItem,
  placeholder,
}) => {
  return (
    <Listbox.Button css={[baseSelectContainerStyle, error && tw`bg-error`]}>
      <Typography tw="text-primary-content">
        {getItem(value, optionLabelItem) || placeholder}
      </Typography>
      <Typography css={[tw`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none`]}>
        <SelectorIcon css={[tw`w-5 h-5`]} aria-hidden="true" />
      </Typography>
    </Listbox.Button>
  )
}
