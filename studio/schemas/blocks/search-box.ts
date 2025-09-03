import { defineType } from 'sanity';

export default defineType({
  name: 'searchBox',
  title: 'Search Box',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the search box section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the search box section'
    },
    {
      name: 'placeholder',
      title: 'Placeholder Text',
      type: 'string',
      initialValue: 'Search...',
      description: 'Placeholder text for the search input'
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
      ],
      description: 'Search suggestions to display'
    },
    {
      name: 'showFilters',
      title: 'Show Filters',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show advanced filters option'
    },
    {
      name: 'showRecentSearches',
      title: 'Show Recent Searches',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show recent search history'
    },
    {
      name: 'showPopularSearches',
      title: 'Show Popular Searches',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show popular search suggestions'
    },
    {
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Large', value: 'large' },
          { title: 'Compact', value: 'compact' }
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
      suggestions: 'suggestions'
    },
    prepare({ title, suggestions }) {
      const suggestionCount = suggestions ? suggestions.length : 0;
      return {
        title: title || 'Search Box',
        subtitle: `${suggestionCount} suggestion${suggestionCount !== 1 ? 's' : ''}`
      };
    }
  }
});
