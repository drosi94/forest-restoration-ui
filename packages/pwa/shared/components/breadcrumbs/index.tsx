import React from 'react'
import tw from 'twin.macro'
import NSBreadcrumbs, { BreadcrumbsProps } from './lib'

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  return (
    <NSBreadcrumbs
      omitRootLabel
      transformLabel={(title) => title.replaceAll('-', ' ')}
      containerStyle={tw`p-2 text-sm`}
      listStyle={tw`flex gap-2`}
      inactiveItemStyle={tw`capitalize`}
      activeItemStyle={tw`text-primaryTemp-500`}
      {...props}
    />
  )
}
