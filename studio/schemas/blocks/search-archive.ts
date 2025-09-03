import { defineType } from 'sanity';

export default defineType({
  name: 'searchArchive',
  title: 'Search Archive',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the search section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the search section'
    },
    {
      name: 'placeholder',
      title: 'Search Placeholder',
      type: 'string',
      initialValue: 'Cari konten...',
      description: 'Placeholder text for the search input'
    },
    {
      name: 'showFilters',
      title: 'Show Filters',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show filter options'
    },
    {
      name: 'filters',
      title: 'Filter Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'id',
              title: 'Filter ID',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'label',
              title: 'Filter Label',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'value',
              title: 'Filter Value',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'count',
              title: 'Item Count',
              type: 'number',
              description: 'Number of items in this filter category'
            }
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'value'
            }
          }
        }
      ],
      description: 'Available filter options for the search'
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
      subtitle: 'description'
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Search Archive',
        subtitle: subtitle || 'Search and filter content'
      };
    }
  }
});
