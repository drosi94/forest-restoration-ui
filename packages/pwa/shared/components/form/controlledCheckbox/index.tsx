import { useController, UseControllerProps } from 'react-hook-form'
import { Checkbox, CheckboxProps } from '@forest-restoration/shared'

export const ControlledCheckbox: React.FC<Omit<CheckboxProps, 'name'> & UseControllerProps> = ({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  ...restCheckboxProps
}) => {
  const { field, fieldState } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
  })

  const { error, invalid } = fieldState

  return (
    <Checkbox
      {...field}
      {...restCheckboxProps}
      checked={field.value}
      error={invalid ? error?.message : undefined}
    />
  )
}
