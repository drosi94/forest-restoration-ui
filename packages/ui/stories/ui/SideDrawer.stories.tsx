import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, SideDrawer, SideDrawerProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/SideDrawer',
  component: SideDrawer,
} as Meta

const Template: Story<SideDrawerProps> = ({ children, ...args }) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpen(true)}>open</Button>
      <SideDrawer isOpen={open} handleClose={() => setOpen(false)} title="Title" {...args}>
        <Button onClick={() => setOpen(false)}>close</Button>
        {children}
      </SideDrawer>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}

export const Right = Template.bind({})
Right.args = {
  side: 'right',
}
