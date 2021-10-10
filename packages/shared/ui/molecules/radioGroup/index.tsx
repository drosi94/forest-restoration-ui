import React, { Fragment, useState } from 'react'
import tw from 'twin.macro'
import { RadioGroup as BaseRadioGroup } from '@headlessui/react'
import { Error, Hint, Typography } from '../..'
import { BaseColor } from '../../utils'

export type RadioOption = {
  id: string
  label: string
  description?: string
}

export type RadioGroupProps = {
  items: RadioOption[]
  label: string
  labelHidden?: boolean
  name: string
  selected: string
  onChange: (id: string) => void
  /**
   * The error if exists
   */
  error?: string | React.ReactNode
  /**
   * The hint text
   */
  hint?: string | React.ReactNode
  /**
   * Override styles of the hint container
   */
  overrideHintContainerStyles?: any
  /**
   * Override styles of the error container
   */
  overrideErrorContainerStyles?: any
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
  labelHidden,
  label,
  name,
  onChange,
  selected,
  hint,
  error,
  overrideHintContainerStyles,
  overrideErrorContainerStyles,
}) => {
  return (
    <div tw="form-control gap-2">
      <BaseRadioGroup tw="flex flex-col gap-2" value={selected} onChange={onChange}>
        {/* @ts-ignore */}
        <BaseRadioGroup.Label
          as={(props) => (
            <Typography as="label" css={[tw`label`, labelHidden && tw`sr-only`]} {...props} />
          )}
        >
          {label}
        </BaseRadioGroup.Label>
        <div tw="space-y-2">
          {items.map((item) => (
            <BaseRadioGroup.Option key={item.id} value={item.id} as={Fragment}>
              {({ active, checked }) => (
                <div
                  css={[
                    tw`relative bg-base-300 border-2 border-base-200 shadow-md rounded-lg cursor-pointer flex focus:outline-none`,
                    active && tw`ring-2 ring-primary ring-opacity-60`,
                    checked && tw`bg-opacity-75 text-base-content border-2 border-primary`,
                  ]}
                >
                  <div tw="flex items-center w-full bg-base-200 rounded-lg p-2">
                    <div tw="text-base-content ml-1 mr-4">
                      <input
                        id={item.id}
                        type="radio"
                        checked={checked}
                        onChange={() => onChange(item.id)}
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
      {hint && <Hint overrideHintContainerStyles={overrideHintContainerStyles}>{hint}</Hint>}
      {error && <Error overrideErrorContainerStyles={overrideErrorContainerStyles}>{error}</Error>}
    </div>
  )
}
