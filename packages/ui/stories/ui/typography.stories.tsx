import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Typography, TypographyProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Typography',
  component: Typography,
} as Meta

const Template: Story<TypographyProps> = (args) => <Typography {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'My Typography',
  variant: 'body',
}

export const Header = Template.bind({})
Header.args = {
  children: 'My Header',
  as: 'h2',
  variant: 'header',
}

export const Body = Template.bind({})
Body.args = {
  children: 'My Body 1',
  variant: 'body',
}

export const Body2 = Template.bind({})
Body2.args = {
  children: 'My Body 2',
  variant: 'body2',
}

export const PrimaryColor = Template.bind({})
PrimaryColor.args = {
  children: 'My Text',
  color: 'primary',
}

export const SecondaryColor = Template.bind({})
SecondaryColor.args = {
  children: 'My Text',
  color: 'secondary',
}

export const TextPrimaryColor = Template.bind({})
TextPrimaryColor.args = {
  children: 'My Text',
  color: 'textPrimary',
}

export const TextSecondaryColor = Template.bind({})
TextSecondaryColor.args = {
  children: 'My Text',
  color: 'textSecondary',
}

export const Underlined = Template.bind({})
Underlined.args = {
  children: 'My Text',
  underlined: true,
}

export const Italic = Template.bind({})
Italic.args = {
  children: 'My Text',
  italic: true,
}

export const Bold = Template.bind({})
Bold.args = {
  children: 'My Text',
  fontWeight: 'bold',
}

export const Light = Template.bind({})
Light.args = {
  children: 'My Text',
  fontWeight: 'light',
}

export const Sans = Template.bind({})
Sans.args = {
  children: 'My Text',
  fontFamily: 'sans',
}

export const NotoSerif = Template.bind({})
NotoSerif.args = {
  children: 'My Text',
  fontFamily: 'notoSerif',
}
