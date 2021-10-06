import React from 'react'
import tw from 'twin.macro'
import { Story, Meta } from '@storybook/react'

import { SplitButtonPopover, SplitButtonPopoverProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/SplitButtonPopover',
  component: SplitButtonPopover,
} as Meta

const Template: Story<SplitButtonPopoverProps> = (args) => <SplitButtonPopover {...args} />

const otherButtons = (
  <>
    <div tw="p-3">
      <a href="#">other</a>
    </div>
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  displayName: 'Test user',
  children: otherButtons,
}
