import React from 'react'
import { Story, Meta } from '@storybook/react'
import { BellIcon } from '@heroicons/react/solid'

import { Pill, PillProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Pill',
  component: Pill,
} as Meta

const Template: Story<PillProps> = (args) => <Pill {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Hello',
  onRemove: null,
}

export const WithClose = Template.bind({})
WithClose.args = {
  ...Primary.args,
  onRemove: () => {},
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  ...Primary.args,
  icon: <BellIcon width={12} />,
}

export const CustomChildren = Template.bind({})
CustomChildren.args = {
  ...Primary.args,
  children: <button className="border-2 border-primaryTemp-400">I am a button</button>,
}
