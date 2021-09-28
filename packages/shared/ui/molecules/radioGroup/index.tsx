import React, { useState } from 'react'
import tw from 'twin.macro'
import { RadioGroup as BaseRadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'

export type RadioGroupProps = {
    /**
     * Default opened
     */
    isOpened?: boolean

}

const plans = [
    {
        label: 'Startup',
        description: '12GB'
    },
    {
        label: 'Business',
        description: '16GB'
    },
    {
        label: 'Enterprise',
        description: '32GB'
    },
]

export const RadioGroup: React.FC<RadioGroupProps> = ({

}) => {

    const [selected, setSelected] = useState(plans[0])

    return (
        <div tw="w-full px-4 py-16">
            <div tw="w-full max-w-md mx-auto">
                <BaseRadioGroup value={selected} onChange={setSelected}>
                    <BaseRadioGroup.Label tw="sr-only">Server size</BaseRadioGroup.Label>
                    <div tw="space-y-2">
                        {plans.map((plan) => (
                            <BaseRadioGroup.Option
                                key={plan.label}
                                value={plan}
                                className={({ active, checked }) =>
                                    `${active ? 'ring-2 ring-offset-2 ring-offset-primary-300 ring-white ring-opacity-60' : ''}
                                    ${checked ? 'bg-primary-900 bg-opacity-75 text-white': 'bg-white' }
                                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <div tw="flex items-center w-full bg-blue-200">
                                            <div tw="text-white ml-1 mr-4">
                                                <CheckIcon tw="w-6 h-6" />
                                            </div>
                                            <div tw="text-sm">
                                                <BaseRadioGroup.Label
                                                    as="p"
                                                    className={`font-medium  ${checked ? 'text-primary-100' : 'text-white'}`}
                                                >
                                                    {plan.label}
                                                </BaseRadioGroup.Label>
                                                <BaseRadioGroup.Description
                                                    as="span"
                                                    className={`inline ${checked ? 'text-primary-100' : 'text-white'}`}
                                                >
                                                    <span>
                                                        {plan.description}
                                                    </span>
                                                </BaseRadioGroup.Description>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </BaseRadioGroup.Option>
                        ))}
                    </div>
                </BaseRadioGroup>
            </div>
        </div>
    )
}
