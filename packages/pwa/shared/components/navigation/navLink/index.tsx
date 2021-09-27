import React from 'react'
import tw from 'twin.macro'
import Link, { LinkProps } from 'next/link'

import { Typography } from '../../../../../shared'
import { useRouter } from 'next/router'

type NavLinkProps = LinkProps & {
  title: string
  exact?: boolean
  icon?: React.ReactNode
}

export const NavLink: React.FC<NavLinkProps> = ({ title, href, exact, icon, ...linkProps }) => {
  const { asPath } = useRouter()

  const hrefString = typeof href === 'string' ? href : href.href

  const isActive = exact ? asPath === hrefString : asPath.includes(hrefString)

  return (
    <li>
      <Link href={href} passHref {...linkProps}>
        <a
          css={[
            tw`flex gap-2 uppercase text-textPrimary hover:opacity-70`,
            isActive && tw`text-primary-500`,
          ]}
        >
          {icon}
          <Typography fontFamily="notoSerif" tw="text-current">
            {title}
          </Typography>
        </a>
      </Link>
    </li>
  )
}
