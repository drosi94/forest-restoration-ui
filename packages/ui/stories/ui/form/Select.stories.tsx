import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Select, SelectProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Form/Select',
  component: Select,
} as Meta

const Template: Story<SelectProps> = (args) => {
  const options = [
    { label: 'Test1', value: 'test1' },
    { label: 'Test2', value: 'test2' },
  ]
  const [value, setValue] = React.useState(options[0])
  return (
    <Select
      options={options}
      value={value}
      onChange={(e) => {
        console.log('here')
        setValue(e)
      }}
      {...args}
    />
  )
}

export const Primary = Template.bind({})
Primary.args = {
  id: 'test',
  name: 'test',
  label: 'Label',
}

export const WithError = Template.bind({})
WithError.args = {
  ...Primary.args,
  error: 'This is an error',
}

export const WithHint = Template.bind({})
WithHint.args = {
  ...Primary.args,
  hint: 'This is a hint',
}

export const WithResetOption = Template.bind({})
WithResetOption.args = {
  ...Primary.args,
  shouldResetOption: true,
}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
  ...Primary.args,
  placeholder: 'Please select an option wisely',
  value: null,
}
