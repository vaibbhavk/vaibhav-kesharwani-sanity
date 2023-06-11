import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    // {
    //   name: "Milo",
    //   desc: "Create your daily milestones and mark them as done.",
    //   logo: "/milo.jpeg",
    //   url: "https://milo-five.vercel.app/",
    //   github: "https://github.com/vaibbhavk/milo",
    //   tech: ["React", "Firebase", "MUI"],
    //   doc: "https://........................."
    // },

    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
    }),
    defineField({
      name: 'github',
      title: 'GitHub',
      type: 'string',
    }),
    defineField({
      name: 'doc',
      title: 'Documentation',
      type: 'string',
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
