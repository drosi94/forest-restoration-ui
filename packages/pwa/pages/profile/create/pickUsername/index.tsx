import tw from 'twin.macro'
import { useCallback, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useFormContext } from 'react-hook-form'
import debounce from 'lodash.debounce'
import { Typography } from '@forest-restoration/shared'

import { ControlledInput } from '../../../../shared/components/form'
import { firestore } from '../../../../firebase/clientApp'
import { useUsernameUnique } from './useUsernameUnique'

const USERNAME_REGEX = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/

const UsernameHint = ({ showLoading }) => {
  const { t } = useTranslation(['profile'])

  return (
    <>
      {showLoading && t('profile:checking...')}

      <div tw="p-4">
        <ul tw="list-disc">
          <li>At least 3 characters</li>
          <li>Maximum 15 characters</li>
          <li>
            Does not contain special characters. Only '<kbd>.</kbd>' and '<kbd>_</kbd>' are valid
          </li>
          <li>Does not contain spaces</li>
        </ul>
      </div>
    </>
  )
}

export const PickUsername = () => {
  const { t } = useTranslation(['profile'])

  const {
    control,
    formState: { errors },
  } = useFormContext()

  const { isUsernameCheckLoading, usernameCheckError, isUsernameUnique } =
    useUsernameUnique(USERNAME_REGEX)

  return (
    <div tw="flex flex-col flex-1 gap-8">
      <Typography>
        Pick a unique username to use in the application. It will be visible by the other users.
      </Typography>

      <ControlledInput
        required
        name="username"
        control={control}
        label={t('Choose username')}
        hint={<UsernameHint showLoading={isUsernameCheckLoading} />}
        error={
          !isUsernameCheckLoading ? usernameCheckError || errors?.username?.message : undefined
        }
        rules={{
          required: { value: true, message: t('profile:Username is required') },
          minLength: { value: 3, message: t('profile:Username is too short') },
          maxLength: { value: 15, message: t('profile:Username is too big') },
          pattern: {
            value: USERNAME_REGEX,
            message: t('profile:Username contains invalid characters'),
          },
          validate: isUsernameUnique,
        }}
      />
    </div>
  )
}
