import { defineType } from 'sanity';

export default defineType({
  name: 'eventTopper',
  title: 'Event Topper',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
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
      name: 'eventInfo',
      title: 'Event Information',
      type: 'object',
      fields: [
        {
          name: 'startDate',
          title: 'Start Date',
          type: 'date',
          validation: Rule => Rule.required()
        },
        {
          name: 'endDate',
          title: 'End Date',
          type: 'date'
        },
        {
          name: 'startTime',
          title: 'Start Time',
          type: 'string',
          description: 'Format: HH:MM (24-hour)'
        },
        {
          name: 'endTime',
          title: 'End Time',
          type: 'string',
          description: 'Format: HH:MM (24-hour)'
        },
        {
          name: 'location',
          title: 'Location',
          type: 'string'
        },
        {
          name: 'venue',
          title: 'Venue',
          type: 'string'
        },
        {
          name: 'maxAttendees',
          title: 'Max Attendees',
          type: 'number'
        },
        {
          name: 'currentAttendees',
          title: 'Current Attendees',
          type: 'number'
        },
        {
          name: 'price',
          title: 'Price',
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
              name: 'type',
              title: 'Price Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Free', value: 'free' },
                  { title: 'Paid', value: 'paid' },
                  { title: 'Donation', value: 'donation' }
                ]
              },
              initialValue: 'free'
            }
          ]
        },
        {
          name: 'category',
          title: 'Category',
          type: 'string'
        },
        {
          name: 'organizer',
          title: 'Organizer',
          type: 'string'
        },
        {
          name: 'contact',
          title: 'Contact Information',
          type: 'object',
          fields: [
            {
              name: 'email',
              title: 'Email',
              type: 'string'
            },
            {
              name: 'phone',
              title: 'Phone',
              type: 'string'
            },
            {
              name: 'website',
              title: 'Website',
              type: 'url'
            }
          ]
        },
        {
          name: 'registration',
          title: 'Registration',
          type: 'object',
          fields: [
            {
              name: 'required',
              title: 'Registration Required',
              type: 'boolean',
              initialValue: false
            },
            {
              name: 'deadline',
              title: 'Registration Deadline',
              type: 'date'
            },
            {
              name: 'url',
              title: 'Registration URL',
              type: 'url'
            }
          ]
        }
      ]
    },
    {
      name: 'image',
      title: 'Event Image',
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
          initialValue: 'Register Now'
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
      subtitle: 'eventInfo.startDate',
      media: 'image'
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Event Topper',
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'No date specified',
        media: media
      };
    }
  }
});
