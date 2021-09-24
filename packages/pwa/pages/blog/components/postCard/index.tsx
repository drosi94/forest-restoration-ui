import React from 'react'
import 'twin.macro'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { useRouter } from 'next/router'
import { AnimatedCard, Typography } from '@forest-restoration/shared'

import { getClient } from '../../lib/sanity'

export const PostCard = ({ post }) => {
  const imageProps = useNextSanityImage(getClient(false), post.mainImage)
  const router = useRouter()

  const handlePostClick = (e) => {
    e.preventDefault()
    router.push('blog/' + post.slug.current)
  }

  return (
    <AnimatedCard onClick={handlePostClick} whileHover={{ scale: 1.1 }}>
      <div tw="-m-4">
        <Image {...imageProps} alt={post.title} />
      </div>
      <div tw="flex flex-col mt-4 gap-2">
        <Typography
          as="h3"
          variant="heading"
          tw="text-lg overflow-ellipsis overflow-hidden line-clamp-2"
        >
          {post.title}
        </Typography>
        <Typography as="p" variant="body" tw="overflow-ellipsis overflow-hidden line-clamp-4">
          {post.abstract}
        </Typography>
      </div>
    </AnimatedCard>
  )
}
