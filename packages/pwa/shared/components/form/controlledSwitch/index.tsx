import { useController, UseControllerProps } from 'react-hook-form'
import { Switch, SwitchProps } from '@forest-restoration/shared'

export const ControlledSwitch: React.FC<Omit<SwitchProps, 'name'> & UseControllerProps> = ({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  ...restSwitchProps
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
    <Switch
      {...field}
      {...restSwitchProps}
      checked={field.value}
      error={invalid ? error?.message : undefined}
    />
  )
}
