import { defineType } from 'sanity';

export default defineType({
  name: 'quoteCarousel',
  title: 'Quote Carousel',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the quote carousel'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the quote carousel'
    },
    {
      name: 'quotes',
      title: 'Quotes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Quote Text',
              type: 'text',
              rows: 4,
              validation: Rule => Rule.required().max(500)
            },
            {
              name: 'author',
              title: 'Author Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'title',
              title: 'Author Title',
              type: 'string',
              description: 'Job title or position of the author'
            },
            {
              name: 'company',
              title: 'Company/Organization',
              type: 'string',
              description: 'Company or organization name'
            },
            {
              name: 'image',
              title: 'Author Image',
              type: 'image',
              options: {
                hotspot: true
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Alternative text for the image'
                },
                {
                  name: 'hint',
                  title: 'Image Hint',
                  type: 'string',
                  description: 'Additional context for the image'
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'author',
              subtitle: 'text',
              media: 'image'
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled Quote',
                subtitle: subtitle ? subtitle.substring(0, 100) + '...' : 'No quote text',
                media: media
              };
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1),
      description: 'Collection of quotes to display in the carousel'
    },
    {
      name: 'autoPlay',
      title: 'Auto Play',
      type: 'boolean',
      initialValue: true,
      description: 'Whether the carousel should automatically rotate'
    },
    {
      name: 'interval',
      title: 'Auto Play Interval (ms)',
      type: 'number',
      initialValue: 5000,
      description: 'Time in milliseconds between auto-rotations'
    },
    {
      name: 'showIndicators',
      title: 'Show Indicators',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show dot indicators for navigation'
    },
    {
      name: 'showNavigation',
      title: 'Show Navigation',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show previous/next navigation buttons'
    },
    {
      name: 'variant',
      title: 'Display Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Single Quote', value: 'single' },
          { title: 'Multiple Quotes', value: 'multiple' }
        ]
      },
      initialValue: 'single'
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
      quotes: 'quotes'
    },
    prepare({ title, quotes }) {
      const quoteCount = quotes ? quotes.length : 0;
      return {
        title: title || 'Quote Carousel',
        subtitle: `${quoteCount} quote${quoteCount !== 1 ? 's' : ''}`
      };
    }
  }
});
