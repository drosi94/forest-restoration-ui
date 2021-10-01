import React, { Fragment, useState } from 'react'
import tw from 'twin.macro'
import { RadioGroup as BaseRadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import { Typography } from '../..'

export type RadioOption = {
  id: string
  label: string
  description?: string
}

export type RadioGroupProps = {
  items: RadioOption[],
  label: string
}

const plans = [
  {
    label: 'Startup',
    description: '12GB',
  },
  {
    label: 'Business',
    description: '16GB',
  },
  {
    label: 'Enterprise',
 
  },
]

export const RadioGroup: React.FC<RadioGroupProps> = ({ items = plans,  label}) => {
  const [selected, setSelected] = useState(plans[0])

  return (
    <BaseRadioGroup value={selected} onChange={setSelected}>
      <BaseRadioGroup.Label tw="sr-only">{label}</BaseRadioGroup.Label>
      <div tw="space-y-2">
        {items.map((item) => (
          <BaseRadioGroup.Option
            key={item.label}
            value={item}
            as={Fragment}
          >
            {({ active, checked }) => (
              <div
                css={[
                  tw`relative shadow-md rounded-lg cursor-pointer flex focus:outline-none`,
                  active &&
                    tw`ring-2 ring-offset-2 ring-offset-primary-300 ring-white ring-opacity-60`,
                  checked &&
                    tw`bg-primary-500 bg-opacity-75 text-textPrimary border-2 border-gray-300`,
                ]}
              >
                <div tw="flex items-center w-full bg-bgSecondary rounded-lg p-2">
                  <div tw="text-textPrimary ml-1 mr-4">
                    {checked && <CheckIcon tw="w-6 h-6" />}
                  </div>
                  <div tw="flex flex-col gap-2">
                    <BaseRadioGroup.Label as={Typography} fontSize="small" fontWeight="bold">
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
