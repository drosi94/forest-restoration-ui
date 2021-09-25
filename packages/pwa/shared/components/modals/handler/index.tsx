import { useRouter } from 'next/router'
import React from 'react'

import { AuthenticationModal } from '../authentication'

export const ModalHandler = () => {
  const router = useRouter()

  const query = router.query

  const previous = query?.previous as string

  return (
    <AuthenticationModal
      isOpen={!!query.authentication}
      onClose={() => (previous ? router.replace(previous) : router.back())}
    />
  )
}
