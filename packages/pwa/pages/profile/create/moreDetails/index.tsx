import 'twin.macro'
import { useTranslation } from 'next-i18next'
import { useFormContext } from 'react-hook-form'
import { Typography } from '@forest-restoration/shared'

import { MoreDetailsForm } from './form'

export const MoreDetails = () => {
  const { t } = useTranslation(['profile'])

  const { control } = useFormContext()

  return (
    <div tw="flex flex-col flex-1 gap-8">
      <Typography>
        {t('profile:Add your details here for a more personalized experience.')}
      </Typography>
      <div tw="flex flex-col flex-1 gap-10">
        <MoreDetailsForm control={control} />
      </div>
    </div>
  )
}
