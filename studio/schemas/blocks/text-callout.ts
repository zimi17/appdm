import { defineType } from 'sanity';

export default defineType({
  name: 'textCallout',
  title: 'Text Callout',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the text callout section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the text callout section'
    },
    {
      name: 'text',
      title: 'Callout Text',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
      description: 'The main text content for the callout'
    },
    {
      name: 'variant',
      title: 'Callout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Info', value: 'info' },
          { title: 'Warning', value: 'warning' },
          { title: 'Success', value: 'success' },
          { title: 'Error', value: 'error' },
          { title: 'Tip', value: 'tip' },
          { title: 'Quote', value: 'quote' }
        ]
      },
      initialValue: 'info',
      description: 'Visual style variant for the callout'
    },
    {
      name: 'showIcon',
      title: 'Show Icon',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show the variant icon'
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
      text: 'text',
      variant: 'variant'
    },
    prepare({ title, text, variant }) {
      return {
        title: title || 'Text Callout',
        subtitle: `${variant || 'info'} - ${text ? text.substring(0, 100) + '...' : 'No text'}`
      };
    }
  }
});
