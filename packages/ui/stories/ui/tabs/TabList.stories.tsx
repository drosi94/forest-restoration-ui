import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Tab, TabList, TabListProps } from '@forest-restoration/shared'
import { BellIcon } from '@heroicons/react/solid'

export default {
  title: 'Shared/UI/Tabs/TabList',
  component: TabList,
} as Meta

const Template: Story<TabListProps> = (args) => {
  const tabs = ['New', 'Old', 'Something else']
  return (
    <Tab.Group>
      <TabList tabs={tabs} {...args} />
    </Tab.Group>
  )
}

export const Primary = Template.bind({})
Primary.args = {}

export const WithIcons = Template.bind({})
WithIcons.args = {
  tabs: [
    {
      label: 'Notifications',
      icon: <BellIcon width={24} />,
    },
    {
      label: 'Another one',
      icon: <BellIcon width={24} />,
    },
    {
      id: '3',
      label: 'More tab',
      icon: <BellIcon width={24} />,
    },
  ],
}

export const WithOnlyIcons = Template.bind({})
WithOnlyIcons.args = {
  tabs: [
    {
      id: '1',
      label: '',
      icon: <BellIcon width={24} />,
    },
    {
      id: '2',
      label: '',
      icon: <BellIcon width={24} />,
    },
    {
      id: '3',
      label: '',
      icon: <BellIcon width={24} />,
    },
  ],
}
