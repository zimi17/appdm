import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'richText',
  title: 'Rich Text',
  type: 'object',
  description: 'Displays a single-column narrative text with rich formatting options and optional embedded images.',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Number', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    name: 'title',
                    type: 'string',
                    title: 'Title',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Important for accessibility and SEO.',
              validation: (rule) => rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Center', value: 'center'},
        ],
      },
      initialValue: 'center',
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({content}) {
      const block = content?.find((block: any) => block._type === 'block');
      const text = block?.children?.map((child: any) => child.text).join('') || '';
      return {
        title: 'Rich Text',
        subtitle: text.length > 50 ? `${text.substring(0, 50)}...` : text,
        media: '📝',
      };
    },
  },
})
