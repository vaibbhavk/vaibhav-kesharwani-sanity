import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
    }),
    defineField({
      name: 'done',
      title: 'Done',
      type: 'array',
      of: [
        // The "of"-property must be set, and it must be an array
        {
          type: 'string', // type is required
          title: 'Tasks',
        },
      ],
    }),
    defineField({
      name: 'tech',
      title: 'Tech',
      type: 'array',
      of: [
        // The "of"-property must be set, and it must be an array
        {
          type: 'string', // type is required
          title: 'Skill',
        },
      ],
    }),
  ],
})
