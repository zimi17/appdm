import { defineType } from 'sanity';

export default defineType({
  name: 'programTopper',
  title: 'Program Topper',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Program Title',
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
      name: 'programInfo',
      title: 'Program Information',
      type: 'object',
      fields: [
        {
          name: 'duration',
          title: 'Duration',
          type: 'string',
          description: 'e.g., "2 years", "18 months"'
        },
        {
          name: 'level',
          title: 'Level',
          type: 'string',
          options: {
            list: [
              { title: 'Undergraduate', value: 'undergraduate' },
              { title: 'Graduate', value: 'graduate' },
              { title: 'Certificate', value: 'certificate' },
              { title: 'Diploma', value: 'diploma' }
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
          name: 'director',
          title: 'Program Director',
          type: 'string'
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
          name: 'format',
          title: 'Format',
          type: 'string',
          options: {
            list: [
              { title: 'Full-time', value: 'full-time' },
              { title: 'Part-time', value: 'part-time' },
              { title: 'Online', value: 'online' },
              { title: 'Hybrid', value: 'hybrid' }
            ]
          }
        },
        {
          name: 'tuition',
          title: 'Tuition',
          type: 'object',
          fields: [
            {
              name: 'amount',
              title: 'Amount',
              type: 'number'
            },
            {
              name: 'currency',
              title: 'Currency',
              type: 'string',
              initialValue: 'IDR'
            },
            {
              name: 'period',
              title: 'Period',
              type: 'string',
              description: 'e.g., "per semester", "per year"'
            }
          ]
        },
        {
          name: 'outcomes',
          title: 'Program Outcomes',
          type: 'array',
          of: [{ type: 'string' }]
        },
        {
          name: 'requirements',
          title: 'Requirements',
          type: 'array',
          of: [{ type: 'string' }]
        }
      ]
    },
    {
      name: 'image',
      title: 'Program Image',
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
          initialValue: 'Apply Now'
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
      subtitle: 'programInfo.level',
      media: 'image'
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Program Topper',
        subtitle: subtitle || 'No level specified',
        media: media
      };
    }
  }
});
