import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'statisticsGroup',
  title: 'Statistics Group',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'statistics',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
          preview: {
            select: {
              value: 'value',
              label: 'label',
            },
            prepare({value, label}) {
              return {
                title: `${value} - ${label}`,
                media: '📊',
              }
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'hint',
          title: 'AI Hint',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'href',
          title: 'Link URL',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'variant',
          title: 'Button Style',
          type: 'string',
          options: {
            list: [
              {title: 'Primary', value: 'primary'},
              {title: 'Secondary', value: 'secondary'},
              {title: 'Outline', value: 'outline'},
            ],
          },
          initialValue: 'primary',
        }),
      ],
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Side by Side', value: 'side-by-side'},
          {title: 'Stacked', value: 'stacked'},
        ],
      },
      initialValue: 'side-by-side',
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
          {title: 'Accent', value: 'accent'},
        ],
      },
      initialValue: 'default',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      statsCount: 'statistics',
      theme: 'theme',
    },
    prepare({title, statsCount, theme}) {
      return {
        title: title || 'Statistics Group',
        subtitle: `${statsCount?.length || 0} statistics (${theme})`,
        media: '📊',
      }
    },
  },
})
