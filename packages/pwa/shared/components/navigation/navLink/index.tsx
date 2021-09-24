import React from 'react'
import tw, { css } from 'twin.macro'
import Link, { LinkProps } from 'next/link'

import { Typography } from '../../../../../shared'
import { useRouter } from 'next/router'

type NavLinkProps = LinkProps & {
  title: string
  exact?: boolean
}

export const NavLink: React.FC<NavLinkProps> = ({ title, href, exact, ...linkProps }) => {
  const { asPath } = useRouter()

  const hrefString = typeof href === 'string' ? href : href.href

  const isActive = exact ? asPath === hrefString : asPath.includes(hrefString)

  return (
    <Link href={href} {...linkProps}>
      <a>
        <Typography css={[tw`hover:opacity-70`, isActive && tw`text-primary-500`]}>
          {title}
        </Typography>
      </a>
    </Link>
  )
}
