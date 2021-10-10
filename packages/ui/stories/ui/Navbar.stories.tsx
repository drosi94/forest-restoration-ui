import React from 'react'
import tw from 'twin.macro'
import { Story, Meta } from '@storybook/react'

import { Navbar, NavbarProps, UserActionsPopover } from '@forest-restoration/shared'

export default {
  title: 'Shared/Layout/Navbar',
  component: Navbar,
} as Meta

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />

const primaryNav = (
  <>
    <a href="#">
      <span tw="text-base-content hover:opacity-70">Features</span>
    </a>
    <a href="#">
      <span tw="text-base-content hover:opacity-70">Pricing</span>
    </a>
  </>
)

const secondaryNav = (
  <>
    <button>Login</button>
    <button>register</button>
  </>
)

const userActions = (
  <UserActionsPopover label="User actions" displayName="test user">
    <button>Login</button>
    <button>register</button>
  </UserActionsPopover>
)

export const Primary = Template.bind({})
Primary.args = {
  primaryNav,
  secondaryNav,
  userActions,
}
