import React from 'react'
import tw from 'twin.macro'
import { Story, Meta } from '@storybook/react'

import { UserActionsPopover, UserActionsPopoverProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/Layout/UserActionsPopover',
  component: UserActionsPopover,
} as Meta

const Template: Story<UserActionsPopoverProps> = (args) => <UserActionsPopover {...args} />

const userActions = (
  <>
    <div tw="p-3">
      <a href="#">Test</a>
    </div>
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  displayName: 'Test user',
  children: userActions,
}
