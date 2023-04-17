import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        // The "of"-property must be set, and it must be an array
        {
          type: 'object', // type is required
          title: 'Project',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'url', type: 'string', title: 'URL'},
          ],
        },
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
