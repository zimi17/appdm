import { defineType } from 'sanity';

export default defineType({
  name: 'searchTopper',
  title: 'Search Topper',
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
      name: 'placeholder',
      title: 'Search Placeholder',
      type: 'string',
      initialValue: 'Search...'
    },
    {
      name: 'suggestions',
      title: 'Search Suggestions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Suggestion Text',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'type',
              title: 'Suggestion Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Recent', value: 'recent' },
                  { title: 'Popular', value: 'popular' },
                  { title: 'Result', value: 'result' }
                ]
              },
              initialValue: 'popular'
            },
            {
              name: 'href',
              title: 'Link URL',
              type: 'url'
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Emoji or icon character'
            }
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'type'
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Untitled Suggestion',
                subtitle: subtitle || 'No type'
              };
            }
          }
        }
      ]
    },
    {
      name: 'filters',
      title: 'Search Filters',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Filter Label',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'type',
              title: 'Filter Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Select', value: 'select' },
                  { title: 'Checkbox', value: 'checkbox' },
                  { title: 'Range', value: 'range' }
                ]
              },
              initialValue: 'select'
            },
            {
              name: 'options',
              title: 'Filter Options',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'value',
                      title: 'Value',
                      type: 'string',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: Rule => Rule.required()
                    }
                  ]
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'type'
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Untitled Filter',
                subtitle: subtitle || 'No type'
              };
            }
          }
        }
      ]
    },
    {
      name: 'showFilters',
      title: 'Show Filters',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'showSuggestions',
      title: 'Show Suggestions',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'showRecentSearches',
      title: 'Show Recent Searches',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'showPopularSearches',
      title: 'Show Popular Searches',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'backgroundImage',
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
          { title: 'Minimal', value: 'minimal' }
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
      suggestions: 'suggestions',
      filters: 'filters'
    },
    prepare({ title, suggestions, filters }) {
      const suggestionCount = suggestions ? suggestions.length : 0;
      const filterCount = filters ? filters.length : 0;
      return {
        title: title || 'Search Topper',
        subtitle: `${suggestionCount} suggestions, ${filterCount} filters`
      };
    }
  }
});
