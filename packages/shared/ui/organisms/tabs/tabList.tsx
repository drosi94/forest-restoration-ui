import { Fragment } from 'react'
import tw from 'twin.macro'
import { Tab } from '@headlessui/react'
import { Typography } from '../../atoms'
import { getItem } from '../../utils'

export type TabType =
  | string
  | {
      id?: string
      label: string
      icon?: React.ReactNode
    }

export type TabListProps = {
  /**
   * The tabs to render.
   */
  tabs: TabType[]
  overrideContainerStyles?: any
  overrideTabButtonStyles?: any
  overrideTabSelectedButtonStyles?: any
  overrideTabLabelStyles?: any
  overrideTabIconStyles?: any
}

export const TabList: React.FC<TabListProps> = ({
  tabs,
  overrideContainerStyles,
  overrideTabButtonStyles,
  overrideTabSelectedButtonStyles,
  overrideTabLabelStyles,
  overrideTabIconStyles,
}) => {
  return (
    <Tab.List css={[tw`flex p-1 space-x-1 bg-bgSecondary/20 rounded-xl`, overrideContainerStyles]}>
      {tabs.map((tab) => {
        const tabId = getItem(tab, 'id')
        const tabLabel = getItem(tab, 'label')
        return (
          <Tab key={tabId ?? tabLabel} as={Fragment}>
            {({ selected }) => {
              const { icon: Icon = null } = typeof tab !== 'string' ? tab : {}
              return (
                <button
                  css={[
                    tw`w-full flex gap-2 justify-center items-center py-2.5 text-sm leading-5 rounded-lg text-textPrimary`,
                    tw`hover:bg-bgPrimary/5 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primaryTemp-400 ring-white ring-opacity-60`,
                    selected && [tw`bg-bgPrimary/5 shadow`, overrideTabSelectedButtonStyles],
                    overrideTabButtonStyles,
                  ]}
                >
                  {Icon && <span css={[overrideTabIconStyles]}>{Icon}</span>}
                  <Typography fontSize="small" css={[overrideTabLabelStyles]}>
                    {tabLabel}
                  </Typography>
                </button>
              )
            }}
          </Tab>
        )
      })}
    </Tab.List>
  )
}
