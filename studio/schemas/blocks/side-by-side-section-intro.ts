import { defineType } from 'sanity';

export default defineType({
  name: 'sideBySideSectionIntro',
  title: 'Side By Side Section Intro',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the section'
    },
    {
      name: 'leftContent',
      title: 'Left Content',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2
        },
        {
          name: 'content',
          title: 'Content',
          type: 'text',
          rows: 4
        },
        {
          name: 'image',
          title: 'Image',
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
          name: 'cta',
          title: 'Call to Action',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Button Text',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'href',
              title: 'Link URL',
              type: 'url',
              validation: Rule => Rule.required()
            },
            { name: 'imageUrl', title: 'Legacy Image URL', type: 'string', hidden: true },
            { name: 'imageHint', title: 'Legacy Image Hint', type: 'string', hidden: true },
            {
              name: 'variant',
              title: 'Button Variant',
              type: 'string',
              options: {
                list: [
                  { title: 'Primary', value: 'primary' },
                  { title: 'Secondary', value: 'secondary' },
                  { title: 'Outline', value: 'outline' }
                ]
              },
              initialValue: 'primary'
            }
          ]
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'rightContent',
      title: 'Right Content',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2
        },
        {
          name: 'content',
          title: 'Content',
          type: 'text',
          rows: 4
        },
        {
          name: 'image',
          title: 'Image',
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
          name: 'cta',
          title: 'Call to Action',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Button Text',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'href',
              title: 'Link URL',
              type: 'url',
              validation: Rule => Rule.required()
            },
            {
              name: 'variant',
              title: 'Button Variant',
              type: 'string',
              options: {
                list: [
                  { title: 'Primary', value: 'primary' },
                  { title: 'Secondary', value: 'secondary' },
                  { title: 'Outline', value: 'outline' }
                ]
              },
              initialValue: 'primary'
            }
          ]
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Ordered', value: 'ordered' },
          { title: 'Unordered', value: 'unordered' },
          { title: 'Ordered Wide', value: 'ordered-wide' },
          { title: 'Unordered Center', value: 'unordered-center' },
          { title: 'Unordered No Description', value: 'unordered-no-description' },
          { title: 'Unordered Subtitle', value: 'unordered-subtitle' }
        ]
      },
      initialValue: 'unordered'
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
      leftTitle: 'leftContent.title',
      rightTitle: 'rightContent.title'
    },
    prepare({ title, leftTitle, rightTitle }) {
      return {
        title: title || 'Side By Side Section Intro',
        subtitle: `${leftTitle || 'Left'} | ${rightTitle || 'Right'}`
      };
    }
  }
});
