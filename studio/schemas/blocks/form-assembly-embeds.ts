import { defineType } from 'sanity';

export default defineType({
  name: 'formAssemblyEmbeds',
  title: 'Form Assembly Embeds',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the form section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the form section'
    },
    {
      name: 'formId',
      title: 'Form ID',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Unique identifier for the form'
    },
    {
      name: 'formUrl',
      title: 'Form URL',
      type: 'url',
      validation: Rule => Rule.required().uri({
        scheme: ['http', 'https']
      }),
      description: 'URL to the Form Assembly form'
    },
    {
      name: 'height',
      title: 'Form Height',
      type: 'string',
      initialValue: '600px',
      description: 'Height of the form iframe (e.g., 600px, 100vh)'
    },
    {
      name: 'width',
      title: 'Form Width',
      type: 'string',
      initialValue: '100%',
      description: 'Width of the form iframe (e.g., 100%, 800px)'
    },
    {
      name: 'showTitle',
      title: 'Show Title',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to display the title above the form'
    },
    {
      name: 'showDescription',
      title: 'Show Description',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to display the description above the form'
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
      formId: 'formId',
      formUrl: 'formUrl'
    },
    prepare({ title, formId, formUrl }) {
      return {
        title: title || 'Form Assembly Embed',
        subtitle: `ID: ${formId || 'No ID'} - ${formUrl || 'No URL'}`
      };
    }
  }
});
