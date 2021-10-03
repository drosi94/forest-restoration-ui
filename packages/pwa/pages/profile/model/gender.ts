import { TFunction } from 'next-i18next'

export const genders = (t: TFunction) => [
  {
    label: t('profile:Male'),
    id: 'M',
  },
  {
    label: t('profile:Female'),
    id: 'F',
  },
  {
    label: t('profile:Prefer not to say'),
    id: 'O',
  },
]
