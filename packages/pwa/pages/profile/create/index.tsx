import { useState } from 'react'
import tw from 'twin.macro'
import { useTranslation } from 'next-i18next'
import { FormProvider, useForm } from 'react-hook-form'
import { useKey } from 'react-use'
import { UserIcon, InformationCircleIcon, ViewListIcon } from '@heroicons/react/outline'
import { BaseCard, Button, FormStepper, Typography } from '@forest-restoration/shared'

import { PickUsername } from './pickUsername'
import { MoreDetails } from './moreDetails'
import { Preview } from './preview'
import { useAuthentication } from 'shared/providers/authentication'
import { firestore } from 'firebase/clientApp'
import toast from 'react-hot-toast'

type Step = 'username' | 'more_details' | 'preview'

export const CreateProfile = () => {
  const { t } = useTranslation(['common', 'profile'])

  const { user, loading } = useAuthentication()

  const [isProfileCreating, setIsProfileCreating] = useState(false)
  const [currentStep, setCurrentStep] = useState<Step>('username')
  useKey('Enter', () => {
    isUsernameStepCompleted &&
      !isMoreDetailsStepCompleted &&
      currentStep === 'username' &&
      setCurrentStep('more_details')
    isUsernameStepCompleted &&
      isMoreDetailsStepCompleted &&
      currentStep === 'more_details' &&
      setCurrentStep('preview')
  })

  const methods = useForm<any>({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
    defaultValues: {
      username: '',
      displayName: '',
      gender: null,
      birthDate: null,
      photoURL: user?.photoURL,
    },
  })

  if (loading) return null

  const {
    formState: { isValid, errors, dirtyFields },
    handleSubmit,
  } = methods

  const isUsernameStepCompleted = dirtyFields.username && !errors.username
  const isMoreDetailsStepCompleted =
    dirtyFields.displayName && !errors.displayName && !errors.gender && !errors.birthDate

  const steps = [
    {
      id: 'username',
      label: t('profile:Pick a username'),
      icon: <UserIcon width={24} />,
      enabled: true,
    },
    {
      id: 'more_details',
      label: t('profile:More details'),
      icon: <InformationCircleIcon width={24} />,
      enabled: isUsernameStepCompleted,
    },
    {
      id: 'preview',
      label: t('profile:Preview'),
      icon: <ViewListIcon width={24} />,
      enabled: isUsernameStepCompleted && isMoreDetailsStepCompleted,
    },
  ]

  const handleCreateProfile = handleSubmit(async ({ username, birthDate, gender, displayName }) => {
    try {
      // Create refs for both documents
      const userDoc = firestore.doc(`users/${user.uid}`)
      const usernameDoc = firestore.doc(`usernames/${username}`)

      // Commit both docs together as a batch write.
      const batch = firestore.batch()
      batch.update(userDoc, { username, birthDate, gender, displayName, hasCompleteProfile: true })
      batch.set(usernameDoc, { uid: user.uid })

      setIsProfileCreating(true)
      await batch.commit()

      toast.success(t('profile:Your profile created successfully!'))
    } catch (err) {
      console.error(err)
      toast.error(t('profile:An error occurred with the creation of your profile'))
      throw err
    } finally {
      setIsProfileCreating(false)
    }
  })

  return (
    <div tw="flex flex-col flex-1  gap-6 p-4 md:p-8">
      <Typography as="h1" variant="heading">
        {t('profile:Create profile')}
      </Typography>
      <FormStepper
        steps={steps}
        selectedStepId={currentStep}
        onStepChange={(newStepId: Step) => {
          setCurrentStep(newStepId)
        }}
      />
      <BaseCard
        fullWidth
        overrideStyles={tw`mt-12 p-12 items-center max-w-sm md:max-w-2xl md:min-w-72`}
      >
        <FormProvider {...methods}>
          <form onSubmit={handleCreateProfile}>
            <div tw="flex flex-col">
              <div css={[tw`flex flex-col gap-6`, currentStep !== 'username' && tw`hidden`]}>
                <PickUsername />
                <div tw="self-center">
                  <Button
                    type="button"
                    wide
                    onClick={
                      isUsernameStepCompleted ? () => setCurrentStep('more_details') : undefined
                    }
                  >
                    {t('common:Next')}
                  </Button>
                </div>
              </div>

              <div css={[tw`flex flex-col gap-6`, currentStep !== 'more_details' && tw`hidden`]}>
                <MoreDetails />
                <div tw="self-center">
                  <Button
                    type="button"
                    wide
                    onClick={
                      isMoreDetailsStepCompleted ? () => setCurrentStep('preview') : undefined
                    }
                  >
                    {t('common:Next')}
                  </Button>
                </div>
              </div>
              <div
                css={[
                  tw`flex flex-col justify-around gap-6`,
                  currentStep !== 'preview' && tw`hidden`,
                ]}
              >
                {currentStep === 'preview' && <Preview />}
                <div tw="self-center">
                  <Button wide type="submit" disabled={isProfileCreating || !isValid}>
                    {t('profile:Create your profile')}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      </BaseCard>
    </div>
  )
}
