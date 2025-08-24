import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity-plugin-presentation'
import {visionTool} from '@sanity/vision'
import wawasan from './schemas/wawasan'
import page from './schemas/page'
import hero from './schemas/blocks/hero'
import twoColumnContent from './schemas/blocks/two-column-content'
import cardGrid from './schemas/blocks/card-grid'
import accordionSection from './schemas/blocks/accordion-section'
import promoBar from './schemas/blocks/promo-bar'

const projectId = '3966wvah';
const dataset = 'production';

export default defineConfig({
  name: 'default',
  title: 'STIE Dwimulya Website Studio',
  basePath: '/studio',
  projectId: projectId, 
  dataset: dataset,
  plugins: [
    structureTool(), 
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: typeof(window) === 'undefined' ? 'http://localhost:9002' : window.location.origin,
        draftMode: {
          enable: '/api/draft',
        },
      },
    }),
  ],
  schema: {
    types: [
        wawasan, 
        page,
        hero,
        twoColumnContent,
        cardGrid,
        accordionSection,
        promoBar
    ],
  },
})
