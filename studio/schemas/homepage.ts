import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Homepage',
      hidden: true, // Usually not needed for a singleton's title
    }),
    defineField({
        name: 'metaTitle',
        title: 'Meta Title',
        type: 'string',
        group: 'seo',
    }),
    defineField({
        name: 'metaDescription',
        title: 'Meta Description',
        type: 'text',
        rows: 3,
        group: 'seo',
    }),
    // Backwards-compatible fields: some documents include top-level imageUrl/imageHint
    // Keep hidden to avoid showing in Studio editor UI but allow documents to contain them
    defineField({
      name: 'imageUrl',
      title: 'Legacy Image URL',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'imageHint',
      title: 'Legacy Image Hint',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'missionTopper',
      title: 'Mission Topper Section',
      type: 'object',
      group: 'content',
      fields: [
        defineField({
          name: 'titleParts',
          title: 'Title Parts',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'text', title: 'Text', type: 'string'},
                {name: 'isButton', title: 'Is Button Style', type: 'boolean', initialValue: false},
              ],
            },
          ],
        }),
        defineField({
          name: 'slides',
          title: 'Slides',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'title', title: 'Title', type: 'string'},
                {name: 'description', title: 'Description', type: 'text', rows: 3},
                {name: 'linkText', title: 'Link Text', type: 'string'},
                {name: 'linkHref', title: 'Link URL', type: 'string'},
                // Note: Using 'image' type for better Sanity integration
                {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'programCards',
      title: 'Program Cards',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text', rows: 3},
            {name: 'href', title: 'Link URL', type: 'string'},
            {name: 'linkText', title: 'Link Text', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'heroStatement',
      title: 'Hero Statement Section',
      type: 'object',
      group: 'content',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'description', title: 'Description', type: 'text', rows: 4},
        {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
        {name: 'imageUrl', title: 'Image URL', type: 'string', hidden: true},
        {name: 'imageHint', title: 'Image Hint', type: 'string'},
        {
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'href', title: 'URL', type: 'string'},
                {name: 'text', title: 'Link Text', type: 'string'},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'snowflakes',
      title: 'Keywords/Snowflakes Section',
      type: 'object',
      group: 'content',
      fields: [
        defineField({
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [
                {
                type: 'object',
                fields: [{name: 'label', title: 'Keyword', type: 'string'}],
                },
            ],
        }),
      ]
    }),
    defineField({
      name: 'hierarchicalTease',
      title: 'Hierarchical Tease Section',
      type: 'object',
      group: 'content',
      fields: [
        {
          name: 'header',
          title: 'Header',
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'subheading', title: 'Subheading', type: 'text', rows: 3},
            {
              name: 'cta',
              title: 'Call to Action',
              type: 'object',
              fields: [
                {name: 'text', title: 'Button Text', type: 'string'},
                {name: 'href', title: 'Button URL', type: 'string'},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'distinction',
      title: 'Distinction Section',
      type: 'object',
      group: 'content',
      fields: [
        {
          name: 'header',
          title: 'Header',
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text', rows: 3},
            {
              name: 'cta',
              title: 'Call to Action',
              type: 'object',
              fields: [
                {name: 'text', title: 'Button Text', type: 'string'},
                {name: 'href', title: 'Button URL', type: 'string'},
              ],
            },
          ],
        },
        {
          name: 'details',
          title: 'Details',
          type: 'object',
          fields: [
            {
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'title', title: 'Title', type: 'string'},
                    {name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3},
                  ],
                },
              ],
            },
            {
              name: 'mediaAsset',
              title: 'Media Asset',
              type: 'image',
              options: {hotspot: true}
            },
          ],
        },
      ],
    }),
  ],
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
  ]
})