import 'twin.macro'
import { isValid as isDateValid } from 'date-fns'
import { useTranslation } from 'next-i18next'
import { useFormContext } from 'react-hook-form'

import { ControlledInput, ControlledSelect } from 'shared/components/form'
import { Typography } from '@forest-restoration/shared'
import { genders } from 'pages/profile/model/gender'

export const MoreDetails = () => {
  const { t } = useTranslation(['profile'])

  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div tw="flex flex-col flex-1 gap-8">
      <Typography>
        {t('profile:Add your details here for a more personalized experience.')}
      </Typography>
      <div tw="flex flex-col flex-1 gap-10">
        <ControlledInput
          required
          name="displayName"
          control={control}
          label={t('profile:Display name')}
          rules={{
            required: { value: true, message: t('profile:Display name is required') },
            minLength: { value: 3, message: t('profile:Display name is too short') },
            maxLength: { value: 30, message: t('profile:Display name is too long') },
          }}
        />
        <ControlledSelect
          name="gender"
          control={control}
          label={t('profile:Gender')}
          noOptionText={t('profile:Prefer not to say')}
          shouldResetOption
          options={genders(t)}
        />
        <ControlledInput
          type="date"
          name="birthDate"
          control={control}
          label={t('profile:Birth date')}
        />
      </div>
    </div>
  )
}
