import { useController, UseControllerProps } from 'react-hook-form'
import { RadioGroup, RadioGroupProps } from '@forest-restoration/shared'

export const ControlledRadioGroup: React.FC<Omit<RadioGroupProps, 'name'> & UseControllerProps> = ({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  ...restRadioGroupProps
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
    <RadioGroup
      {...field}
      {...restRadioGroupProps}
      selected={field.value}
      error={invalid ? error?.message : undefined}
    />
  )
}
