import tw from 'twin.macro'
import { Tab } from '@headlessui/react'
import { BaseCard } from '../../atoms'
import { TabType } from './tabList'
import { getItem } from '../../utils'

type Panel = {
  tab: TabType
  component: React.ReactNode
}

export type TabPanelsProps = {
  /**
   * The tabs to render.
   */
  panels: Panel[]
  overrideContainerStyles?: any
  overridePanelContainerStyles?: any
}

export const TabPanels: React.FC<TabPanelsProps> = ({
  panels,
  overrideContainerStyles,
  overridePanelContainerStyles,
}) => {
  return (
    <Tab.Panels css={[tw`mt-2`, overrideContainerStyles]}>
      {panels.map(({ tab, component }) => (
        <Tab.Panel
          key={getItem(tab, 'id') ?? getItem(tab, 'label')}
          as={BaseCard}
          centered={false}
          fullWidth={true}
          overrideStyles={[
            tw`w-full border-0 rounded-xl p-3`,
            tw`focus:outline-none focus:ring-2 ring-offset-2 ring-primaryTemp-400 ring-white ring-opacity-60`,
            overridePanelContainerStyles,
          ]}
        >
          {component}
        </Tab.Panel>
      ))}
    </Tab.Panels>
  )
}
