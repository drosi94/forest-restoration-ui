import React from 'react'
import tw from 'twin.macro'
import { format as formatDate } from 'date-fns'
import Head from 'next/head'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { groq } from 'next-sanity'
import { useRouter } from 'next/router'
import { Typography } from '@forest-restoration/shared'

import { getClient, PortableText, usePreviewSubscription } from './lib/sanity'
import { Breadcrumbs } from '../../shared/components/breadcrumbs'
import { getServerSideTranslations } from '../../shared/utils/serverSideTranslations'

export default function Post({ data }) {
  const { locale } = useRouter()
  const { data: response } = usePreviewSubscription(query, {
    params: { slug: data.post.slug },
    initialData: data,
  })

  const {
    createdAt,
    title,
    title_el: titleEl,
    abstract,
    abstract_el: abstractEl,
    slug,
    body,
    body_el: bodyEl,
    mainImage,
  } = response.post

  const imageProps: any = useNextSanityImage(getClient(), mainImage)

  const postTitle = locale === 'el' ? titleEl : title
  const postAbstract = locale === 'el' ? abstractEl : abstract
  const postBody = locale === 'el' ? bodyEl : body

  return (
    <>
      <Head>
        <title>Forest Restoration: {postTitle}</title>
        <meta name="description" content={abstract} />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={postTitle} />
        <meta name="og:description" property="og:description" content="" />
        <meta property="og:image" content={imageProps?.src} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={postTitle} />
        <meta name="twitter:description" content={postAbstract} />
        <meta name="twitter:image" content={imageProps?.src} />
      </Head>
      <div tw="p-4 md:p-12 flex flex-col gap-4">
        <Breadcrumbs />
        <article tw="flex flex-col gap-4 items-center justify-center">
          <div tw="flex flex-col">
            <Typography as="h1" variant="heading" tw="text-4xl">
              {postTitle}
            </Typography>
            <div tw="text-center">
              <Typography italic>
                {formatDate(new Date(createdAt), 'yyyy-MM-dd HH:mm:ss')}
              </Typography>
            </div>
          </div>

          <Image {...imageProps} alt={postTitle} layout="intrinsic" width={600} height={400} />

          <div tw="flex flex-col gap-4 max-w-3xl">
            <Typography variant="body" color="primary">
              TL;DR
            </Typography>
            <Typography as="p" variant="body">
              {postAbstract}
            </Typography>
            <hr />
            <PortableText blocks={postBody}></PortableText>
          </div>
        </article>
      </div>
    </>
  )
}

const query = groq`
*[_type == "post" && slug.current == $slug][0]{
  title,
  title_el,
  mainImage{
    asset
  },
  body,
  body_el,
  abstract,
  abstract_el,
  "slug": slug.current,
  "createdAt": _createdAt
}
`

export async function getStaticProps({ locale, params }) {
  const slug = params.slug ?? ''

  if (!slug) {
    return {
      notFound: true,
    }
  }

  const post = await getClient().fetch(query, { slug })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      ...(await getServerSideTranslations(locale, ['blog'])),
      data: { post },
    },
  }
}

export async function getStaticPaths({ locales }) {
  let paths = []
  const slugs = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )
  slugs.forEach((slug) => locales.forEach((locale) => paths.push({ params: { slug }, locale })))

  return {
    paths,
    fallback: false,
  }
}
