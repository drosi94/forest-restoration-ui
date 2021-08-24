import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Autocomplete, AutocompleteProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Form/Autocomplete',
  component: Autocomplete,
} as Meta

const Template: Story<AutocompleteProps> = (args) => {
  const options = [
    { id: 1, name: 'Egw' },
    { id: 2, name: 'Esy' },
    { id: 3, name: 'Aytos' },
    { id: 4, name: 'Emeis' },
  ]
  const [value, setValue] = React.useState(options[0])
  return <Autocomplete options={options} optionLabelItem="name" {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
  id: 'test',
  name: 'test',
  label: 'Label',
}
