import React from 'react'
import Link, { LinkProps } from 'next/link'
import { useContextualRouting } from 'next-use-contextual-routing'
import { useRouter } from 'next/router'

export const AuthenticationLink: React.FC<Omit<LinkProps, 'href'>> = ({
  children,
  ...linkProps
}) => {
  const { makeContextualHref } = useContextualRouting()
  const { asPath } = useRouter()

  return (
    <Link
      href={makeContextualHref({ authentication: true })}
      as={`/authentication?previous=${asPath}`}
      {...linkProps}
    >
      {children}
    </Link>
  )
}
