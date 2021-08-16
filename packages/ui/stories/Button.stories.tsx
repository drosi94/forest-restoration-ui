import React from 'react'

import { Button } from '@forest-restoration/shared'

export default {
  title: 'Shared/Button',
  component: Button,
}

const Template = (args) => <Button {...args}>My button</Button>

export const Primary = Template.bind({})
Primary.args = {}
