import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'My Button',
  color: 'primary',
  variant: 'contained',
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  color: 'secondary',
}

export const Contained = Template.bind({})
Contained.args = {
  ...Primary.args,
  variant: 'contained',
}

export const Outlined = Template.bind({})
Outlined.args = {
  ...Primary.args,
  variant: 'outlined',
}

export const Text = Template.bind({})
Text.args = {
  ...Primary.args,
  variant: 'text',
}

export const Large = Template.bind({})
Large.args = {
  ...Primary.args,
  size: 'large',
}

export const Medium = Template.bind({})
Medium.args = {
  ...Primary.args,
  size: 'medium',
}

export const Small = Template.bind({})
Small.args = {
  ...Primary.args,
  size: 'small',
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  ...Primary.args,
  fullWidth: true,
}

export const Rounded = Template.bind({})
Rounded.args = {
  ...Primary.args,
  rounded: true,
}

export const NoShadow = Template.bind({})
NoShadow.args = {
  ...Primary.args,
  noShadow: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Primary.args,
  disabled: true,
}

export const Link = Template.bind({})
Link.args = {
  ...Primary.args,
  as: 'a',
}
