import { defineType } from 'sanity';

export default defineType({
  name: 'tagArchive',
  title: 'Tag Archive',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the tag section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the tag section'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'id',
              title: 'Tag ID',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'name',
              title: 'Tag Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'count',
              title: 'Item Count',
              type: 'number',
              initialValue: 0,
              description: 'Number of items associated with this tag'
            },
            {
              name: 'color',
              title: 'Custom Color',
              type: 'string',
              description: 'Custom color for the tag (hex code)'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              description: 'Optional description for the tag'
            }
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'count'
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Untitled Tag',
                subtitle: `${subtitle || 0} items`
              };
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1),
      description: 'Collection of tags to display'
    },
    {
      name: 'variant',
      title: 'Display Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Tag Cloud', value: 'cloud' },
          { title: 'Tag List', value: 'list' },
          { title: 'Filter Tags', value: 'filter' }
        ]
      },
      initialValue: 'cloud',
      description: 'How to display the tags'
    },
    {
      name: 'showCount',
      title: 'Show Count',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to display the count of items for each tag'
    },
    {
      name: 'showDescription',
      title: 'Show Description',
      type: 'boolean',
      initialValue: false,
      description: 'Whether to show tag descriptions on hover'
    },
    {
      name: 'maxTags',
      title: 'Maximum Tags',
      type: 'number',
      description: 'Maximum number of tags to display (leave empty for all)'
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
      tags: 'tags',
      variant: 'variant'
    },
    prepare({ title, tags, variant }) {
      const tagCount = tags ? tags.length : 0;
      return {
        title: title || 'Tag Archive',
        subtitle: `${tagCount} tag${tagCount !== 1 ? 's' : ''} - ${variant || 'cloud'} variant`
      };
    }
  }
});
