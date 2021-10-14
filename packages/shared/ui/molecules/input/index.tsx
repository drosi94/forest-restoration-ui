import React, { HTMLInputTypeAttribute } from 'react'
import tw, { theme } from 'twin.macro'
import TextareaAutosize from 'react-textarea-autosize'
import { Typography, Hint, Error } from '../../atoms'

export type InputProps = {
  /**
   * The id of the input
   */
  id: string
  /**
   * The id of the input
   */
  type?: HTMLInputTypeAttribute
  /**
   * The name of the input
   */
  name: string
  /**
   * The label of the input
   */
  label: string
  /**
   * The placeholder of the input
   */
  placeholder?: string
  /**
   * Is required to be filled
   */
  required?: boolean
  /**
   * The value of the input (controlled)
   */
  value?: string
  /**
   * The default value of the input (uncontrolled)
   */
  defaultValue?: string
  /**
   * The error if exists
   */
  error?: string | React.ReactNode
  /**
   * The hint text
   */
  hint?: string | React.ReactNode
  /**
   * Should the input be multiline
   */
  multiline?: boolean
  /**
   * If it is multiline, the minimum number of lines
   */
  minRows?: number
  /**
   * If it is multiline, the maximum number of lines
   */
  maxRows?: number
  /**
   * Callback on every input change
   */
  onChange?: (value: any) => void
  /**
   * Override styles of the container input
   */
  overrideContainerStyles?: any
  /**
   * Override styles of the input
   */
  overrideInputStyles?: any
  /**
   * Override styles of the hint container
   */
  overrideHintContainerStyles?: any
  /**
   * Override styles of the error container
   */
  overrideErrorContainerStyles?: any
}

export const Input: React.FC<InputProps> = React.forwardRef<any, InputProps>(
  (
    {
      id,
      type = 'text',
      name,
      label,
      required,
      value,
      defaultValue,
      placeholder,
      error,
      hint,
      multiline,
      minRows,
      maxRows,
      onChange,
      overrideContainerStyles,
      overrideInputStyles,
      overrideHintContainerStyles,
      overrideErrorContainerStyles,
      ...rest
    },
    ref
  ) => {
    let Component
    const sharedProps = {
      id,
      required,
      name,
      placeholder,
      value,
      defaultValue,
      onChange,
    }
    if (!multiline) {
      Component = (
        <input
          {...sharedProps}
          type={type}
          css={[tw`input input-bordered`, error && tw`input-error`, overrideInputStyles]}
          ref={ref}
          {...rest}
        />
      )
    } else {
      Component = (
        <TextareaAutosize
          {...sharedProps}
          minRows={minRows}
          maxRows={maxRows}
          css={[tw`textarea textarea-bordered`, error && tw`textarea-error`, overrideInputStyles]}
          ref={ref}
          {...rest}
        />
      )
    }

    return (
      <div css={[tw`form-control`, overrideContainerStyles]}>
        <div tw="flex gap-1">
          <Typography as="label" htmlFor={id} tw="label">
            {label}
          </Typography>
          {required && <Typography tw="text-error">*</Typography>}
        </div>

        {Component}

        {hint && <Hint overrideHintContainerStyles={overrideHintContainerStyles}>{hint}</Hint>}
        {error && (
          <Error overrideErrorContainerStyles={overrideErrorContainerStyles}>{error}</Error>
        )}
      </div>
    )
  }
)
