import { defineType } from 'sanity';

export default defineType({
  name: 'articleFooter',
  title: 'Article Footer',
  type: 'object',
  fields: [
    {
      name: 'author',
      title: 'Author Information',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Author Name',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'title',
          title: 'Author Title',
          type: 'string',
          description: 'e.g., "Professor", "Researcher", "Director"'
        },
        {
          name: 'bio',
          title: 'Author Bio',
          type: 'text',
          rows: 3
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
              validation: Rule => Rule.required()
            }
          ]
        },
        {
          name: 'socialLinks',
          title: 'Social Links',
          type: 'object',
          fields: [
            {
              name: 'twitter',
              title: 'Twitter URL',
              type: 'url'
            },
            {
              name: 'linkedin',
              title: 'LinkedIn URL',
              type: 'url'
            },
            {
              name: 'email',
              title: 'Email Address',
              type: 'string'
            }
          ]
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      description: 'Estimated reading time in minutes'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Article tags for categorization'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Article categories'
    },
    {
      name: 'shareButtons',
      title: 'Share Buttons',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Facebook', value: 'facebook' },
              { title: 'Twitter', value: 'twitter' },
              { title: 'LinkedIn', value: 'linkedin' },
              { title: 'WhatsApp', value: 'whatsapp' }
            ]
          }
        }
      ],
      initialValue: ['facebook', 'twitter', 'linkedin', 'whatsapp']
    },
    {
      name: 'relatedArticles',
      title: 'Related Articles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Article Title',
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
              name: 'image',
              title: 'Article Image',
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
                }
              ]
            },
            {
              name: 'href',
              title: 'Article URL',
              type: 'url',
              validation: Rule => Rule.required()
            },
            {
              name: 'publishDate',
              title: 'Publish Date',
              type: 'datetime'
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'publishDate',
              media: 'image'
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled Article',
                subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'No date',
                media: media
              };
            }
          }
        }
      ],
      description: 'Related articles to display at the bottom'
    },
    {
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Compact', value: 'compact' },
          { title: 'Extended', value: 'extended' }
        ]
      },
      initialValue: 'default'
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
      author: 'author.name',
      publishDate: 'publishDate',
      relatedArticles: 'relatedArticles'
    },
    prepare({ author, publishDate, relatedArticles }) {
      const relatedCount = relatedArticles ? relatedArticles.length : 0;
      return {
        title: `Article Footer - ${author || 'Unknown Author'}`,
        subtitle: `${publishDate ? new Date(publishDate).toLocaleDateString() : 'No date'} • ${relatedCount} related articles`
      };
    }
  }
});
