import { defineType } from 'sanity';

export default defineType({
  name: 'newsletterSignup',
  title: 'Newsletter Signup',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the newsletter signup section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the newsletter signup section'
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
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Inline', value: 'inline' },
          { title: 'Card', value: 'card' }
        ]
      },
      initialValue: 'default'
    },
    {
      name: 'showIcon',
      title: 'Show Icon',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show the email icon'
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
      buttonText: 'buttonText'
    },
    prepare({ title, buttonText }) {
      return {
        title: title || 'Newsletter Signup',
        subtitle: buttonText || 'Subscribe'
      };
    }
  }
});
