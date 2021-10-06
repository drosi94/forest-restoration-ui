import React from 'react'
import tw from 'twin.macro'
import { Story, Meta } from '@storybook/react'

import { SplitButton, SplitButtonProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/SplitButton',
  component: SplitButton,
} as Meta

const Template: Story<SplitButtonProps> = (args) => <SplitButton {...args} />

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
  actions: [
    {
      id: 'Action 1',
      label: 'Action 1',
      onClick: () => {
        console.log('action1')
      },
    },
    {
      id: 'Action 2',
      label: 'Action 2',
      onClick: () => {
        console.log('action2')
      },
    },
  ],
}
