import { defineType } from 'sanity';

export default defineType({
  name: 'bigArtTopper',
  title: 'Big Art Topper',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'image',
      title: 'Background Image',
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
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'overlay',
      title: 'Overlay Settings',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Enable Overlay',
          type: 'boolean',
          initialValue: true
        },
        {
          name: 'opacity',
          title: 'Overlay Opacity',
          type: 'number',
          initialValue: 0.4,
          validation: Rule => Rule.min(0).max(1)
        },
        {
          name: 'color',
          title: 'Overlay Color',
          type: 'string',
          initialValue: 'black'
        }
      ]
    },
    {
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Centered', value: 'centered' },
          { title: 'Left Aligned', value: 'left-aligned' },
          { title: 'Right Aligned', value: 'right-aligned' }
        ]
      },
      initialValue: 'default'
    },
    {
      name: 'height',
      title: 'Height',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
          { title: 'Full Screen', value: 'full' }
        ]
      },
      initialValue: 'large'
    },
    {
      name: 'showScrollIndicator',
      title: 'Show Scroll Indicator',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'parallax',
      title: 'Parallax Effect',
      type: 'boolean',
      initialValue: false
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
      media: 'image'
    },
    prepare({ title, media }) {
      return {
        title: title || 'Big Art Topper',
        subtitle: 'Hero section with large background image',
        media: media
      };
    }
  }
});
