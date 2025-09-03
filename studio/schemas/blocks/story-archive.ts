import { defineType } from 'sanity';

export default defineType({
  name: 'storyArchive',
  title: 'Story Archive',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the story archive section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the story archive section'
    },
    {
      name: 'stories',
      title: 'Stories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Story Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'excerpt',
              title: 'Excerpt',
              type: 'text',
              rows: 3,
              description: 'Short summary of the story'
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
              rows: 6,
              description: 'Full story content'
            },
            {
              name: 'author',
              title: 'Author',
              type: 'string'
            },
            {
              name: 'publishDate',
              title: 'Publish Date',
              type: 'datetime',
              validation: Rule => Rule.required()
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
              title: 'Story Image',
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
              title: 'Story URL',
              type: 'url',
              description: 'Link to full story page'
            },
            {
              name: 'readTime',
              title: 'Read Time (minutes)',
              type: 'number',
              description: 'Estimated reading time in minutes'
            },
            {
              name: 'featured',
              title: 'Featured Story',
              type: 'boolean',
              initialValue: false,
              description: 'Mark as featured story'
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'author',
              media: 'image'
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled Story',
                subtitle: subtitle || 'No author',
                media: media
              };
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1),
      description: 'Collection of stories to display'
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
      description: 'Number of stories to show per page'
    },
    {
      name: 'categories',
      title: 'Filter Categories',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Available categories for filtering'
    },
    {
      name: 'showAuthor',
      title: 'Show Author',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show story author'
    },
    {
      name: 'showReadTime',
      title: 'Show Read Time',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show estimated reading time'
    },
    {
      name: 'showFeatured',
      title: 'Show Featured Filter',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show featured stories filter'
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
      stories: 'stories'
    },
    prepare({ title, stories }) {
      const storyCount = stories ? stories.length : 0;
      return {
        title: title || 'Story Archive',
        subtitle: `${storyCount} stor${storyCount !== 1 ? 'ies' : 'y'}`
      };
    }
  }
});
