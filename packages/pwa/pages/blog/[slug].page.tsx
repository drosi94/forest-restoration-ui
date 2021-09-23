import React from 'react'
import 'twin.macro'
import Head from 'next/head'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { groq } from 'next-sanity'
import { Typography } from '@forest-restoration/shared'
import { getClient, PortableText, usePreviewSubscription } from './lib/sanity'

export default function Post({ data }) {
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

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={abstract} />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={title} />
        <meta name="og:description" property="og:description" content="" />
        <meta property="og:image" content={imageProps?.src} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={abstract} />
        <meta name="twitter:image" content={imageProps?.src} />
      </Head>
      <article tw="p-8 md:p-24 flex flex-col gap-4 items-center justify-center">
        <Image {...imageProps} alt={title} layout="intrinsic" width={600} height={400} />

        <Typography as="h1" variant="heading" tw="text-4xl">
          {title}
        </Typography>

        <PortableText blocks={body}></PortableText>
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

export async function getStaticProps({ params }) {
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
      data: { post },
    },
  }
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}
