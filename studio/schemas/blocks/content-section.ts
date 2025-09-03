import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contentSection',
  title: 'Content Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'},
      ],
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
          {title: 'Accent', value: 'accent'},
        ],
      },
      initialValue: 'default',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Full Width', value: 'full'},
          {title: 'Contained', value: 'contained'},
          {title: 'Narrow', value: 'narrow'},
        ],
      },
      initialValue: 'contained',
    }),
    defineField({
      name: 'padding',
      title: 'Padding',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Small', value: 'small'},
          {title: 'Medium', value: 'medium'},
          {title: 'Large', value: 'large'},
        ],
      },
      initialValue: 'medium',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      theme: 'theme',
    },
    prepare({title, subtitle, theme}) {
      return {
        title: title || 'Content Section',
        subtitle: subtitle ? `${subtitle} (${theme})` : theme,
        media: '📄',
      }
    }
  }
})
