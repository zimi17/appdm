import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'statisticsCTA',
  title: 'Statistics CTA',
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
        defineField({
          name: 'size',
          title: 'Button Size',
          type: 'string',
          options: {
            list: [
              {title: 'Small', value: 'sm'},
              {title: 'Medium', value: 'md'},
              {title: 'Large', value: 'lg'},
            ],
          },
          initialValue: 'lg',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Horizontal', value: 'horizontal'},
          {title: 'Vertical', value: 'vertical'},
        ],
      },
      initialValue: 'horizontal',
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
      layout: 'layout',
    },
    prepare({title, statsCount, layout}) {
      return {
        title: title || 'Statistics CTA',
        subtitle: `${statsCount?.length || 0} statistics (${layout})`,
        media: '📊',
      }
    },
  },
})
