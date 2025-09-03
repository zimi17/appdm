import { defineType } from 'sanity';

export default defineType({
  name: 'mediaAssetRow',
  title: 'Media Asset Row',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the media section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the media section'
    },
    {
      name: 'media',
      title: 'Media Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Media Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Image', value: 'image' },
                  { title: 'Video', value: 'video' }
                ]
              },
              validation: Rule => Rule.required()
            },
            {
              name: 'src',
              title: 'Media Source',
              type: 'string',
              validation: Rule => Rule.required(),
              description: 'URL or path to the media file'
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: Rule => Rule.required(),
              description: 'Alternative text for accessibility'
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'text',
              rows: 2,
              description: 'Optional caption for the media item'
            },
            {
              name: 'hint',
              title: 'Image Hint',
              type: 'string',
              description: 'Additional context for the image'
            }
          ],
          preview: {
            select: {
              title: 'alt',
              subtitle: 'type',
              media: 'src'
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled Media',
                subtitle: subtitle ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1) : 'Unknown type',
                media: media
              };
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1),
      description: 'Collection of media items to display'
    },
    {
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: '1 Up', value: '1-up' },
          { title: '2 Up', value: '2-up' },
          { title: '3 Up', value: '3-up' },
          { title: '1 Up Vertical', value: '1-up-vertical' },
          { title: '2 Up Full Vertical', value: '2-up-full-vertical' }
        ]
      },
      initialValue: '3-up',
      description: 'Layout arrangement for the media items'
    },
    {
      name: 'showCaptions',
      title: 'Show Captions',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to display captions for media items'
    },
    {
      name: 'lightbox',
      title: 'Enable Lightbox',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to enable lightbox functionality for media items'
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
      media: 'media',
      variant: 'variant'
    },
    prepare({ title, media, variant }) {
      const mediaCount = media ? media.length : 0;
      return {
        title: title || 'Media Asset Row',
        subtitle: `${mediaCount} item${mediaCount !== 1 ? 's' : ''} - ${variant || '3-up'} layout`
      };
    }
  }
});
