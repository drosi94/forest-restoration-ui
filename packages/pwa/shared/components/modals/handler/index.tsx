import { useRouter } from 'next/router'
import React from 'react'
import { useAuthentication } from 'shared/providers/authentication'

import { AuthenticationModal } from '../authentication'

export const ModalHandler = () => {
  const router = useRouter()

  const { user } = useAuthentication()

  const query = router.query

  const previous = query?.previous as string

  return (
    <AuthenticationModal
      isOpen={!!query.authentication}
      onClose={() => {
        if (user && !user.hasCompleteProfile) {
          router.push('/profile')
        } else {
          previous ? router.replace(previous) : router.back()
        }
      }}
    />
  )
}
