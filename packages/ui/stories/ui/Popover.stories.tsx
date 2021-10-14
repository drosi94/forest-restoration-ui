import React from 'react'
import { Story, Meta } from '@storybook/react'
import tw from 'twin.macro'

import { Popover, PopoverProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Popover',
  component: Popover,
} as Meta

const Template: Story<PopoverProps> = (args) => (
  <div tw="flex items-center justify-center h-screen">
    <Popover {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Popover',
  children: (
    <div tw="relative bg-base-200 text-white p-4 w-full">
      <span>Here I am</span>
    </div>
  ),
}

export const Top = Template.bind({})
Top.args = {
  ...Primary.args,
  placement: 'top-start',
}
