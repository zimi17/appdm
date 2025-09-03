import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'peopleListing',
  title: 'People Listing',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'people',
      title: 'People',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Full Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Job Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'department',
              title: 'Department',
              type: 'string',
            }),
            defineField({
              name: 'bio',
              title: 'Biography',
              type: 'text',
            }),
            defineField({
              name: 'expertise',
              title: 'Areas of Expertise',
              type: 'array',
              of: [{type: 'string'}],
              options: {
                layout: 'tags',
              },
            }),
            defineField({
              name: 'email',
              title: 'Email Address',
              type: 'string',
            }),
            defineField({
              name: 'phone',
              title: 'Phone Number',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Profile Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'hint',
                  title: 'AI Hint',
                  type: 'string',
                }),
              ],
            }),
            defineField({
              name: 'links',
              title: 'Additional Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Link Text',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'href',
                      title: 'Link URL',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'variant',
                      title: 'Button Style',
                      type: 'string',
                      options: {
                        list: [
                          {title: 'Primary', value: 'primary'},
                          {title: 'Secondary', value: 'secondary'},
                          {title: 'Outline', value: 'outline'},
                        ],
                      },
                      initialValue: 'outline',
                    }),
                  ],
                  preview: {
                    select: {
                      text: 'text',
                      href: 'href',
                    },
                    prepare({text, href}) {
                      return {
                        title: text || 'Untitled Link',
                        subtitle: href,
                        media: '🔗',
                      }
                    },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: {
              name: 'name',
              title: 'title',
              department: 'department',
            },
            prepare({name, title, department}) {
              return {
                title: name || 'Untitled Person',
                subtitle: `${title}${department ? ` - ${department}` : ''}`,
                media: '👤',
              }
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'showBio',
      title: 'Show Biography',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showContact',
      title: 'Show Contact Information',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'showExpertise',
      title: 'Show Areas of Expertise',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'variant',
      title: 'Display Variant',
      type: 'string',
      options: {
        list: [
          {title: 'Grid Cards', value: 'grid'},
          {title: 'List View', value: 'list'},
          {title: 'Compact Cards', value: 'cards'},
        ],
      },
      initialValue: 'grid',
    }),
    defineField({
      name: 'columns',
      title: 'Number of Columns',
      type: 'number',
      options: {
        list: [
          {title: '2 Columns', value: 2},
          {title: '3 Columns', value: 3},
          {title: '4 Columns', value: 4},
        ],
      },
      initialValue: 3,
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
  ],
  preview: {
    select: {
      title: 'title',
      peopleCount: 'people',
      variant: 'variant',
    },
    prepare({title, peopleCount, variant}) {
      return {
        title: title || 'People Listing',
        subtitle: `${peopleCount?.length || 0} people (${variant})`,
        media: '👥',
      }
    },
  },
})
