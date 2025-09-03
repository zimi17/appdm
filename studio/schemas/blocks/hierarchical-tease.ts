import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hierarchicalTease',
  title: 'Hierarchical Tease',
  type: 'object',
  fields: [
    defineField({
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
    }),
    defineField({
      name: 'primaryItem',
      title: 'Primary Item',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3},
      ],
    }),
    defineField({
      name: 'secondaryItems',
      title: 'Secondary Items',
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
    }),
    defineField({
      name: 'mediaAsset',
      title: 'Media Asset',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {name: 'alt', title: 'Alt Text', type: 'string'},
        {name: 'hint', title: 'Image Hint', type: 'string'},
      ],
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'imageHint',
      title: 'Image Hint',
      type: 'string',
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'header.title',
      primaryTitle: 'primaryItem.title',
    },
    prepare({title, primaryTitle}: any) {
      return {
        title: title || 'Hierarchical Tease',
        subtitle: primaryTitle ? `Primary: ${primaryTitle}` : 'Hierarchical content block',
      };
    },
  },
})