import React from 'react'
import { useState } from '@storybook/addons'
import { Story, Meta } from '@storybook/react'

import { Button, SideDrawer, SideDrawerProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/SideDrawer',
  component: SideDrawer,
  decorators: [
    (story: any, props) => {
      const [open, setOpen] = useState(false)

      return (
        <>
          {story({
            args: {
              isOpen: open,
              handleClose: () => setOpen(false),
              ...props.args,
            },
          })}
          <Button onClick={() => setOpen(true)}>open</Button>
        </>
      )
    },
  ],
} as Meta

const Template: Story<SideDrawerProps> = ({ children, isOpen, handleClose, ...args }) => {
  return (
    <SideDrawer isOpen={isOpen} handleClose={handleClose} title="Title" {...args}>
      <Button onClick={handleClose}>close</Button>
      {children}
    </SideDrawer>
  )
}

export const Primary = Template.bind({})
Primary.args = {}

export const Right = Template.bind({})
Right.args = {
  side: 'right',
}
