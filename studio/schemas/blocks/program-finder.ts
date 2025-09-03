import { defineType } from 'sanity';

export default defineType({
  name: 'programFinder',
  title: 'Program Finder',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the program finder section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the program finder section'
    },
    {
      name: 'programs',
      title: 'Programs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Program Title',
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
              name: 'category',
              title: 'Category',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'duration',
              title: 'Duration',
              type: 'string',
              description: 'e.g., "3 months", "6 weeks"'
            },
            {
              name: 'format',
              title: 'Format',
              type: 'string',
              options: {
                list: [
                  { title: 'Online', value: 'online' },
                  { title: 'In-Person', value: 'in-person' },
                  { title: 'Hybrid', value: 'hybrid' }
                ]
              },
              initialValue: 'online'
            },
            {
              name: 'level',
              title: 'Level',
              type: 'string',
              options: {
                list: [
                  { title: 'Beginner', value: 'beginner' },
                  { title: 'Intermediate', value: 'intermediate' },
                  { title: 'Advanced', value: 'advanced' }
                ]
              }
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
              description: 'Program price'
            },
            {
              name: 'currency',
              title: 'Currency',
              type: 'string',
              initialValue: 'IDR',
              description: 'Currency code (e.g., IDR, USD)'
            },
            {
              name: 'startDate',
              title: 'Start Date',
              type: 'date'
            },
            {
              name: 'endDate',
              title: 'End Date',
              type: 'date'
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string'
            },
            {
              name: 'maxParticipants',
              title: 'Max Participants',
              type: 'number'
            },
            {
              name: 'image',
              title: 'Program Image',
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
              title: 'Program URL',
              type: 'url',
              description: 'Link to program details or registration'
            },
            {
              name: 'featured',
              title: 'Featured Program',
              type: 'boolean',
              initialValue: false
            },
            {
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{ type: 'string' }]
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'category',
              media: 'image'
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled Program',
                subtitle: subtitle || 'No category',
                media: media
              };
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1),
      description: 'Collection of programs to display'
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
      initialValue: 9,
      description: 'Number of programs to show per page'
    },
    {
      name: 'categories',
      title: 'Filter Categories',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Available categories for filtering'
    },
    {
      name: 'levels',
      title: 'Filter Levels',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Available levels for filtering'
    },
    {
      name: 'formats',
      title: 'Filter Formats',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Available formats for filtering'
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
      programs: 'programs'
    },
    prepare({ title, programs }) {
      const programCount = programs ? programs.length : 0;
      return {
        title: title || 'Program Finder',
        subtitle: `${programCount} program${programCount !== 1 ? 's' : ''}`
      };
    }
  }
});
