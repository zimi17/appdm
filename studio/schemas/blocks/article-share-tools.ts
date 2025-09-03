import { defineType } from 'sanity';

export default defineType({
  name: 'articleShareTools',
  title: 'Article Share Tools',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the article share tools section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the article share tools section'
    },
    {
      name: 'url',
      title: 'Article URL',
      type: 'url',
      validation: Rule => Rule.required(),
      description: 'URL of the article to share'
    },
    {
      name: 'articleTitle',
      title: 'Article Title',
      type: 'string',
      description: 'Title of the article (for sharing)'
    },
    {
      name: 'articleDescription',
      title: 'Article Description',
      type: 'text',
      rows: 2,
      description: 'Description of the article (for sharing)'
    },
    {
      name: 'platforms',
      title: 'Social Media Platforms',
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
      initialValue: ['facebook', 'twitter', 'linkedin', 'whatsapp'],
      description: 'Social media platforms to include in sharing options'
    },
    {
      name: 'showCopyLink',
      title: 'Show Copy Link',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show the copy link button'
    },
    {
      name: 'showPrint',
      title: 'Show Print Button',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show the print button'
    },
    {
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Horizontal', value: 'horizontal' },
          { title: 'Vertical', value: 'vertical' },
          { title: 'Compact', value: 'compact' }
        ]
      },
      initialValue: 'horizontal'
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
        title: title || 'Article Share Tools',
        subtitle: `${platformCount} platform${platformCount !== 1 ? 's' : ''}`
      };
    }
  }
});
