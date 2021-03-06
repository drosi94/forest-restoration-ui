import React from 'react'
import tw from 'twin.macro'
import { Typography, Hint, Error } from '../../atoms'
import { BaseColor } from '../../utils'

type LabelPosition = 'left' | 'right' | 'top' | 'bottom' | 'hidden'

export type CheckboxProps = {
  id?: string
  /**
   * The label of the checkbox. Should be defined even if it's hidden for accessibility reasons.
   */
  label: string
  /**
   * The position of the label
   */
  labelPosition?: 'left' | 'right' | 'top' | 'bottom' | 'hidden'
  /**
   * Should the checkbox be in checked state
   */
  checked?: boolean
  /**
   * Should the checkbox be disabled
   */
  disabled?: boolean
  /**
   * Should the checkbox be checked
   */
  required?: boolean
  /**
   * The color of the switch
   */
  accentColor?: BaseColor
  /**
   * Callback function to be called when the checkbox is toggled
   */
  onChange?: (checked: boolean) => void
  /**
   * The error of the checkbox
   */
  error?: string | React.ReactNode
  /**
   * The hint of the checkbox
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

const noop = () => {}

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

const getAccentColorStyles = (color: BaseColor) => {
  switch (color) {
    case 'primary':
      return tw`checkbox-primary`
    case 'secondary':
      return tw`checkbox-secondary`
    default:
      return tw`checkbox-primary`
  }
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  labelPosition = 'left',
  checked,
  disabled,
  required,
  accentColor = 'primary',
  onChange = noop,
  error,
  hint,
  overrideLabelStyles,
  overrideHintContainerStyles,
  overrideErrorContainerStyles,
}) => {
  const forId = id || `checkbox-${Math.floor(Math.random() * 1000)}`

  const Label = () => (
    <Typography
      as="label"
      htmlFor={forId}
      css={[
        disabled && tw`cursor-not-allowed`,
        error && tw`text-error`,
        labelPosition === 'hidden' && tw`sr-only`,
        overrideLabelStyles,
      ]}
    >
      {label}
    </Typography>
  )

  return (
    <div tw="form-control">
      <div css={[tw`flex`, getLabelPositionStyles(labelPosition)]}>
        {(labelPosition === 'left' || labelPosition === 'top' || labelPosition === 'hidden') && (
          <Label />
        )}
        <input
          id={forId}
          type="checkbox"
          required={required}
          checked={checked}
          disabled={disabled}
          onChange={
            onChange
              ? (e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.checked)
              : undefined
          }
          css={[
            tw`checkbox`,
            getAccentColorStyles(accentColor),
            disabled && tw`cursor-not-allowed`,
          ]}
        />
        {(labelPosition === 'right' || labelPosition === 'bottom') && <Label />}
      </div>
      {hint && <Hint overrideHintContainerStyles={overrideHintContainerStyles}>{hint}</Hint>}
      {error && <Error overrideErrorContainerStyles={overrideErrorContainerStyles}>{error}</Error>}
    </div>
  )
}
