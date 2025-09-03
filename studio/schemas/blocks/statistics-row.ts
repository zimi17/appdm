import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'statisticsRow',
  title: 'Statistics Row',
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
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Emoji or icon symbol',
            }),
          ],
          preview: {
            select: {
              value: 'value',
              label: 'label',
              icon: 'icon',
            },
            prepare({value, label, icon}) {
              return {
                title: `${value} - ${label}`,
                subtitle: icon ? `Icon: ${icon}` : 'No icon',
                media: icon || '📊',
              }
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          {title: '2 Up', value: 'two-up'},
          {title: '3 Up', value: 'three-up'},
          {title: '4 Up', value: 'four-up'},
        ],
      },
      initialValue: 'three-up',
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
      variant: 'variant',
    },
    prepare({title, statsCount, variant}) {
      return {
        title: title || 'Statistics Row',
        subtitle: `${statsCount?.length || 0} statistics (${variant})`,
        media: '📊',
      }
    },
  },
})
