import React from 'react'
import 'twin.macro'
import { useTranslation } from 'next-i18next'
import { groq } from 'next-sanity'
import { useRouter } from 'next/router'

import { getClient, usePreviewSubscription } from './lib/sanity'
import { PostCard } from './components/postCard'
import { getServerSideTranslations } from '../../shared/utils/serverSideTranslations'

export default function Blog({ initialPosts, preview }) {
  const router = useRouter()
  const { t } = useTranslation('blog')

  const { data: posts } = usePreviewSubscription(query, {
    initialData: initialPosts,
    enabled: preview || router.query.preview !== undefined,
  })

  const renderPost = (post) => {
    const { title, title_el: titleEl, abstract, abstract_el: abstractEl, mainImage, slug } = post

    const postTitle = router.locale === 'el' ? titleEl : title
    const postAbstract = router.locale === 'el' ? abstractEl : abstract

    return (
      <div key={slug.current} tw="w-full h-full">
        <PostCard
          post={{
            title: postTitle,
            abstract: postAbstract,
            mainImage,
            slug,
          }}
        />
      </div>
    )
  }

  return (
    <div tw="grid content-center grid-cols-1 auto-rows-max md:auto-rows-min gap-x-6 gap-y-4 p-16 md:p-28 md:grid-cols-3">
      {posts?.map((post: any) => renderPost(post))}
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
      ...await getServerSideTranslations(locale, ['blog']),
      initialPosts: post,
      preview,
    },
  }
}
