import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cardGrid',
  title: 'Card Grid',
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
                fields: [
                    defineField({name: 'title', type: 'string'}),
                    defineField({name: 'description', type: 'text'}),
                    defineField({name: 'linkText', type: 'string'}),
                    defineField({name: 'href', type: 'string'}),
                    defineField({
                        name: 'image',
                        type: 'image',
                        fields: [{ name: 'hint', type: 'string'}]
                    }),
                    {name: 'imageUrl', title: 'Legacy Image URL', type: 'string', hidden: true},
                    {name: 'imageHint', title: 'Legacy Image Hint', type: 'string', hidden: true},
                ]
            }
        ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare({title, items}) {
      const count = items?.length || 0
      return {
        title: title || 'Card Grid',
        subtitle: `${count} item(s)`,
      }
    },
  },
})
