import React from 'react'
import tw from 'twin.macro'
import { Switch as BaseSwitch } from '@headlessui/react'
import { Typography, Hint, Error } from '../../atoms'
import { getColorStyles, Color, getBackgroundColorStyles } from '../../utils'

type LabelPosition = 'left' | 'right' | 'top' | 'bottom' | 'hidden'

export type SwitchProps = {
  /**
   * The label of the switch. Should be defined even if it's hidden for accessibility reasons.
   */
  label: string
  /**
   * The position of the label
   */
  labelPosition?: 'left' | 'right' | 'top' | 'bottom' | 'hidden'
  /**
   * Should the switch be in checked state
   */
  checked?: boolean
  /**
   * Should the switch be disabled
   */
  disabled?: boolean
  /**
   * Callback function to be called when the switch is toggled
   */
  onChange?: (checked: boolean) => void
  /**
   * The color of the caret
   */
  caretColor?: Color | 'white'
  /**
   * The color of the switch in checked state
   */
  checkedColor?: Color
  /**
   * The color of the switch in not checked state
   */
  notCheckedColor?: Color
  /**
   * The error of the switch
   */
  error?: string | React.ReactNode
  /**
   * The hint of the switch
   */
  hint?: string | React.ReactNode
  /**
   * Override styles for the label
   */
  overrideLabelStyles?: any
  /**
   * Override styles for the hint container
   */
  overrideHintContainerStyles?: any
  /**
   * Override styles for the error container
   */
  overrideErrorContainerStyles?: any
}

const getLabelPositionStyles = (labelPosition: LabelPosition) => {
  switch (labelPosition) {
    case 'left':
    case 'right':
      return tw`flex-row gap-4`
    case 'top':
    case 'bottom':
      return tw`flex-col gap-2`
    case 'hidden':
      return tw`flex-none`
    default:
      return tw`flex-row gap-4`
  }
}

const switchBaseStyles = tw`
relative inline-flex items-center h-6 rounded-full w-11 
transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-focus
`

export const Switch: React.FC<SwitchProps> = React.forwardRef<any, SwitchProps>(
  (
    {
      label,
      labelPosition = 'left',
      checked,
      disabled,
      onChange,
      caretColor = 'white',
      checkedColor = 'primary',
      notCheckedColor = 'primary',
      error,
      hint,
      overrideLabelStyles,
      overrideHintContainerStyles,
      overrideErrorContainerStyles,
    },
    ref
  ) => {
    const Label = () => (
      <BaseSwitch.Label
        as={Typography}
        css={[disabled && tw`cursor-not-allowed`, error && tw`text-error`, overrideLabelStyles]}
      >
        {label}
      </BaseSwitch.Label>
    )
    return (
      <BaseSwitch.Group>
        <div css={[tw`flex`, getLabelPositionStyles(labelPosition)]}>
          {(labelPosition === 'left' || labelPosition === 'top') && <Label />}
          <BaseSwitch
            checked={checked}
            onChange={onChange}
            css={[
              switchBaseStyles,
              checked && getBackgroundColorStyles(checkedColor),
              !checked && getBackgroundColorStyles(notCheckedColor),
              disabled && tw`bg-opacity-40 cursor-not-allowed`,
              error && tw`bg-error!`,
            ]}
          >
            <label tw="sr-only">{label}</label>
            <span
              ref={ref}
              css={[
                tw`inline-block w-4 h-4 transform transition ease-in-out duration-200  rounded-full`,
                getBackgroundColorStyles(caretColor),
                checked && tw`translate-x-6`,
                !checked && tw`translate-x-1`,
                disabled && tw`bg-opacity-30`,
              ]}
            />
          </BaseSwitch>
          {(labelPosition === 'right' || labelPosition === 'bottom') && <Label />}
        </div>
        {hint && <Hint overrideHintContainerStyles={overrideHintContainerStyles}>{hint}</Hint>}
        {error && (
          <Error overrideErrorContainerStyles={overrideErrorContainerStyles}>{error}</Error>
        )}
      </BaseSwitch.Group>
    )
  }
)
