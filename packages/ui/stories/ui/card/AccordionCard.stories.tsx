import React from 'react'
import { Story, Meta } from '@storybook/react'

import { AccordionCard, AccordionCardProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Card/AccordionCard',
  component: AccordionCard,
} as Meta

const AccordionCardTemplate: Story<AccordionCardProps> = (args) => <AccordionCard {...args} />

export const Primary = AccordionCardTemplate.bind({})
Primary.args = {
  title: 'This is a title',
  children: <div>Hello here</div>,
}
