import React from 'react'
import tw from 'twin.macro'
import { Button, Typography } from '@forest-restoration/shared'

import { useAuthentication } from '../../providers/authentication'
import { AuthenticationLink } from '../modals/authentication/link'
import { useTranslation } from 'next-i18next'

export type AuthenticatedOnlyProps = {
  fallback?: React.ReactNode
  defaultText?: string
  children: React.ReactNode
}

const DefaultFallback = ({ defaultText, loginText }) => {
  // DONT USE HOOKS HERE
  return (
    <div tw="flex gap-2">
      <Typography variant="body">{defaultText}</Typography>
      <Typography variant="body">|</Typography>
      <AuthenticationLink passHref>
        <a>
          <Typography underlined color="primary" tw="hover:opacity-70">
            {loginText}
          </Typography>
        </a>
      </AuthenticationLink>
    </div>
  )
}

export const AuthenticatedOnly: React.FC<AuthenticatedOnlyProps> = ({
  fallback = DefaultFallback,
  defaultText,
  children,
}) => {
  const { t } = useTranslation('common')
  const { isAuthenticated } = useAuthentication()

  return !isAuthenticated
    ? typeof fallback === 'function'
      ? fallback({ defaultText: defaultText ?? t('You are not logged in'), loginText: t('login') })
      : fallback
    : typeof children === 'function'
    ? children()
    : children
}
