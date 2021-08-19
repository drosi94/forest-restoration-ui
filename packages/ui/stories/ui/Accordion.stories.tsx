import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Accordion, AccordionProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Accordion',
  component: Accordion,
} as Meta

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Do you know forest restoration app?',
  children: 'It is an awesome app',
}

export const Opened = Template.bind({})
Opened.args = {
  ...Primary.args,
  isOpened: true,
}

export const CustomComponent = Template.bind({})
CustomComponent.args = {
  ...Primary.args,

  children: (
    <div className="border-2">
      <h3>Custom h3</h3>
      <span>Custom span</span>
    </div>
  ),
}
