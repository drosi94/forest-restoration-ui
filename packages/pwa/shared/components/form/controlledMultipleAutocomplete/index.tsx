import { useController, UseControllerProps } from 'react-hook-form'
import { MultipleAutocomplete, MultipleAutocompleteProps } from '@forest-restoration/shared'

export const ControlledMultipleAutocomplete: React.FC<
  Omit<MultipleAutocompleteProps, 'name' | 'id'> & UseControllerProps
> = ({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  ...restMultipleAutocompleteProps
}) => {
  const { field, fieldState } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
  })

  const { error, invalid } = fieldState
  delete field.ref

  return (
    <MultipleAutocomplete
      {...field}
      {...restMultipleAutocompleteProps}
      id={name}
      error={invalid ? error?.message : undefined}
      value={!field.value ? [] : field.value}
    />
  )
}
