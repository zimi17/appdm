export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  __experimental_omnisearch_visibility: false,
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      initialValue: 'Site Settings'
    },
    
    // Contact Information
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'institutionName',
          title: 'Institution Name',
          type: 'string',
          initialValue: 'STIE Dwimulya'
        },
        {
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 2,
          initialValue: 'Jl. Kav. Sindangsari B1, Kec. Pabuaran, Serang 42163, Banten'
        },
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string'
        },
        {
          name: 'email',
          title: 'Email',
          type: 'email'
        },
        {
          name: 'website',
          title: 'Website URL',
          type: 'url'
        }
      ]
    },

    // Social Media Links
    {
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url'
        },
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url'
        },
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url'
        },
        {
          name: 'youtube',
          title: 'YouTube URL',
          type: 'url'
        },
        {
          name: 'tiktok',
          title: 'TikTok URL',
          type: 'url'
        }
      ]
    },

    // Header Settings
    {
      name: 'headerSettings',
      title: 'Header Settings',
      type: 'object',
      fields: [
        {
          name: 'hotLinks',
          title: 'Hot Links (Quick Navigation)',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'text', title: 'Link Text', type: 'string' },
                { name: 'href', title: 'Link URL', type: 'string' },
                // Backwards-compatible legacy image fields
                { name: 'imageUrl', title: 'Legacy Image URL', type: 'string', hidden: true },
                { name: 'imageHint', title: 'Legacy Image Hint', type: 'string', hidden: true }
              ]
            }
          ]
        },
        {
          name: 'ctaButton',
          title: 'CTA Button',
          type: 'object',
          fields: [
            { name: 'text', title: 'Button Text', type: 'string', initialValue: 'Daftar' },
            { name: 'href', title: 'Button URL', type: 'string', initialValue: '/pendaftaran' }
          ]
        },
        {
          name: 'searchSettings',
          title: 'Search Settings',
          type: 'object',
          fields: [
            { name: 'placeholder', title: 'Search Placeholder', type: 'string', initialValue: 'Pencarian' },
            { name: 'quickLinkText', title: 'Quick Link Text', type: 'string', initialValue: 'A to Z index' },
            { name: 'quickLinkHref', title: 'Quick Link URL', type: 'string', initialValue: '#' }
          ]
        }
      ]
    },

    // Global Alerts/Notifications
    {
      name: 'globalAlert',
      title: 'Global Alert/Notification',
      type: 'object',
      fields: [
        {
          name: 'isEnabled',
          title: 'Enable Alert',
          type: 'boolean',
          initialValue: true
        },
        {
          name: 'title',
          title: 'Alert Title',
          type: 'string',
          initialValue: 'Pemberitahuan'
        },
        {
          name: 'description',
          title: 'Alert Description',
          type: 'text',
          rows: 2,
          initialValue: 'Informasi penting.'
        },
        {
          name: 'linkText',
          title: 'Alert Link Text',
          type: 'string',
          initialValue: 'Kalender Akademik tahun ajaran 2025/2026 telah disesuaikan. Pelajari untuk informasi terkini.'
        },
        {
          name: 'linkHref',
          title: 'Alert Link URL',
          type: 'string',
          initialValue: '/kalender-akademik'
        }
      ]
    },

    // Footer Settings
    {
      name: 'footerSettings',
      title: 'Footer Settings',
      type: 'object',
      fields: [
        {
          name: 'primaryCta',
          title: 'Primary CTA',
          type: 'object',
          fields: [
            { name: 'title', title: 'CTA Title', type: 'string', initialValue: 'Daftar Sekarang' },
            { name: 'description', title: 'CTA Description', type: 'text', rows: 2, initialValue: 'Mulai perjalanan Anda menuju karier yang pasti.' },
            { name: 'href', title: 'CTA URL', type: 'string', initialValue: '/pendaftaran' }
          ]
        },
        {
          name: 'footerBlocks',
          title: 'Footer Navigation Blocks',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Block Title', type: 'string' },
                {
                  name: 'items',
                  title: 'Navigation Items',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        { name: 'text', title: 'Link Text', type: 'string' },
                        { name: 'href', title: 'Link URL', type: 'string' },
                        { name: 'imageUrl', title: 'Legacy Image URL', type: 'string', hidden: true },
                        { name: 'imageHint', title: 'Legacy Image Hint', type: 'string', hidden: true }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'legalLinks',
          title: 'Legal Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'text', title: 'Link Text', type: 'string' },
                { name: 'href', title: 'Link URL', type: 'string' }
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
