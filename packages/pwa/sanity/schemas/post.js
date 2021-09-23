// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title English',
      type: 'string',
      description: 'Provide the english title'
    },
    {
      name: 'title_el',
      title: 'Title Greek',
      type: 'string',
      description: 'Provide the greek title'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'abstract',
      title: 'Abstract English',
      type: 'text',
      description: 'Provide an abstract in english'
    },
    {
      name: 'abstract_el',
      title: 'Abstract Greek',
      type: 'text',
      description: 'Provide an abstract in greek'
    },
    {
      name: 'body',
      title: 'Body English',
      type: 'blockContent',
      description: 'Provide the english body'
    },
    {
      name: 'body_el',
      title: 'Body Greek',
      type: 'blockContent',
      description: 'Provide the greek body'

    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
