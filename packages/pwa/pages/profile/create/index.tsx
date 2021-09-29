import tw from 'twin.macro'
import { useCallback, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { FormProvider, useForm } from 'react-hook-form'
import debounce from 'lodash.debounce'
import { UserIcon, InformationCircleIcon, ViewListIcon } from '@heroicons/react/outline'
import { BaseCard, Button, FormStepper, Typography } from '@forest-restoration/shared'

import { PickUsername } from './pickUsername'

export const CreateProfile = () => {
  const { t } = useTranslation(['profile'])

  const methods = useForm<any>({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
    defaultValues: {
      username: '',
    },
  })

  const {
    control,
    formState: { isValid, errors },
  } = methods

  const steps = [
    {
      id: 'username',
      label: t('Pick a username'),
      icon: <UserIcon width={24} />,
      enabled: true,
    },
    {
      id: 'more_details',
      label: t('More details'),
      icon: <InformationCircleIcon width={24} />,
      enabled: true,
    },
    {
      id: 'preview',
      label: t('Preview'),
      icon: <ViewListIcon width={24} />,
      enabled: false,
    },
  ]

  const [currentStep, setCurrentStep] = useState<string>(steps[0].id)

  return (
    <div tw="flex flex-col flex-1  gap-6 p-4 md:p-8">
      <Typography as="h1" variant="heading">
        {t('profile:Create profile')}
      </Typography>
      <FormStepper
        steps={steps}
        selectedStepId={currentStep}
        onStepChange={(newStepId) => {
          setCurrentStep(newStepId)
        }}
      />
      <BaseCard fullWidth overrideStyles={tw`mt-12 p-12 items-center`}>
        <FormProvider {...methods}>
          <form>
            <div tw="flex flex-col">
              {currentStep === 'username' && <PickUsername />}
              {/* @ts-ignore */}
              <Button type={currentStep !== 'preview' ? 'button' : 'submit'} tw="flex-1" fullWidth>
                {/* @ts-ignore */}
                {currentStep !== 'preview' ? t('profile:Next') : t('profile:Create profile')}
              </Button>
            </div>
          </form>
        </FormProvider>
      </BaseCard>
    </div>
  )
}
