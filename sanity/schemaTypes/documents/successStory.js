import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'successStory',
  title: 'Success Story',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Client Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
      ],
    }),
  ],
})