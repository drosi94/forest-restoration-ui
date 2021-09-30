import tw from 'twin.macro'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { FormProvider, useForm } from 'react-hook-form'
import { useKey } from 'react-use'
import { UserIcon, InformationCircleIcon, ViewListIcon } from '@heroicons/react/outline'
import { BaseCard, Button, FormStepper, Typography } from '@forest-restoration/shared'

import { PickUsername } from './pickUsername'
import { MoreDetails } from './moreDetails'
import { Preview } from './preview'

type Step = 'username' | 'more_details' | 'preview'

export const CreateProfile = () => {
  const { t } = useTranslation(['common', 'profile'])

  const methods = useForm<any>({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
    defaultValues: {
      username: '',
      displayName: '',
      gender: null,
      birthDate: null,
    },
  })

  const {
    control,
    formState: { isValid, errors, touchedFields },
    handleSubmit,
  } = methods

  const isUsernameStepCompleted = touchedFields.username && !errors.username
  const isMoreDetailsStepCompleted =
    touchedFields.displayName && !errors.displayName && !errors.gender && !errors.birthDate

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
      <BaseCard fullWidth overrideStyles={tw`mt-12 p-12 items-center`}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(() => {})}>
            <div tw="flex flex-col">
              {currentStep === 'username' && (
                <div tw="flex flex-col gap-6">
                  <PickUsername />
                  <div tw="self-center">
                    <Button
                      onClick={
                        isUsernameStepCompleted ? () => setCurrentStep('more_details') : undefined
                      }
                    >
                      {t('common:Next')}
                    </Button>
                  </div>
                </div>
              )}
              {currentStep === 'more_details' && (
                <div tw="flex flex-col gap-6">
                  <MoreDetails />
                  <div tw="self-center">
                    <Button
                      onClick={
                        isMoreDetailsStepCompleted ? () => setCurrentStep('preview') : undefined
                      }
                    >
                      {t('common:Next')}
                    </Button>
                  </div>
                </div>
              )}
              {currentStep === 'preview' && (
                <div tw="flex flex-col gap-6">
                  <Preview />
                  <div tw="self-center">
                    <Button type="submit">{t('profile:Create your profile')}</Button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </FormProvider>
      </BaseCard>
    </div>
  )
}
