import React from 'react'
import { Story, Meta } from '@storybook/react'

import { BaseCard, BaseCardProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Card/BaseCard',
  component: BaseCard,
} as Meta

const BaseCardTemplate: Story<BaseCardProps> = (args) => <BaseCard {...args} />

export const Primary = BaseCardTemplate.bind({})
Primary.args = {
  children: <div>Hello here</div>,
}

export const Secondary = BaseCardTemplate.bind({})
Secondary.args = {
  ...Primary.args,
  color: 'bgPrimary',
}

export const NotCentered = BaseCardTemplate.bind({})
NotCentered.args = {
  ...Primary.args,
  centered: false,
}

export const WithoutShadow = BaseCardTemplate.bind({})
WithoutShadow.args = {
  ...Primary.args,
  noShadow: true,
}

export const NoRounded = BaseCardTemplate.bind({})
NoRounded.args = {
  ...Primary.args,
  rounded: false,
}
