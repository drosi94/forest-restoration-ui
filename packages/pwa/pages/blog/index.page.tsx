import React from 'react'
import 'twin.macro'
import { useTranslation } from 'next-i18next'
import { groq } from 'next-sanity'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { getClient, usePreviewSubscription } from './lib/sanity'
import { PostCard } from './components/postCard'

export default function Blog({ initialPosts, preview }) {
  const router = useRouter()
  const { t } = useTranslation('blog')

  const { data: posts } = usePreviewSubscription(query, {
    initialData: initialPosts,
    enabled: preview || router.query.preview !== undefined,
  })

  return (
    <div tw="grid content-center justify-center grid-cols-1 auto-rows-max md:auto-rows-min gap-x-2 gap-y-4 p-16 md:p-28 md:grid-cols-3">
      {posts?.map((post: any) => (
        <div key={post.slug.current} tw="w-full h-full">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

const query = groq`
                *[_type == "post"] | order(_createdAt asc){
                  title,
                  title_el,
                  abstract,
                  abstract_el,
                  slug{
                    current
                  },
                  mainImage{
                    asset
                  }
                }
              `

export async function getStaticProps({ locale, preview = false }) {
  const post = await getClient(preview).fetch(query)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'blog'])),
      initialPosts: post,
      preview,
    },
  }
}
