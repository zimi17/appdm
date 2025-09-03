import { defineType } from 'sanity';

export default defineType({
  name: 'bentoBoxArchive',
  title: 'Bento Box Archive',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the bento box archive section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the bento box archive section'
    },
    {
      name: 'items',
      title: 'Bento Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
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
              name: 'image',
              title: 'Image',
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
              name: 'category',
              title: 'Category',
              type: 'string'
            },
            {
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{ type: 'string' }]
            },
            {
              name: 'href',
              title: 'Link URL',
              type: 'url'
            },
            {
              name: 'size',
              title: 'Size',
              type: 'string',
              options: {
                list: [
                  { title: 'Small', value: 'small' },
                  { title: 'Medium', value: 'medium' },
                  { title: 'Large', value: 'large' },
                  { title: 'Wide', value: 'wide' },
                  { title: 'Tall', value: 'tall' }
                ]
              },
              initialValue: 'small'
            },
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Article', value: 'article' },
                  { title: 'Event', value: 'event' },
                  { title: 'Person', value: 'person' },
                  { title: 'Page', value: 'page' },
                  { title: 'Media', value: 'media' }
                ]
              },
              initialValue: 'article'
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
                title: title || 'Untitled Item',
                subtitle: subtitle || 'No category',
                media: media
              };
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1),
      description: 'Collection of items to display in the bento box layout'
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
      name: 'showViewToggle',
      title: 'Show View Toggle',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show grid/list view toggle'
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
      items: 'items'
    },
    prepare({ title, items }) {
      const itemCount = items ? items.length : 0;
      return {
        title: title || 'Bento Box Archive',
        subtitle: `${itemCount} item${itemCount !== 1 ? 's' : ''}`
      };
    }
  }
});
