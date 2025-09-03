import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'missionTopper',
  title: 'Mission Topper',
  type: 'object',
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
            {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
            {name: 'imageUrl', title: 'Legacy Image URL', type: 'string', hidden: true},
            {name: 'imageHint', title: 'Legacy Image Hint', type: 'string', hidden: true},
          ],
        },
      ],
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
        ],
      },
      initialValue: 'light',
    }),
  ],
  preview: {
    select: {
      titleParts: 'titleParts',
      slides: 'slides',
    },
    prepare({titleParts, slides}: any) {
      const titleText = titleParts?.map((part: any) => part.text).join(' ') || 'Mission Topper';
      const slideCount = slides?.length || 0;
      return {
        title: titleText,
        subtitle: `${slideCount} slide${slideCount !== 1 ? 's' : ''}`,
      };
    },
  },
})