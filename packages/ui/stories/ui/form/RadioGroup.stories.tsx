import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'

import { RadioGroup, RadioGroupProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Form/RadioGroup',
  component: RadioGroup,
  decorators: [
    (story: any, props) => {
      const [selected, setSelected] = useState(undefined)

      return (
        <>
          {story({
            args: {
              ...props.args,
              selected: selected,
              onChange: (value) => {
                setSelected(value)
              },
            },
          })}
        </>
      )
    },
  ],
} as Meta

const Template: Story<RadioGroupProps> = ({ selected, onChange, ...args }) => (
  <RadioGroup selected={selected} onChange={onChange} {...args} />
)

const plans = [
  {
    id: 's',
    label: 'Startup',
    description: '12GB',
  },
  {
    id: 'b',
    label: 'Business',
    description: '16GB',
  },
  {
    id: 'e',
    label: 'Enterprise',
  },
]

export const Primary = Template.bind({})
Primary.args = {
  items: plans,
  name: 'name',
  label: 'Label',
  id: 'id',
}
