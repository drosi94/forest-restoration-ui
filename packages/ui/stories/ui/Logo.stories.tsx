import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Logo, LogoProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Logo',
  component: Logo,
} as Meta

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 'medium',
  height: 0,
  width: 0,
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  height: 0,
  width: 0,
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  height: 0,
  width: 0,
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  height: 0,
  width: 0,
}

export const Custom = Template.bind({})
Custom.args = {
  size: 'custom',
  height: 342,
  width: 342,
}
