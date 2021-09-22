import React from 'react'
import tw from 'twin.macro'
import { useTranslation } from 'next-i18next'
import { groq } from 'next-sanity'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Typography } from '@forest-restoration/shared'
import { getClient, usePreviewSubscription } from './lib/sanity'
import { PostBody } from './components/postBody'

export default function Blog({ initialPosts, preview }) {
  const router = useRouter()
  const { t } = useTranslation('blog')

  const { data: posts } = usePreviewSubscription(query, {
    initialData: initialPosts,
    enabled: preview || router.query.preview !== undefined,
  })

  return (
    <div>
      {posts?.map(
        (post: any) =>
          (
            <article key={post._id}>
              <Typography as="h3" variant="heading" tw="text-lg">
                {post.title}
              </Typography>
              <hr />
              <PostBody body={post.body} />
            </article>
          ) ?? <></>
      )}
    </div>
  )
}

const query = groq`
                *[_type == "post"] | order(_createdAt desc){
                  _id,
                  title,
                  slug,
                  mainImage{
                    asset->{
                      url
                    }
                  },
                  body
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
    revalidate: 10,
  }
}
