import React from 'react'
import 'twin.macro'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { useRouter } from 'next/router'
import { BaseCard, Typography } from '@forest-restoration/shared'

import { getClient } from '../../lib/sanity'

export const PostCard = ({ post }) => {
  const imageProps = useNextSanityImage(getClient(false), post.mainImage)
  const router = useRouter()
  console.log(post.slug.current)

  const handlePostClick = (e) => {
    e.preventDefault()
    router.push('blog/' + post.slug.current)
  }

  return (
    <BaseCard onClick={handlePostClick}>
      <div tw="-m-4">
        <Image {...imageProps} alt={post.title} />
      </div>
      <div tw="flex flex-col mt-4 gap-2">
        <Typography
          as="h3"
          variant="heading"
          tw="text-lg overflow-ellipsis overflow-hidden line-clamp-2"
        >
          {post.title_el}
        </Typography>
        <Typography as="p" variant="body">
          {post.abstract_el}
        </Typography>
      </div>
    </BaseCard>
  )
}
