import React from 'react'
import 'twin.macro'
import Head from 'next/head'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { groq } from 'next-sanity'
import { Typography } from '@forest-restoration/shared'
import { getClient, PortableText, usePreviewSubscription } from './lib/sanity'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

export default function Post({ data }) {
  const { locale } = useRouter()
  const { data: response } = usePreviewSubscription(query, {
    params: { slug: data.post.slug },
    initialData: data,
  })

  const {
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
        <title>{postTitle}</title>
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
      <article tw="p-8 md:p-24 flex flex-col gap-4 items-center justify-center">
        <Image {...imageProps} alt={postTitle} layout="intrinsic" width={600} height={400} />

        <Typography as="h1" variant="heading" tw="text-4xl">
          {postTitle}
        </Typography>

        <PortableText blocks={postBody}></PortableText>
      </article>
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
  "slug": slug.current
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
      ...(await serverSideTranslations(locale, ['common', 'blog'])),
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
