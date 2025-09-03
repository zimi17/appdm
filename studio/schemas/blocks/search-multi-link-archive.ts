import { defineType } from 'sanity';

export default defineType({
  name: 'searchMultiLinkArchive',
  title: 'Search Multi-Link Archive',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the search multi-link archive section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the search multi-link archive section'
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Link Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: Rule => Rule.required().uri({
                scheme: ['http', 'https']
              })
            },
            {
              name: 'category',
              title: 'Category',
              type: 'string'
            },
            {
              name: 'type',
              title: 'Link Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Internal', value: 'internal' },
                  { title: 'External', value: 'external' }
                ]
              },
              initialValue: 'internal'
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Emoji or icon to display (e.g., 🔗, 📄, 🎥)'
            },
            {
              name: 'featured',
              title: 'Featured Link',
              type: 'boolean',
              initialValue: false,
              description: 'Mark as featured link'
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'url',
              media: 'icon'
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled Link',
                subtitle: subtitle || 'No URL',
                media: media ? `span style="font-size: 1.5em">${media}</span>` : undefined
              };
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1),
      description: 'Collection of links to display'
    },
    {
      name: 'showSearch',
      title: 'Show Search',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show the search input'
    },
    {
      name: 'showCategories',
      title: 'Show Categories',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show category filter'
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
      links: 'links'
    },
    prepare({ title, links }) {
      const linkCount = links ? links.length : 0;
      return {
        title: title || 'Search Multi-Link Archive',
        subtitle: `${linkCount} link${linkCount !== 1 ? 's' : ''}`
      };
    }
  }
});
