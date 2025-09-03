import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'eventSchedule',
  title: 'Event Schedule',
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
      name: 'viewMode',
      title: 'View Mode',
      type: 'string',
      options: {
        list: [
          {title: 'List', value: 'list'},
          {title: 'Calendar', value: 'calendar'},
          {title: 'Timeline', value: 'timeline'},
        ],
      },
      initialValue: 'list',
    }),
    defineField({
      name: 'showFilters',
      title: 'Show Category Filters',
      type: 'boolean',
      initialValue: false,
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
      viewMode: 'viewMode',
    },
    prepare({title, eventsCount, viewMode}) {
      return {
        title: title || 'Event Schedule',
        subtitle: `${eventsCount?.length || 0} events (${viewMode})`,
        media: '📅',
      }
    },
  },
})
