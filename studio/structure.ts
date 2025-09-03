import { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Homepage Singleton
      S.listItem()
        .title('Homepage')
        .icon(() => '🏠')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
            .title('Homepage')
        ),
      
      // Site Settings Singleton
      S.listItem()
        .title('Site Settings')
        .icon(() => '⚙️')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),
      
      // Navigation Singleton
      S.listItem()
        .title('Navigation')
        .icon(() => '🧭')
        .child(
          S.document()
            .schemaType('navigation')
            .documentId('navigation')
            .title('Navigation')
        ),
      
      S.divider(),
      
      // Other document types
      S.listItem()
        .title('Pages')
        .icon(() => '📄')
        .child(
          S.documentTypeList('page').title('Pages')
        ),
      
      S.listItem()
        .title('Wawasan & Penelitian')
        .icon(() => '📰') 
        .child(
          S.documentTypeList('wawasan').title('Wawasan & Penelitian')
        ),
    ])
