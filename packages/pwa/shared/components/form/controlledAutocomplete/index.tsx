import { useController, UseControllerProps } from 'react-hook-form'
import { Autocomplete, AutocompleteProps } from '@forest-restoration/shared'

export const ControlledAutocomplete: React.FC<
  Omit<AutocompleteProps, 'name' | 'id'> & UseControllerProps
> = ({ name, rules, shouldUnregister, defaultValue, control, ...restAutocompleteProps }) => {
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
    <Autocomplete
      {...field}
      {...restAutocompleteProps}
      id={name}
      error={invalid ? error?.message : undefined}
      value={field.value ?? ''}
    />
  )
}
