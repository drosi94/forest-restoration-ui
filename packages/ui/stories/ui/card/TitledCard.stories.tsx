import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TitledCard, TitledCardProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Card/TitledCard',
  component: TitledCard,
} as Meta

const TitledCardTemplate: Story<TitledCardProps> = (args) => <TitledCard {...args} />

export const Primary = TitledCardTemplate.bind({})
Primary.args = {
  children: <div>Hello here</div>,
}
