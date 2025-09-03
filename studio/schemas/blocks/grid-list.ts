import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gridList',
  title: 'Grid List',
  type: 'object',
  description: 'Displays multiple items in a visual grid layout.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'gridType',
      title: 'Grid Type',
      type: 'string',
      options: {
        list: [
          {title: 'Small Grid List', value: 'small'},
          {title: 'Big Grid List', value: 'big'},
        ],
      },
      initialValue: 'small',
    }),
    defineField({
      name: 'items',
      title: 'Grid Items',
      type: 'array',
      of: [
        {
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
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              hidden: ({parent}) => parent?.gridType === 'small',
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                  description: 'Important for accessibility and SEO.',
                },
              ],
            }),
            defineField({
              name: 'linkText',
              title: 'Link Text',
              type: 'string',
            }),
            defineField({
              name: 'linkHref',
              title: 'Link URL',
              type: 'url',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              description: 'description',
              image: 'image',
            },
            prepare({title, description, image}) {
              return {
                title,
                subtitle: description,
                media: image,
              };
            },
          },
        },
      ],
      validation: (rule) => rule.min(1).max(12),
    }),
    defineField({
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Center', value: 'center'},
          {title: 'Wide', value: 'wide'},
          {title: 'Full', value: 'full'},
        ],
      },
      initialValue: 'wide',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      gridType: 'gridType',
      itemCount: 'items.length',
    },
    prepare({title, gridType, itemCount}) {
      const typeLabel = gridType === 'big' ? 'Big Grid List' : 'Small Grid List';
      return {
        title: title || typeLabel,
        subtitle: `${typeLabel} - ${itemCount || 0} items`,
        media: '⚏',
      };
    },
  },
})
