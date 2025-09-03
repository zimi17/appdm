import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'table',
  title: 'Table',
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
      name: 'columns',
      title: 'Table Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'key',
              title: 'Column Key',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'header',
              title: 'Column Header',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'width',
              title: 'Column Width',
              type: 'string',
              description: 'e.g., "200px", "25%"',
            }),
            defineField({
              name: 'align',
              title: 'Text Alignment',
              type: 'string',
              options: {
                list: [
                  {title: 'Left', value: 'left'},
                  {title: 'Center', value: 'center'},
                  {title: 'Right', value: 'right'},
                ],
              },
              initialValue: 'left',
            }),
          ],
          preview: {
            select: {
              header: 'header',
              key: 'key',
              align: 'align',
            },
            prepare({header, key, align}) {
              return {
                title: header || 'Untitled Column',
                subtitle: `Key: ${key} | Align: ${align}`,
                media: '📋',
              }
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'data',
      title: 'Table Data',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'rowData',
              title: 'Row Data',
              type: 'object',
              fields: [
                defineField({
                  name: 'content',
                  title: 'Content',
                  type: 'string',
                }),
              ],
              description: 'Add key-value pairs matching your column keys',
            }),
          ],
          preview: {
            select: {
              rowData: 'rowData',
            },
            prepare({rowData}) {
              const keys = rowData ? Object.keys(rowData) : [];
              return {
                title: `Table Row`,
                subtitle: `${keys.length} columns`,
                media: '📊',
              }
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'variant',
      title: 'Table Style',
      type: 'string',
      options: {
        list: [
          {title: 'Simple', value: 'simple'},
          {title: 'Bordered', value: 'bordered'},
          {title: 'Striped', value: 'striped'},
        ],
      },
      initialValue: 'bordered',
    }),
    defineField({
      name: 'size',
      title: 'Table Size',
      type: 'string',
      options: {
        list: [
          {title: 'Small', value: 'sm'},
          {title: 'Medium', value: 'md'},
          {title: 'Large', value: 'lg'},
        ],
      },
      initialValue: 'md',
    }),
    defineField({
      name: 'showHeader',
      title: 'Show Table Header',
      type: 'boolean',
      initialValue: true,
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
      columnsCount: 'columns',
      dataCount: 'data',
      variant: 'variant',
    },
    prepare({title, columnsCount, dataCount, variant}) {
      return {
        title: title || 'Table',
        subtitle: `${columnsCount?.length || 0} columns, ${dataCount?.length || 0} rows (${variant})`,
        media: '📋',
      }
    },
  },
})
