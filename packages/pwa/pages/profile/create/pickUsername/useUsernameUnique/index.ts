import { useCallback, useState } from 'react'
import { useTranslation } from 'next-i18next'
import debounce from 'lodash.debounce'

import { firestore } from '../../../../../firebase/clientApp'

export const useUsernameUnique = (regex: RegExp) => {
  const { t } = useTranslation(['profile'])

  const [isUsernameCheckLoading, setIsUsernameCheckLoading] = useState(false)
  const [usernameCheckError, setUsernameCheckError] = useState('')

  const isUsernameUnique = useCallback(
    debounce(async (value: string) => {
      if (!value) return true

      const username = value.toLowerCase()

      if (!regex.test(username)) {
        setUsernameCheckError('')
        return false
      }

      const ref = firestore.doc(`usernames/${username}`)

      try {
        setIsUsernameCheckLoading(true)
        const { exists } = await ref.get()

        if (exists) {
          setUsernameCheckError(t('is taken'))
          return false
        } else {
          setUsernameCheckError('')
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
    usernameCheckError,
    isUsernameUnique,
  }
}
