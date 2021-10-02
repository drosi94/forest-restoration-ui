import React from 'react'
import tw from 'twin.macro'
import { Switch as BaseSwitch } from '@headlessui/react'
import { Typography, Hint, Error } from '../../atoms'
import { BaseColor } from '../../utils'

type LabelPosition = 'left' | 'right' | 'top' | 'bottom' | 'hidden'

export type SwitchProps = {
  /**
   * The label of the switch. Should be defined even if it's hidden for accessibility reasons.
   */
  label: string
  /**
   * The position of the label
   */
  labelPosition?: LabelPosition
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
   * The color of the switch in checked state
   */
  checkedColor?: BaseColor | 'textPrimary'
  /**
   * The color of the switch in not checked state
   */
  notCheckedColor?: BaseColor | 'textPrimary'
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
      return tw`flex-row items-center gap-4`
    case 'top':
    case 'bottom':
      return tw`flex-col gap-2`
    case 'hidden':
      return tw`flex-none`
    default:
      return tw`flex-row gap-4`
  }
}

const getAccentColorStyles = (color: BaseColor | 'textPrimary') => {
  switch (color) {
    case 'primary':
      return tw`toggle-primary`
    case 'secondary':
      return tw`toggle-secondary`
    case 'textPrimary':
      return tw`bg-base-content`
    default:
      return tw`bg-primary`
  }
}

const BaseLabel = (props) => <Typography as="label" {...props} />

export const Switch: React.FC<SwitchProps> = React.forwardRef<any, SwitchProps>(
  (
    {
      label,
      labelPosition = 'left',
      checked,
      disabled,
      onChange,
      checkedColor = 'primary',
      notCheckedColor = 'textPrimary',
      error,
      hint,
      overrideLabelStyles,
      overrideHintContainerStyles,
      overrideErrorContainerStyles,
    },
    ref
  ) => {
    const id = `switch-${label}`

    const Label = () => (
      <BaseSwitch.Label
        as={BaseLabel}
        htmlFor={id}
        css={[
          tw`label`,
          disabled && tw`cursor-not-allowed`,
          error && tw`text-error`,
          overrideLabelStyles,
        ]}
      >
        {label}
      </BaseSwitch.Label>
    )
    return (
      <BaseSwitch.Group>
        <div aria-checked={checked} css={[tw`form-control`, getLabelPositionStyles(labelPosition)]}>
          {(labelPosition === 'left' || labelPosition === 'top') && <Label />}
          {/* @ts-ignore */}
          <BaseSwitch as="div" checked={checked} onChange={onChange} ref={ref}>
            <input
              id={id}
              type="checkbox"
              checked={checked}
              css={[
                tw`toggle`,
                checked && getAccentColorStyles(checkedColor),
                !checked && getAccentColorStyles(notCheckedColor),
                disabled && tw`bg-opacity-40 cursor-not-allowed`,
                error && tw`bg-error`,
              ]}
            />
            <label tw="sr-only">{label}</label>
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
