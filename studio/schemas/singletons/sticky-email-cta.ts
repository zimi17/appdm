import { defineType } from 'sanity';

export default defineType({
  name: 'stickyEmailCta',
  title: 'Sticky Email CTA',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Stay Updated',
      description: 'Title for the sticky email CTA'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      initialValue: 'Get the latest news and updates delivered to your inbox.',
      description: 'Description text for the sticky email CTA'
    },
    {
      name: 'placeholder',
      title: 'Email Placeholder',
      type: 'string',
      initialValue: 'Enter your email address',
      description: 'Placeholder text for the email input'
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Subscribe',
      description: 'Text for the subscribe button'
    },
    {
      name: 'successMessage',
      title: 'Success Message',
      type: 'string',
      initialValue: 'Thank you for subscribing!',
      description: 'Message shown after successful subscription'
    },
    {
      name: 'errorMessage',
      title: 'Error Message',
      type: 'string',
      initialValue: 'Something went wrong. Please try again.',
      description: 'Message shown when subscription fails'
    },
    {
      name: 'triggerScroll',
      title: 'Trigger Scroll Position',
      type: 'number',
      initialValue: 300,
      description: 'Scroll position (in pixels) when the CTA should appear'
    },
    {
      name: 'showCloseButton',
      title: 'Show Close Button',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show the close button'
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      options: {
        list: [
          { title: 'Bottom Left', value: 'bottom-left' },
          { title: 'Bottom Right', value: 'bottom-right' },
          { title: 'Bottom Center', value: 'bottom-center' }
        ]
      },
      initialValue: 'bottom-right',
      description: 'Position of the sticky CTA on the screen'
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
      position: 'position'
    },
    prepare({ title, position }) {
      return {
        title: title || 'Sticky Email CTA',
        subtitle: `Position: ${position || 'bottom-right'}`
      };
    }
  }
});
