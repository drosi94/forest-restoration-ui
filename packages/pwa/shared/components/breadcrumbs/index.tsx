import React from 'react'
import tw from 'twin.macro'
import NSBreadcrumbs, { BreadcrumbsProps } from './lib'

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  return (
    <NSBreadcrumbs
      omitRootLabel
      transformLabel={(title) => title.replaceAll('-', ' ')}
      {...props}
    />
  )
}
