import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Checkbox, CheckboxProps, Typography } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Form/Checkbox',
  component: Checkbox,
} as Meta

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Checkbox',
}

export const Right = Template.bind({})
Right.args = {
  ...Primary.args,
  labelPosition: 'right',
}

export const Top = Template.bind({})
Top.args = {
  ...Primary.args,
  labelPosition: 'top',
}

export const Bottom = Template.bind({})
Bottom.args = {
  ...Primary.args,
  labelPosition: 'bottom',
}

export const Hidden = Template.bind({})
Hidden.args = {
  ...Primary.args,
  labelPosition: 'hidden',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Primary.args,
  disabled: true,
}

export const WithHint = Template.bind({})
WithHint.args = {
  ...Primary.args,
  hint: 'A useful hint here',
}

export const WithError = Template.bind({})
WithError.args = {
  ...Primary.args,
  error: 'This is an error',
}
