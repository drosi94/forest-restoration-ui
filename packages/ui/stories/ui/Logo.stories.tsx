import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Logo, LogoProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Logo',
  component: Logo,
} as Meta

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const Big = Template.bind({})
Big.args = {
  variant: 'big',
}

export const Medium = Template.bind({})
Medium.args = {
  variant: 'medium',
}

export const Small = Template.bind({})
Small.args = {
  variant: 'small',
}

export const Custom = Template.bind({})
Custom.args = {
  variant: 'custom',
  height: 342,
  width: 342,
}
