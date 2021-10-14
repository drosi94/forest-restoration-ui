import React from 'react'
import { Story, Meta } from '@storybook/react'

import { IconButton, IconButtonProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/IconButton',
  component: IconButton,
} as Meta

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  Icon: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  children: 'My Icon here',
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
  size: 'medium',
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
