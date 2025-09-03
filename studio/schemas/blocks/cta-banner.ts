import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ctaBanner',
  title: 'CTA Banner',
  type: 'object',
  description: 'Flexible CTA with styles for various text and asset options.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Button URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ctaStyle',
      title: 'CTA Style',
      type: 'string',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Outline', value: 'outline'},
        ],
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for accessibility and SEO.',
        },
      ],
    }),
    defineField({
      name: 'colorTheme',
      title: 'Color Theme',
      type: 'string',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Dark', value: 'dark'},
          {title: 'Light', value: 'light'},
        ],
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Text Only', value: 'text'},
          {title: 'Text with Image', value: 'text-image'},
          {title: 'Full Background', value: 'full-background'},
        ],
      },
      initialValue: 'text',
    }),
    defineField({
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Center', value: 'center'},
          {title: 'Wide', value: 'wide'},
          {title: 'Full', value: 'full'},
        ],
      },
      initialValue: 'center',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      ctaText: 'ctaText',
      image: 'image',
    },
    prepare({title, subtitle, ctaText, image}) {
      return {
        title: title || 'CTA Banner',
        subtitle: subtitle || `Button: ${ctaText}`,
        media: image || '📢',
      };
    },
  },
})
