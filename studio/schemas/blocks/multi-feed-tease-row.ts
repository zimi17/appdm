import { defineType } from 'sanity';

export default defineType({
  name: 'multiFeedTeaseRow',
  title: 'Multi-Feed Tease Row',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the multi-feed tease row section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the multi-feed tease row section'
    },
    {
      name: 'feeds',
      title: 'Feeds',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Feed Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Feed Description',
              type: 'text',
              rows: 2
            },
            {
              name: 'items',
              title: 'Feed Items',
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
                      rows: 2
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
              validation: Rule => Rule.required().min(1)
            },
            {
              name: 'showMoreHref',
              title: 'Show More Link',
              type: 'url',
              description: 'Link to view all items in this feed'
            },
            {
              name: 'showMoreText',
              title: 'Show More Text',
              type: 'string',
              initialValue: 'View All',
              description: 'Text for the show more link'
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
                title: title || 'Untitled Feed',
                subtitle: `${itemCount} item${itemCount !== 1 ? 's' : ''}`
              };
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1),
      description: 'Collection of feeds to display'
    },
    {
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Horizontal', value: 'horizontal' },
          { title: 'Vertical', value: 'vertical' },
          { title: 'Grid', value: 'grid' }
        ]
      },
      initialValue: 'horizontal'
    },
    {
      name: 'itemsPerFeed',
      title: 'Items Per Feed',
      type: 'number',
      initialValue: 3,
      description: 'Number of items to show per feed'
    },
    {
      name: 'showFeedTitles',
      title: 'Show Feed Titles',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show feed titles'
    },
    {
      name: 'showMoreLinks',
      title: 'Show More Links',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show "View All" links'
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
      feeds: 'feeds'
    },
    prepare({ title, feeds }) {
      const feedCount = feeds ? feeds.length : 0;
      return {
        title: title || 'Multi-Feed Tease Row',
        subtitle: `${feedCount} feed${feedCount !== 1 ? 's' : ''}`
      };
    }
  }
});
