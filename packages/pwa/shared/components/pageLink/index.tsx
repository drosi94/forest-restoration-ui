import Link from 'next/link'

export const PageLink = ({ href, children, ...rest }) => {
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}
