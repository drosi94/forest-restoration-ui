import tw from 'twin.macro'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { toast } from 'react-hot-toast'
import {
  Button,
  Typography,
  Modal,
  Accordion,
  AccordionCard,
  BaseCard,
  TitledCard,
  Switch,
  Input,
  Select,
  Pill,
  Popover,
  TabList,
  Tab,
  TabPanels,
} from '@forest-restoration/shared'
import { useState } from 'react'
import { ToggleTheme } from '../../shared/components/toggleTheme'
import { BellIcon } from '@heroicons/react/solid'

const options = [
  { label: 'Test1', value: 'test1' },
  { label: 'Test2', value: 'test2' },
]

const tabs = [
  {
    id: '1',
    label: 'My Tab 1',
    icon: <BellIcon width={24} />,
  },
  {
    id: '2',
    label: 'Notifications',
    icon: <BellIcon width={24} />,
  },
  {
    id: '3',
    label: 'More',
    icon: <BellIcon width={24} />,
  },
]

export default function Home() {
  const { t } = useTranslation(['common', 'home'])
  const [open, setOpen] = useState(false)
  const [checked, setChecked] = useState(false)
  const [textValue, setTextValue] = useState('')
  const [selectValue, setSelectValue] = useState('')

  return (
    <div tw="h-full py-8">
      <div tw="flex justify-center items-center h-full flex-col gap-3">
        <ToggleTheme />

        <Button>{t('common:hello')}</Button>
        <Typography as="h1" variant="heading" tw="text-2xl">
          {t('home:test')}
        </Typography>
        <Button onClick={() => setOpen((v) => !v)}>{open ? 'close' : 'open'}</Button>
        <Modal
          isOpen={open}
          handleClose={() => setOpen(false)}
          title="A title"
          description="My descr"
        >
          <span>fef</span>
        </Modal>

        <div tw="w-96 max-w-xs">
          <Accordion title="Hello there" tw="w-2" isOpened>
            <Typography variant="body2" fontWeight="bold">
              Oh hey there
            </Typography>
          </Accordion>
        </div>

        <Button onClick={() => toast.success('Here is a toast')}>Show toast</Button>

        <BaseCard>
          <Accordion title="Hello there" tw="w-2" isOpened>
            <Typography variant="body2" fontWeight="bold">
              Oh hey there
            </Typography>
          </Accordion>
        </BaseCard>

        <TitledCard title="Lorem Ipsum Title">
          <Typography variant="body2">
            Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Donec rutrum
            congue leo eget malesuada. Proin eget tortor risus. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis
            quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien
            massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie
            malesuada. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci
            porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada
            feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
            Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec
            sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
            ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula
            elementumelementumelementumelementumelementumelementumelementumelementumelementumelementumelementumelementumelementumelementumelementumelementumelementumelementumelementumelementumelementumelementumelementumelementumelementumelementum
            sed sit amet dui.
          </Typography>
        </TitledCard>
        <AccordionCard title="Lorem Ipsum Title">
          <Typography variant="body2">
            Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Donec rutrum
            congue leo eget malesuada. Proin eget tortor risus. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis
            quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien
            massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie
            malesuada. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci
          </Typography>
        </AccordionCard>

        <Switch
          label="My Switch"
          labelPosition="top"
          checked={checked}
          onChange={() => setChecked((v) => !v)}
        />

        <div>
          <Input
            label="My text"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            id="text"
            name="text"
            multiline
            minRows={20}
          />
        </div>
        <Popover label="Here Popover" placement="bottom-start">
          <div>hey</div>
        </Popover>
        <div tw="w-full mb-20">
          <Select
            id="select"
            name="select"
            label="Select"
            value={selectValue}
            options={options}
            onChange={setSelectValue}
            noOptionText="No option"
            shouldResetOption
          />
        </div>
        <Pill textColor="textSecondary">Here I am</Pill>
        <div tw="mb-20 w-full">
          <Tab.Group>
            <TabList tabs={tabs} />
            <TabPanels
              panels={[
                {
                  tab: tabs[0].label,
                  component: <div>Tab 1</div>,
                },
                {
                  tab: tabs[1].label,
                  component: <div>Tab 2</div>,
                },
                {
                  tab: tabs[2].label,
                  component: <div>Tab 3</div>,
                },
              ]}
            />
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  }
}
