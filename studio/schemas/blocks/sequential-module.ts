import { defineType } from 'sanity';

export default defineType({
  name: 'sequentialModule',
  title: 'Sequential Module',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the sequential module section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the sequential module section'
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Step Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Step Description',
              type: 'text',
              rows: 2
            },
            {
              name: 'content',
              title: 'Step Content',
              type: 'text',
              rows: 4
            },
            {
              name: 'image',
              title: 'Step Image',
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
              name: 'optional',
              title: 'Optional Step',
              type: 'boolean',
              initialValue: false,
              description: 'Mark this step as optional'
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description'
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Untitled Step',
                subtitle: subtitle || 'No description'
              };
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1),
      description: 'Sequential steps to display'
    },
    {
      name: 'variant',
      title: 'Layout Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Vertical', value: 'vertical' },
          { title: 'Horizontal', value: 'horizontal' },
          { title: 'Accordion', value: 'accordion' }
        ]
      },
      initialValue: 'vertical'
    },
    {
      name: 'showProgress',
      title: 'Show Progress Bar',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show progress indicator'
    },
    {
      name: 'showNumbers',
      title: 'Show Step Numbers',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show step numbers'
    },
    {
      name: 'allowSkip',
      title: 'Allow Skip',
      type: 'boolean',
      initialValue: false,
      description: 'Whether to allow skipping steps'
    },
    {
      name: 'autoAdvance',
      title: 'Auto Advance',
      type: 'boolean',
      initialValue: false,
      description: 'Whether to automatically advance steps'
    },
    {
      name: 'autoAdvanceDelay',
      title: 'Auto Advance Delay (ms)',
      type: 'number',
      initialValue: 3000,
      description: 'Time between auto advances in milliseconds'
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
      steps: 'steps'
    },
    prepare({ title, steps }) {
      const stepCount = steps ? steps.length : 0;
      return {
        title: title || 'Sequential Module',
        subtitle: `${stepCount} step${stepCount !== 1 ? 's' : ''}`
      };
    }
  }
});
