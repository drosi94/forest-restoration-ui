import React from 'react'
import { Story, Meta } from '@storybook/react'

import { RadioGroup, RadioGroupProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Form/RadioGroup',
  component: RadioGroup,
} as Meta

const Template: Story<RadioGroupProps> = (args) => <RadioGroup {...args} />

export const Primary = Template.bind({})
Primary.args = {

}



