import React from 'react'
import tw, { theme } from 'twin.macro'
import { motion } from 'framer-motion'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

import { Typography } from '../../../../../shared'

type NavLinkProps = LinkProps & {
  title: string
  exact?: boolean
  disabled?: boolean
  icon?: React.ReactNode
}

export const NavLink: React.FC<NavLinkProps> = ({ title, href, exact, icon, ...linkProps }) => {
  const { asPath } = useRouter()

  const hrefString = typeof href === 'string' ? href : href.href

  const isActive = exact ? asPath === hrefString : asPath.includes(hrefString)

  return (
    <motion.li animate whileHover={{ scale: 0.9 }}>
      <Link href={href} passHref {...linkProps}>
        <a css={[tw`flex gap-2 uppercase text-base-content`, isActive && tw`text-primary`]}>
          {icon}
          <Typography fontFamily="notoSerif" tw="relative text-current" fontSize="small">
            {title}
            {isActive && (
              <motion.div
                tw="w-full h-1 rounded absolute -bottom-1 md:-bottom-2"
                layoutId="underline"
                style={{ backgroundColor: theme`colors.primary` }}
              />
            )}
          </Typography>
        </a>
      </Link>
    </motion.li>
  )
}
