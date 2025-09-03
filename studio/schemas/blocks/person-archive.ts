import { defineType } from 'sanity';

export default defineType({
  name: 'personArchive',
  title: 'Person Archive',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the person archive section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the person archive section'
    },
    {
      name: 'people',
      title: 'People',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'title',
              title: 'Job Title',
              type: 'string'
            },
            {
              name: 'department',
              title: 'Department',
              type: 'string'
            },
            {
              name: 'bio',
              title: 'Bio',
              type: 'text',
              rows: 4
            },
            {
              name: 'expertise',
              title: 'Areas of Expertise',
              type: 'array',
              of: [{ type: 'string' }]
            },
            {
              name: 'email',
              title: 'Email',
              type: 'string',
              validation: Rule => Rule.email()
            },
            {
              name: 'phone',
              title: 'Phone',
              type: 'string'
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string'
            },
            {
              name: 'image',
              title: 'Profile Image',
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
              title: 'Profile URL',
              type: 'url',
              description: 'Link to full profile page'
            },
            {
              name: 'links',
              title: 'Additional Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'label',
                      title: 'Link Label',
                      type: 'string',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'href',
                      title: 'Link URL',
                      type: 'url',
                      validation: Rule => Rule.required()
                    }
                  ]
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'title',
              media: 'image'
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled Person',
                subtitle: subtitle || 'No title',
                media: media
              };
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1),
      description: 'Collection of people to display'
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
      description: 'Number of people to show per page'
    },
    {
      name: 'departments',
      title: 'Filter Departments',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Available departments for filtering'
    },
    {
      name: 'showBio',
      title: 'Show Bio',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show person bio'
    },
    {
      name: 'showContact',
      title: 'Show Contact Info',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show contact information'
    },
    {
      name: 'showExpertise',
      title: 'Show Expertise',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show areas of expertise'
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
      people: 'people'
    },
    prepare({ title, people }) {
      const peopleCount = people ? people.length : 0;
      return {
        title: title || 'Person Archive',
        subtitle: `${peopleCount} person${peopleCount !== 1 ? 's' : ''}`
      };
    }
  }
});
