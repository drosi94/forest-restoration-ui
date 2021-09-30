import tw, { styled } from 'twin.macro'
import { format as formatDate } from 'date-fns'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import { Typography } from '@forest-restoration/shared'
import { genders } from 'pages/profile/model/gender'

const Label = styled.div(() => [tw`flex gap-2 items-center`])

export const Preview = () => {
  const { t } = useTranslation(['profile'])

  const { getValues } = useFormContext()

  const genderList = genders(t)

  return (
    <div tw="flex flex-col flex-1 gap-4">
      <Label>
        <Typography fontWeight="600">{t('profile:Username')}:</Typography>
        <Typography>{getValues('username')}</Typography>
      </Label>
      <Label>
        <Typography fontWeight="600">{t('profile:Display name')}:</Typography>
        <Typography>{getValues('displayName')}</Typography>
      </Label>
      <Label>
        <Typography fontWeight="600">{t('profile:Gender')}:</Typography>
        <Typography>
          {genderList.find((gender) => gender.value === getValues('gender'))?.label ??
            t('profile:Prefer not to say')}
        </Typography>
      </Label>
      <Label>
        <Typography fontWeight="600">{t('profile:Birth date')}:</Typography>
        <Typography>
          {getValues('birthDate')
            ? formatDate(new Date(getValues('birthDate')), 'dd/MM/yyyy')
            : '-'}
        </Typography>
      </Label>
    </div>
  )
}
