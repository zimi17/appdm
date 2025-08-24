import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'twoColumnContent',
    title: 'Two Column Content',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'paragraphs',
            title: 'Paragraphs',
            type: 'array',
            of: [{type: 'text'}]
        }),
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({title}) {
            return {
                title: title || 'Two Column Content',
                subtitle: 'Two Column Content'
            }
        }
    }
})
