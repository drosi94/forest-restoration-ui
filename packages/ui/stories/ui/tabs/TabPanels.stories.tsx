import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Tab, TabList, TabPanels, TabPanelsProps } from '@forest-restoration/shared'

export default {
  title: 'Shared/UI/Tabs/TabPanels',
  component: TabPanels,
} as Meta

const Template: Story<TabPanelsProps> = (args) => {
  const tabs = ['New', 'Old', 'Something else']
  const panels = [
    {
      tab: tabs[0],
      component: (
        <div tw="p-4">
          <span tw="text-textPrimary">Hello there 1</span>
        </div>
      ),
    },
    {
      tab: tabs[1],
      component: (
        <div tw="p-4">
          <span tw="text-textPrimary">Hello there 2</span>
        </div>
      ),
    },
    {
      tab: tabs[2],
      component: (
        <div tw="p-4">
          <span tw="text-textPrimary">Hello there 3</span>
        </div>
      ),
    },
  ]
  return (
    <Tab.Group>
      <TabList tabs={tabs} {...args} />
      <TabPanels panels={panels} {...args} />
    </Tab.Group>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
