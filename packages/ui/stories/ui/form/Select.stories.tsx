import React from 'react'
import { useState, useEffect } from '@storybook/addons'
import { Story, Meta } from '@storybook/react'

import { Select, SelectProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Form/Select',
  component: Select,
  decorators: [
    (story: any, props) => {
      const options = [
        { label: 'Test1', value: 'test1' },
        { label: 'Test2', value: 'test2' },
        { label: 'Test3', value: 'test3' },
        { label: 'Test4', value: 'test4' },
        { label: 'Test5', value: 'test5' },
      ]
      const [value, setValue] = useState(null)

      return (
        <>
          {story({
            args: {
              ...props.args,

              options,
              value,
              onChange: (value) => setValue(value),
            },
          })}
        </>
      )
    },
  ],
} as Meta

const Template: Story<SelectProps> = ({ options, value, onChange, ...args }) => {
  return <Select {...args} options={options} value={value} onChange={onChange} />
}

export const Primary = Template.bind({})
Primary.args = {
  id: 'test',
  name: 'test',
  label: 'Label',
}

export const Multiple: Story<SelectProps> = ({ options, value, onChange, ...args }) => {
  return (
    <Select
      {...Primary.args}
      options={options}
      value={value}
      onChange={onChange}
      multiple
      {...args}
      placeholder="Please select an option"
    />
  )
}

export const WithError = Template.bind({})
WithError.args = {
  ...Primary.args,
  error: 'This is an error',
}

export const WithHint = Template.bind({})
WithHint.args = {
  ...Primary.args,
  hint: 'This is a hint',
}

export const WithResetOption = Template.bind({})
WithResetOption.args = {
  ...Primary.args,
  shouldResetOption: true,
}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
  ...Primary.args,
  placeholder: 'Please select an option wisely',
  value: null,
}
