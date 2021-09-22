import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { serializers } from '../../lib/sanity'
import { config } from '../../lib/config'

export const PostBody = ({ body }) => {
  return (
    <BlockContent
      blocks={body}
      projectId={config.projectId}
      dataset={config.projectId}
      serializers={serializers}
    />
  )
}
