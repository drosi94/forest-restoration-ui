import tw from 'twin.macro'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { getServerSideTranslations } from 'shared/utils/serverSideTranslations'
import { useAuthentication } from 'shared/providers/authentication'

import { CreateProfile } from './create'
import { Tab, TabList, TabPanels, TabType } from '@forest-restoration/shared'
import { MyProfile } from './myProfile'
import { EditProfile } from './edit'
import { PencilIcon, UserIcon } from '@heroicons/react/outline'

export default function Profile() {
  const { t } = useTranslation(['profile'])
  const { user } = useAuthentication()

  if (!user) {
    return null
  }

  if (user && !user.hasCompleteProfile) {
    return <CreateProfile />
  }

  const tabs: TabType[] = [
    { id: 'my_profile', label: t('profile:My profile'), icon: <UserIcon width={16} /> },
    { id: 'edit_profile', label: t('profile:Edit profile'), icon: <PencilIcon width={16} /> },
  ]

  const panels = [
    {
      tab: 'my_profile',
      component: <MyProfile user={user} />,
    },
    {
      tab: 'edit_profile',
      component: <EditProfile user={user} />,
    },
  ]

  return (
    <div tw="flex flex-col p-4 md:p-8">
      <Head>
        <title>{t('profile:Forest Restoration Create Profile')}</title>
      </Head>
      <Tab.Group>
        <TabList tabs={tabs} />
        <TabPanels panels={panels} />
      </Tab.Group>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await getServerSideTranslations(locale, ['profile'])),
    },
  }
}
