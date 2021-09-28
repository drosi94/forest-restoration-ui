import { useController, UseControllerProps } from 'react-hook-form'
import { Input, InputProps } from '@forest-restoration/shared'

export const ControlledInput: React.FC<Omit<InputProps, 'name' | 'id'> & UseControllerProps> = ({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  ...restInputProps
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
    <Input {...field} {...restInputProps} id={name} error={invalid ? error?.message : undefined} />
  )
}
