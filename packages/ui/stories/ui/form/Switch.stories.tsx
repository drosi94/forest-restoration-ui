import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Switch, SwitchProps, Typography } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Form/Switch',
  component: Switch,
} as Meta

const Template: Story<SwitchProps> = (args) => <Switch {...args} />

export const Primary = Template.bind({})
Primary.args = {
  checked: true,
  label: 'Switch',
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

export const WithDoubleText = (args) => (
  <div className="flex flex-row gap-2">
    <Typography>Left</Typography>
    <Switch label="Label" {...args} labelPosition="hidden" />
    <Typography>Right</Typography>
  </div>
)

export const NotChecked = Template.bind({})
NotChecked.args = {
  ...Primary.args,
  checked: false,
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
