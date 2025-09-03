import { defineType } from 'sanity';

export default defineType({
  name: 'socialMediaLinks',
  title: 'Social Media Links',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the social media links section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the social media links section'
    },
    {
      name: 'platforms',
      title: 'Social Media Platforms',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Platform Name',
              type: 'string',
              validation: Rule => Rule.required(),
              description: 'e.g., Facebook, Twitter, Instagram'
            },
            {
              name: 'url',
              title: 'Platform URL',
              type: 'url',
              validation: Rule => Rule.required()
            },
            {
              name: 'icon',
              title: 'Custom Icon',
              type: 'string',
              description: 'Custom emoji or icon (optional)'
            },
            {
              name: 'label',
              title: 'Display Label',
              type: 'string',
              description: 'Custom label to display (optional)'
            }
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'url',
              media: 'icon'
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled Platform',
                subtitle: subtitle || 'No URL',
                media: media || undefined
              };
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1),
      description: 'Social media platforms to display'
    },
    {
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Horizontal', value: 'horizontal' },
          { title: 'Vertical', value: 'vertical' },
          { title: 'Grid', value: 'grid' },
          { title: 'Compact', value: 'compact' }
        ]
      },
      initialValue: 'horizontal'
    },
    {
      name: 'showLabels',
      title: 'Show Labels',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show platform labels'
    },
    {
      name: 'showIcons',
      title: 'Show Icons',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show platform icons'
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
      platforms: 'platforms'
    },
    prepare({ title, platforms }) {
      const platformCount = platforms ? platforms.length : 0;
      return {
        title: title || 'Social Media Links',
        subtitle: `${platformCount} platform${platformCount !== 1 ? 's' : ''}`
      };
    }
  }
});
