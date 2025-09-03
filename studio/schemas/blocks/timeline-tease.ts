import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'timelineTease',
  title: 'Timeline Tease',
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
      name: 'events',
      title: 'Timeline Events',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'date',
              title: 'Event Date',
              type: 'datetime',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'endDate',
              title: 'End Date (Optional)',
              type: 'datetime',
              description: 'Leave empty if it\'s a single date event',
            }),
            defineField({
              name: 'title',
              title: 'Event Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Event Description',
              type: 'text',
            }),
            defineField({
              name: 'image',
              title: 'Event Image',
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
              name: 'link',
              title: 'Event Link',
              type: 'object',
              fields: [
                defineField({
                  name: 'text',
                  title: 'Link Text',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'href',
                  title: 'Link URL',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              date: 'date',
              endDate: 'endDate',
            },
            prepare({title, date, endDate}) {
              const startDate = date ? new Date(date).toLocaleDateString('id-ID') : 'No date';
              const endDateStr = endDate ? new Date(endDate).toLocaleDateString('id-ID') : '';
              const dateRange = endDateStr && endDateStr !== startDate ? `${startDate} - ${endDateStr}` : startDate;
              
              return {
                title: title || 'Untitled Event',
                subtitle: dateRange,
                media: '📅',
              }
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'variant',
      title: 'Timeline Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Vertical', value: 'vertical'},
          {title: 'Horizontal', value: 'horizontal'},
        ],
      },
      initialValue: 'vertical',
    }),
    defineField({
      name: 'showImages',
      title: 'Show Event Images',
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
      eventsCount: 'events',
      variant: 'variant',
    },
    prepare({title, eventsCount, variant}) {
      return {
        title: title || 'Timeline Tease',
        subtitle: `${eventsCount?.length || 0} events (${variant})`,
        media: '📅',
      }
    },
  },
})
