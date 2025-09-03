import { defineType } from 'sanity';

export default defineType({
  name: 'eventsArchive',
  title: 'Events Archive',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the events archive section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the events archive section'
    },
    {
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Event Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3
            },
            {
              name: 'startDate',
              title: 'Start Date',
              type: 'datetime',
              validation: Rule => Rule.required()
            },
            {
              name: 'endDate',
              title: 'End Date',
              type: 'datetime',
              description: 'Optional end date for multi-day events'
            },
            {
              name: 'time',
              title: 'Time',
              type: 'string',
              description: 'Event time (e.g., "9:00 AM - 5:00 PM")'
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string'
            },
            {
              name: 'category',
              title: 'Category',
              type: 'string'
            },
            {
              name: 'image',
              title: 'Event Image',
              type: 'image',
              options: {
                hotspot: true
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'hint',
                  title: 'Image Hint',
                  type: 'string'
                }
              ]
            },
            {
              name: 'href',
              title: 'Event URL',
              type: 'url',
              description: 'Link to event details or registration'
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'startDate',
              media: 'image'
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled Event',
                subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'No date',
                media: media
              };
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1),
      description: 'Collection of events to display'
    },
    {
      name: 'showSearch',
      title: 'Show Search',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show the search input'
    },
    {
      name: 'showFilters',
      title: 'Show Filters',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show filter options'
    },
    {
      name: 'showPagination',
      title: 'Show Pagination',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show pagination'
    },
    {
      name: 'itemsPerPage',
      title: 'Items Per Page',
      type: 'number',
      initialValue: 12,
      description: 'Number of events to show per page'
    },
    {
      name: 'categories',
      title: 'Filter Categories',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Available categories for filtering'
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
          { title: 'Accent', value: 'accent' }
        ]
      },
      initialValue: 'default'
    }
  ],
  preview: {
    select: {
      title: 'title',
      events: 'events'
    },
    prepare({ title, events }) {
      const eventCount = events ? events.length : 0;
      return {
        title: title || 'Events Archive',
        subtitle: `${eventCount} event${eventCount !== 1 ? 's' : ''}`
      };
    }
  }
});
