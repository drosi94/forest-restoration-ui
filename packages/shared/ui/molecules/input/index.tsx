import React from 'react'
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
  type?: string
  /**
   * The name of the input
   */
  name: string
  /**
   * The label of the input
   */
  label: string
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
   * Override styles of the container inpt
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

const styles = ({ error }) => ({
  'input:focus ~ label,\n  input:not(:placeholder-shown) ~ label,\n  textarea:focus ~ label,\n  textarea:not(:placeholder-shown) ~ label':
    {
      '--tw-translate-x': '0',
      '--tw-translate-y': ['0', '-1.5rem'],
      '--tw-rotate': '0',
      '--tw-skew-x': '0',
      '--tw-skew-y': '0',
      transform:
        'translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))\n      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      '--tw-scale-x': '0.75',
      '--tw-scale-y': '0.75',
    },
  'input:focus ~ label,\n  textarea:focus ~ label': {
    color: !error ? theme('colors.primary[400]') : theme('colors.red[300]'),
    left: '0px',
  },
})

const baseInputStyle = tw`p-3 block w-full px-1 mt-0 bg-transparent border-0 border-b-2 appearance-none 
focus:outline-none focus:ring-0 focus:border-primary-400 border-gray-200
`

export const Input: React.FC<InputProps> = ({
  id,
  type = 'text',
  name,
  label,
  required,
  value,
  defaultValue,
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
}) => {
  const getComponent = () => {
    const sharedProps = {
      id,
      required,
      name,
      placeholder: ' ',
      value,
      defaultValue,
      onChange,
    }
    if (!multiline) {
      return (
        <input
          {...sharedProps}
          type={type}
          css={[baseInputStyle, error && tw`border-red-500!`, overrideInputStyles]}
        />
      )
    } else {
      return (
        <TextareaAutosize
          {...sharedProps}
          minRows={minRows}
          maxRows={maxRows}
          css={[baseInputStyle, error && tw`border-red-500!`, overrideInputStyles]}
        />
      )
    }
  }

  return (
    <div
      css={[
        tw`relative z-0 w-full mb-5 text-textPrimary`,
        styles({ error }),
        overrideContainerStyles,
      ]}
    >
      {getComponent()}
      <Typography as="label" htmlFor={id} tw="absolute duration-300 top-3 left-2 z-auto ">
        {label} {required && <Typography tw="text-red-300">*</Typography>}
      </Typography>
      {hint && <Hint overrideHintContainerStyles={overrideHintContainerStyles}>{hint}</Hint>}
      {error && <Error overrideErrorContainerStyles={overrideErrorContainerStyles}>{error}</Error>}
    </div>
  )
}
