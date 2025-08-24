import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'accordionSection',
  title: 'Accordion Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [
            {
                type: 'object',
                name: 'accordionItem',
                fields: [
                    defineField({name: 'title', type: 'string'}),
                    defineField({name: 'description', type: 'text'}),
                    defineField({name: 'credits', type: 'string'}),
                ],
                preview: {
                    select: {
                        title: 'title',
                        subtitle: 'credits'
                    }
                }
            }
        ]
    }),
    defineField({name: 'linkText', title: 'Link Text', type: 'string'}),
    defineField({name: 'linkHref', title: 'Link Href', type: 'string'}),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare({title, items}) {
      const count = items?.length || 0
      return {
        title: title || 'Accordion Section',
        subtitle: `${count} item(s)`,
      }
    },
  },
})
