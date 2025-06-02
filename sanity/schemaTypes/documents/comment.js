import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
    }),
    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: 'Only approved comments are shown on the site.',
    }),
    defineField({
      name: 'post',
      title: 'Related Post',
      type: 'reference',
      to: [{ type: 'post' }],
    }),
  ],
})
