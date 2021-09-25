import React, { useEffect, useState } from 'react'
import { Modal, ModalProps } from '@forest-restoration/shared'

export const BaseModal: React.FC<ModalProps> = ({ children, title, ...modalProps }) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (isBrowser) {
    return (
      <Modal title={title} {...modalProps}>
        {children}
      </Modal>
    )
  } else {
    return null
  }
}
