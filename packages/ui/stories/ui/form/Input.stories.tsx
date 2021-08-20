import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Input, InputProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Form/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  id: 'test',
  label: 'Label',
  type: 'text',
}

export const Password = Template.bind({})
Password.args = {
  ...Primary.args,
  type: 'password',
}

export const Date = Template.bind({})
Date.args = {
  ...Primary.args,
  type: 'date',
}

export const Time = Template.bind({})
Time.args = {
  ...Primary.args,
  type: 'time',
}

export const WithTextHint = Template.bind({})
WithTextHint.args = {
  ...Primary.args,
  hint: 'A useful hint to help you out',
}

export const WithCustomHint = Template.bind({})
WithCustomHint.args = {
  ...Primary.args,
  hint: <div>A custom hint</div>,
}

export const WithTextError = Template.bind({})
WithTextError.args = {
  ...Primary.args,
  error: 'This is an error',
}

export const WithCustomError = Template.bind({})
WithCustomError.args = {
  ...Primary.args,
  error: <div>A custom error</div>,
}
