import React from 'react'
import { Story, Meta } from '@storybook/react'

import { LinearIndicator, LinearIndicatorProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Loaders/LinearIndicator',
  component: LinearIndicator,
} as Meta

const Template: Story<LinearIndicatorProps> = (args) => <LinearIndicator {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
}
