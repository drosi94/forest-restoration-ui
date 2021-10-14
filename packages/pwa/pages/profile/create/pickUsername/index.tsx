import 'twin.macro'
import { useTranslation, Trans } from 'next-i18next'
import { useFormContext } from 'react-hook-form'
import { Typography } from '@forest-restoration/shared'

import { ControlledInput } from 'shared/components/form'
import { useUsernameUnique } from './useUsernameUnique'

const USERNAME_REGEX = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/

const UsernameHint = ({ showLoading }) => {
  const { t } = useTranslation(['profile'])

  return (
    <>
      {showLoading && t('profile:checking...')}

      <div tw="p-4">
        <ul tw="list-disc">
          <li>{t('profile:At least 3 and maximum 15 characters')}</li>
          <li>{t('profile:Spaces are not valid')}</li>
          <li>
            <Trans i18nKey="profile:Only . and _ are valid characters">
              Only <kbd tw="kbd kbd-sm bg-base-300">.</kbd> and{' '}
              <kbd tw="kbd kbd-sm bg-base-300">_</kbd> are valid characters
            </Trans>
          </li>
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

  const { isUsernameCheckLoading, isUsernameUnique } = useUsernameUnique(USERNAME_REGEX)

  return (
    <div tw="flex flex-col flex-1 gap-8">
      <Typography>
        {t(
          'profile:Pick a unique username to use in the application. It will be visible by the other users.'
        )}
      </Typography>

      <ControlledInput
        required
        name="username"
        control={control}
        label={t('profile:Choose username')}
        hint={<UsernameHint showLoading={isUsernameCheckLoading} />}
        error={errors?.username?.message}
        rules={{
          required: { value: true, message: t('profile:Username is required') },
          minLength: { value: 3, message: t('profile:Username is too short') },
          maxLength: { value: 15, message: t('profile:Username is too long') },
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
