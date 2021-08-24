import React from 'react'
import { useState } from '@storybook/addons'

import { Story, Meta } from '@storybook/react'

import { Button, Modal, ModalProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Modal',
  component: Modal,
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

const Template: Story<ModalProps> = ({ children, isOpen, handleClose, ...args }) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} {...args}>
      <Button onClick={handleClose}>close</Button>
      {children}
    </Modal>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  title: 'A Happy Modal',
  description: 'A very happy description of the modal',
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  ...Primary.args,
  fullWidth: true,
}

export const FullScreen = Template.bind({})
FullScreen.args = {
  ...Primary.args,
  fullScreen: true,
}

export const WithContent = Template.bind({})
WithContent.args = {
  ...Primary.args,
  children: (
    <div className="flex flex-col gap-2 mt-2">
      <input />
      <input />
      <input />
    </div>
  ),
}

export const CustomFooter = Template.bind({})
CustomFooter.args = {
  ...Primary.args,
  Footer: (
    <div className="flex gap-2 mt-2">
      <button>Test1</button>
      <button>Test2</button>
    </div>
  ),
}
