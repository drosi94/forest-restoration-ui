import { useCallback, useState } from 'react'
import { useTranslation } from 'next-i18next'
import debounce from 'lodash.debounce'

import { firestore } from '../../../../../firebase/clientApp'
import { useFormContext } from 'react-hook-form'

export const useUsernameUnique = (regex: RegExp) => {
  const { t } = useTranslation(['profile'])

  const { setError, clearErrors } = useFormContext()

  const [isUsernameCheckLoading, setIsUsernameCheckLoading] = useState(false)

  const isUsernameUnique = useCallback(
    debounce(async (value: string) => {
      clearErrors('username')

      if (!value) return true

      const username = value.toLowerCase()

      if (!regex.test(username)) {
        return false
      }

      const ref = firestore.doc(`usernames/${username}`)

      try {
        setIsUsernameCheckLoading(true)
        const { exists } = await ref.get()

        if (exists) {
          setError('username', { type: 'validate', message: t('profile:is taken') })

          return false
        } else {
          return true
        }
      } catch (err) {
        console.error(err)
        return true
      } finally {
        setIsUsernameCheckLoading(false)
      }
    }, 500),
    []
  )

  return {
    isUsernameCheckLoading,
    isUsernameUnique,
  }
}
