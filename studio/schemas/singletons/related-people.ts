import { defineType } from 'sanity';

export default defineType({
  name: 'relatedPeople',
  title: 'Related People',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the related people section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the related people section'
    },
    {
      name: 'people',
      title: 'People',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'title',
              title: 'Title/Position',
              type: 'string',
              description: 'e.g., "Professor", "Researcher", "Director"'
            },
            {
              name: 'department',
              title: 'Department',
              type: 'string',
              description: 'e.g., "Computer Science", "Business Administration"'
            },
            {
              name: 'bio',
              title: 'Bio',
              type: 'text',
              rows: 3,
              description: 'Short biography or description'
            },
            {
              name: 'image',
              title: 'Profile Image',
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
                }
              ]
            },
            {
              name: 'email',
              title: 'Email Address',
              type: 'string'
            },
            {
              name: 'phone',
              title: 'Phone Number',
              type: 'string'
            },
            {
              name: 'website',
              title: 'Website URL',
              type: 'url'
            },
            {
              name: 'socialLinks',
              title: 'Social Links',
              type: 'object',
              fields: [
                {
                  name: 'linkedin',
                  title: 'LinkedIn URL',
                  type: 'url'
                },
                {
                  name: 'twitter',
                  title: 'Twitter URL',
                  type: 'url'
                },
                {
                  name: 'research',
                  title: 'Research Profile URL',
                  type: 'url',
                  description: 'e.g., Google Scholar, ResearchGate'
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'title',
              media: 'image'
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled Person',
                subtitle: subtitle || 'No title',
                media: media
              };
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1),
      description: 'People to display in the related people section'
    },
    {
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Grid', value: 'grid' },
          { title: 'List', value: 'list' },
          { title: 'Compact', value: 'compact' }
        ]
      },
      initialValue: 'default'
    },
    {
      name: 'showBio',
      title: 'Show Bio',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show person biographies'
    },
    {
      name: 'showContact',
      title: 'Show Contact Information',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show contact information (email, phone, website)'
    },
    {
      name: 'showSocialLinks',
      title: 'Show Social Links',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show social media links'
    },
    {
      name: 'maxItems',
      title: 'Maximum Items',
      type: 'number',
      initialValue: 6,
      validation: Rule => Rule.min(1).max(12),
      description: 'Maximum number of people to display'
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
      people: 'people'
    },
    prepare({ title, people }) {
      const peopleCount = people ? people.length : 0;
      return {
        title: title || 'Related People',
        subtitle: `${peopleCount} person${peopleCount !== 1 ? 's' : ''}`
      };
    }
  }
});
