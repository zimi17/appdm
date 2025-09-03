import { defineType } from 'sanity';

export default defineType({
  name: 'truncator',
  title: 'Truncator',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the truncator section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the truncator section'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 8,
      validation: Rule => Rule.required(),
      description: 'The content to be truncated'
    },
    {
      name: 'maxLength',
      title: 'Maximum Length',
      type: 'number',
      initialValue: 200,
      description: 'Maximum number of characters to show before truncation'
    },
    {
      name: 'showMoreText',
      title: 'Show More Text',
      type: 'string',
      initialValue: 'Show more',
      description: 'Text for the show more button'
    },
    {
      name: 'showLessText',
      title: 'Show Less Text',
      type: 'string',
      initialValue: 'Show less',
      description: 'Text for the show less button'
    },
    {
      name: 'variant',
      title: 'Content Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Text', value: 'text' },
          { title: 'Paragraph', value: 'paragraph' },
          { title: 'List', value: 'list' },
          { title: 'Code', value: 'code' }
        ]
      },
      initialValue: 'text'
    },
    {
      name: 'preserveFormatting',
      title: 'Preserve Formatting',
      type: 'boolean',
      initialValue: false,
      description: 'Whether to preserve line breaks and formatting'
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
      content: 'content',
      maxLength: 'maxLength'
    },
    prepare({ title, content, maxLength }) {
      const truncatedContent = content && content.length > (maxLength || 200) 
        ? content.substring(0, maxLength || 200) + '...'
        : content;
      
      return {
        title: title || 'Truncator',
        subtitle: truncatedContent || 'No content'
      };
    }
  }
});
