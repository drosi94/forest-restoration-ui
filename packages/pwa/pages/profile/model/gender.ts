import { TFunction } from 'next-i18next'

export const genders = (t: TFunction) => [
  {
    label: t('profile:Male'),
    value: 'M',
  },
  {
    label: t('profile:Female'),
    value: 'F',
  },
  {
    label: t('profile:Other'),
    value: 'O',
  },
]
