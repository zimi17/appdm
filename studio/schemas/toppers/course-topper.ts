import { defineType } from 'sanity';

export default defineType({
  name: 'courseTopper',
  title: 'Course Topper',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Course Title',
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
      name: 'courseInfo',
      title: 'Course Information',
      type: 'object',
      fields: [
        {
          name: 'duration',
          title: 'Duration',
          type: 'string',
          description: 'e.g., "3 months", "6 weeks"'
        },
        {
          name: 'level',
          title: 'Level',
          type: 'string',
          options: {
            list: [
              { title: 'Beginner', value: 'beginner' },
              { title: 'Intermediate', value: 'intermediate' },
              { title: 'Advanced', value: 'advanced' }
            ]
          }
        },
        {
          name: 'maxStudents',
          title: 'Max Students',
          type: 'number'
        },
        {
          name: 'startDate',
          title: 'Start Date',
          type: 'date'
        },
        {
          name: 'endDate',
          title: 'End Date',
          type: 'date'
        },
        {
          name: 'location',
          title: 'Location',
          type: 'string'
        },
        {
          name: 'instructor',
          title: 'Instructor',
          type: 'string'
        },
        {
          name: 'rating',
          title: 'Rating',
          type: 'number',
          validation: Rule => Rule.min(1).max(5),
          description: 'Rating from 1 to 5 stars'
        },
        {
          name: 'credits',
          title: 'Credits',
          type: 'number'
        },
        {
          name: 'language',
          title: 'Language',
          type: 'string'
        },
        {
          name: 'prerequisites',
          title: 'Prerequisites',
          type: 'array',
          of: [{ type: 'string' }]
        }
      ]
    },
    {
      name: 'image',
      title: 'Course Image',
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
          initialValue: 'Enroll Now'
        },
        {
          name: 'href',
          title: 'Link URL',
          type: 'url'
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
    },
    {
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Centered', value: 'centered' },
          { title: 'Split', value: 'split' }
        ]
      },
      initialValue: 'default'
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
      subtitle: 'courseInfo.duration',
      media: 'image'
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Course Topper',
        subtitle: subtitle || 'No duration specified',
        media: media
      };
    }
  }
});
