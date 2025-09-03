export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  __experimental_omnisearch_visibility: false,
  fields: [
    {
      name: 'title',
      title: 'Navigation Title',
      type: 'string',
      initialValue: 'Main Navigation'
    },
    
    {
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'menuItem',
          title: 'Menu Item',
          fields: [
            {
              name: 'id',
              title: 'Menu ID',
              type: 'string',
              description: 'Unique identifier for this menu item'
            },
            {
              name: 'title',
              title: 'Menu Title',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Menu Description',
              type: 'text',
              rows: 2
            },
            {
              name: 'href',
              title: 'Menu URL',
              type: 'string'
            },
                    // Backwards-compatible legacy image fields (some documents still contain these)
                    { name: 'imageUrl', title: 'Legacy Image URL', type: 'string', hidden: true },
                    { name: 'imageHint', title: 'Legacy Image Hint', type: 'string', hidden: true },
            {
              name: 'sublinks',
              title: 'Sub Menu Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'subMenuItem',
                  title: 'Sub Menu Item',
                  fields: [
                    {
                      name: 'id',
                      title: 'Sub Menu ID',
                      type: 'string'
                    },
                    {
                      name: 'title',
                      title: 'Sub Menu Title',
                      type: 'string'
                    },
                    {
                      name: 'description',
                      title: 'Sub Menu Description',
                      type: 'text',
                      rows: 2
                    },
                    {
                      name: 'href',
                      title: 'Sub Menu URL',
                      type: 'string'
                    },
                    // Backwards-compatible legacy image fields on sub menu items
                    { name: 'imageUrl', title: 'Legacy Image URL', type: 'string', hidden: true },
                    { name: 'imageHint', title: 'Legacy Image Hint', type: 'string', hidden: true },
                    {
                      name: 'sublinks',
                      title: 'Sub-Sub Menu Items',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          name: 'subSubMenuItem',
                          title: 'Sub-Sub Menu Item',
                          fields: [
                            {
                              name: 'id',
                              title: 'Sub-Sub Menu ID',
                              type: 'string'
                            },
                            {
                              name: 'title',
                              title: 'Sub-Sub Menu Title',
                              type: 'string'
                            },
                            {
                              name: 'href',
                              title: 'Sub-Sub Menu URL',
                              type: 'string'
                            }
                            ,{ name: 'imageUrl', title: 'Legacy Image URL', type: 'string', hidden: true },
                            { name: 'imageHint', title: 'Legacy Image Hint', type: 'string', hidden: true }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
