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
