import React from 'react'
import tw from 'twin.macro'
import { Story, Meta } from '@storybook/react'

import { Navbar, NavbarProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/Layout/Navbar',
  component: Navbar,
} as Meta

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />

const primaryNav = (
  <>
    <a href="#">
      <span tw="text-textPrimary hover:opacity-70">Features</span>
    </a>
    <a href="#">
      <span tw="text-textPrimary hover:opacity-70">Pricing</span>
    </a>
  </>
)

const secondaryNav = <button>Login</button>

export const Primary = Template.bind({})
Primary.args = {
  primaryNav,
}
