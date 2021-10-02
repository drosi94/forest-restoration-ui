import React from 'react'
import { Story, Meta } from '@storybook/react'
import { MotionProps } from 'framer-motion'

import { AnimatedButton, Button, ButtonProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />
const AnimatedTemplate: Story<ButtonProps & MotionProps> = (args) => <AnimatedButton {...args} />

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
  variant: 'outline',
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

export const Animated = AnimatedTemplate.bind({})
Animated.args = {
  ...Primary.args,
}
