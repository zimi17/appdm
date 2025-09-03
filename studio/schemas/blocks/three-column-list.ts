import { defineType } from 'sanity';

export default defineType({
  name: 'threeColumnList',
  title: 'Three Column List',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the three column list section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the three column list section'
    },
    {
      name: 'items',
      title: 'List Items',
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
              rows: 2
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
              rows: 4
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
              name: 'cta',
              title: 'Call to Action',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Button Text',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'href',
                  title: 'Link URL',
                  type: 'url',
                  validation: Rule => Rule.required()
                },
                  { name: 'imageUrl', title: 'Legacy Image URL', type: 'string', hidden: true },
                  { name: 'imageHint', title: 'Legacy Image Hint', type: 'string', hidden: true },
                {
                  name: 'variant',
                  title: 'Button Variant',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Primary', value: 'primary' },
                      { title: 'Secondary', value: 'secondary' },
                      { title: 'Outline', value: 'outline' }
                    ]
                  },
                  initialValue: 'primary'
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description'
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Untitled Item',
                subtitle: subtitle || 'No description'
              };
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1).max(6),
      description: 'List items to display in three columns (1-6 items)'
    },
    {
      name: 'variant',
      title: 'Display Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'With Content', value: 'with-content' },
          { title: 'With Images', value: 'with-images' },
          { title: 'With Icons', value: 'with-icons' }
        ]
      },
      initialValue: 'default'
    },
    {
      name: 'showIcons',
      title: 'Show Icons',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show icons for items without images'
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
        title: title || 'Three Column List',
        subtitle: `${itemCount} item${itemCount !== 1 ? 's' : ''}`
      };
    }
  }
});
