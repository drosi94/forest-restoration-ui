import React, { Fragment, useState } from 'react'
import tw from 'twin.macro'
import { RadioGroup as BaseRadioGroup } from '@headlessui/react'
import { Typography } from '../..'
import { BaseColor } from '../../utils'

export type RadioOption = {
  id: string
  label: string
  description?: string
}

export type RadioGroupProps = {
  items: RadioOption[]
  label: string
  name: string
  selected: RadioOption
  onChange: (item: RadioOption) => void
}

export const getColorStyles = (color: BaseColor) => {
  switch (color) {
    case 'primary':
      return tw`radio-primary`
    case 'secondary':
      return tw`radio-secondary`
    default:
      return tw`radio-primary`
  }
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  items,
  label,
  name,
  onChange,
  selected,
}) => {
  return (
    <BaseRadioGroup tw="form-control" value={selected} onChange={onChange}>
      <BaseRadioGroup.Label tw="sr-only">{label}</BaseRadioGroup.Label>
      <div tw="space-y-2">
        {items.map((item) => (
          <BaseRadioGroup.Option key={item.id} value={item} as={Fragment}>
            {({ active, checked }) => (
              <div
                css={[
                  tw`relative shadow-md rounded-lg cursor-pointer flex focus:outline-none`,
                  active && tw`ring-2 ring-offset-2 ring-white ring-opacity-60`,
                  checked && tw`bg-opacity-75 text-base-content border-2 border-gray-300`,
                ]}
              >
                <div tw="flex items-center w-full bg-base-200 rounded-lg p-2">
                  <div tw="text-textPrimary ml-1 mr-4">
                    <input
                      id={item.id}
                      type="radio"
                      defaultChecked={checked}
                      name={name}
                      css={[tw`radio`, checked && getColorStyles('primary')]}
                    ></input>
                  </div>
                  <div tw="flex flex-col gap-2">
                    <BaseRadioGroup.Label
                      htmlFor={item.id}
                      as={(props: any) => <Typography as="label" {...props} />}
                      fontSize="small"
                      fontWeight="bold"
                    >
                      {item.label}
                    </BaseRadioGroup.Label>
                    <BaseRadioGroup.Description as={Typography} fontSize="xsmall">
                      <span>{item.description}</span>
                    </BaseRadioGroup.Description>
                  </div>
                </div>
              </div>
            )}
          </BaseRadioGroup.Option>
        ))}
      </div>
    </BaseRadioGroup>
  )
}
