import { useController, UseControllerProps } from 'react-hook-form'
import { Select, SelectProps } from '@forest-restoration/shared'

export const ControlledSelect: React.FC<Omit<SelectProps, 'name' | 'id'> & UseControllerProps> = ({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  multiple,
  ...restSelectProps
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
    <Select
      {...field}
      {...restSelectProps}
      id={name}
      multiple={multiple}
      error={invalid ? error?.message : undefined}
      value={multiple && !field.value ? [] : field.value}
    />
  )
}
