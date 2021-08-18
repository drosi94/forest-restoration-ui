import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}>My button</Button>

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
}

export const Small = Template.bind({})
Small.args = {
  size: 'medium',
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  fullWidth: true,
}

export const Rounded = Template.bind({})
Rounded.args = {
  rounded: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const Link = Template.bind({})
Link.args = {
  as: 'a',
}
