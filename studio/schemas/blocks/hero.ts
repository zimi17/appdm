import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
    }),
    defineField({
        name: 'image',
        title: 'Background Image',
        type: 'image',
        options: {
            hotspot: true,
        },
        fields: [
            {
              name: 'hint',
              title: 'Petunjuk Gambar (Hint)',
              type: 'string',
              description: 'Deskripsi singkat untuk gambar, cth: "students library"',
            }
        ],
        validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Hero Section',
        subtitle: 'Hero Section',
        media,
      };
    },
  },
})
