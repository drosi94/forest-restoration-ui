import React from 'react'
import { useState } from '@storybook/addons'
import { Story, Meta } from '@storybook/react'

import { Autocomplete, AutocompleteProps } from '@forest-restoration/shared'
import { MultipleAutocomplete, MultipleAutocompleteProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Form/Autocomplete',
  component: Autocomplete,
} as Meta

const Template: Story<AutocompleteProps> = (args) => {
  const options = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Joe' },
    { id: 3, name: 'Mary' },
    { id: 4, name: 'Hellen' },
  ]
  return <Autocomplete options={options} optionLabelItem="name" {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
  id: 'test',
  name: 'test',
  label: 'Label',
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

export const Multiple: Story<AutocompleteProps> = (args) => {
  const options = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Joe' },
    { id: 3, name: 'Mary' },
    { id: 4, name: 'Hellen' },
  ]
  const [value, setValue] = useState([options[0]])

  return (
    <MultipleAutocomplete
      {...Primary.args}
      {...args}
      value={value}
      options={options}
      onChange={(newValues) => setValue(newValues)}
      optionLabelItem="name"
    />
  )
}
