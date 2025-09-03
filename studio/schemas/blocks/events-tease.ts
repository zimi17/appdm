import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'eventsTease',
  title: 'Events Tease',
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
      title: 'Events',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
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
              name: 'startDate',
              title: 'Start Date',
              type: 'datetime',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'endDate',
              title: 'End Date',
              type: 'datetime',
            }),
            defineField({
              name: 'time',
              title: 'Time',
              type: 'string',
              description: 'e.g., "09:00 - 17:00"',
            }),
            defineField({
              name: 'location',
              title: 'Location',
              type: 'string',
            }),
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  {title: 'Academic', value: 'academic'},
                  {title: 'Event', value: 'event'},
                  {title: 'Workshop', value: 'workshop'},
                  {title: 'Seminar', value: 'seminar'},
                  {title: 'Conference', value: 'conference'},
                  {title: 'Other', value: 'other'},
                ],
              },
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
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              startDate: 'startDate',
              category: 'category',
            },
            prepare({title, startDate, category}) {
              const date = startDate ? new Date(startDate).toLocaleDateString('id-ID') : 'No date';
              return {
                title: title || 'Untitled Event',
                subtitle: `${date}${category ? ` - ${category}` : ''}`,
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
      title: 'Display Variant',
      type: 'string',
      options: {
        list: [
          {title: '2 Teases', value: '2-teases'},
          {title: '3 Teases', value: '3-teases'},
          {title: '4 Teases', value: '4-teases'},
          {title: '5 Teases', value: '5-teases'},
          {title: '6 Teases', value: '6-teases'},
        ],
      },
      initialValue: '3-teases',
    }),
    defineField({
      name: 'showLinks',
      title: 'Show Event Links',
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
        title: title || 'Events Tease',
        subtitle: `${eventsCount?.length || 0} events (${variant})`,
        media: '📅',
      }
    },
  },
})
