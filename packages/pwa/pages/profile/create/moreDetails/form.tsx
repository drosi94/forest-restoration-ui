import 'twin.macro'
import { useTranslation } from 'next-i18next'

import { ControlledInput, ControlledRadioGroup } from 'shared/components/form'
import { genders } from 'pages/profile/model/gender'

export const MoreDetailsForm = ({ control }) => {
  const { t } = useTranslation(['profile'])

  return (
    <>
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
      <ControlledRadioGroup
        name="gender"
        control={control}
        label={t('profile:Gender')}
        items={genders(t)}
      />
      <ControlledInput
        type="date"
        name="birthDate"
        control={control}
        label={t('profile:Birth date')}
      />
    </>
  )
}
