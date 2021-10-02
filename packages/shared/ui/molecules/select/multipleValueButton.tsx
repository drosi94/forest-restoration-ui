import React from 'react'
import tw from 'twin.macro'
import { Listbox } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/outline'
import { getItem } from '../../utils'
import { Pill, Typography } from '../../atoms'

const baseMultipleSelectButtonStyles = tw`
flex min-height[62px] cursor-default relative w-full pl-4 pr-2 py-2 text-left 
transition ease-in-out duration-150 sm:text-sm sm:leading-5
`

export const MultipleValueButton = ({
  baseSelectContainerStyle,
  error,
  value,
  optionLabelItem,
  placeholder,
  removeValue,
}) => {
  const selectedValueLabels = value ? getItem(value, optionLabelItem) : null
  const findValueByLabel = (label) => {
    return label ? value?.find((v) => v[optionLabelItem] === label) : null
  }

  return (
    <span tw="inline-block w-full rounded-md shadow-sm">
      {/* @ts-ignore */}
      <Listbox.Button
        as="div"
        css={[baseSelectContainerStyle, baseMultipleSelectButtonStyles, error && tw`bg-red-500`]}
      >
        <>
          {(!selectedValueLabels || selectedValueLabels.length === 0) && (
            <div tw="flex items-center">
              <Typography css={[tw`block truncate text-primary-content`]}>{placeholder}</Typography>
            </div>
          )}
          {selectedValueLabels &&
            selectedValueLabels.map((selectedLabel) => (
              <div key={selectedLabel} tw="inline-flex items-center mr-1 mt-1">
                <Pill
                  color="bgSecondary"
                  textColor="textPrimary"
                  onRemove={() => removeValue(findValueByLabel(selectedLabel))}
                >
                  {selectedLabel}
                </Pill>
              </div>
            ))}
        </>
        <Typography
          css={[tw`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none`]}
        >
          <SelectorIcon css={[tw`w-5 h-5 text-textPrimary`]} aria-hidden="true" />
        </Typography>
      </Listbox.Button>
    </span>
  )
}
