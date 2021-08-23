import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Spinner, SpinnerProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Loaders/Spinner',
  component: Spinner,
} as Meta

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />

export const Primary = Template.bind({})
Primary.args = {}
