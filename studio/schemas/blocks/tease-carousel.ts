import { defineType } from 'sanity';

export default defineType({
  name: 'teaseCarousel',
  title: 'Tease Carousel',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the tease carousel section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the tease carousel section'
    },
    {
      name: 'teases',
      title: 'Tease Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Item Title',
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
              name: 'type',
              title: 'Item Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Article', value: 'article' },
                  { title: 'Event', value: 'event' },
                  { title: 'Person', value: 'person' },
                  { title: 'Program', value: 'program' },
                  { title: 'News', value: 'news' }
                ]
              },
              initialValue: 'article'
            },
            {
              name: 'publishDate',
              title: 'Publish Date',
              type: 'datetime'
            },
            {
              name: 'author',
              title: 'Author',
              type: 'string'
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
              name: 'image',
              title: 'Item Image',
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
              title: 'Item URL',
              type: 'url'
            },
            {
              name: 'featured',
              title: 'Featured Item',
              type: 'boolean',
              initialValue: false
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'type',
              media: 'image'
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled Item',
                subtitle: subtitle || 'No type',
                media: media
              };
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1),
      description: 'Items to display in the carousel'
    },
    {
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Large', value: 'large' },
          { title: 'Compact', value: 'compact' }
        ]
      },
      initialValue: 'default'
    },
    {
      name: 'itemsPerView',
      title: 'Items Per View',
      type: 'number',
      initialValue: 3,
      validation: Rule => Rule.min(1).max(6),
      description: 'Number of items to show at once'
    },
    {
      name: 'showIndicators',
      title: 'Show Indicators',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show carousel indicators'
    },
    {
      name: 'showNavigation',
      title: 'Show Navigation',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show navigation arrows'
    },
    {
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to autoplay the carousel'
    },
    {
      name: 'autoplayInterval',
      title: 'Autoplay Interval (ms)',
      type: 'number',
      initialValue: 5000,
      description: 'Time between slides in milliseconds'
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
      teases: 'teases'
    },
    prepare({ title, teases }) {
      const teaseCount = teases ? teases.length : 0;
      return {
        title: title || 'Tease Carousel',
        subtitle: `${teaseCount} item${teaseCount !== 1 ? 's' : ''}`
      };
    }
  }
});
