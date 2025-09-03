import { MetadataRoute } from 'next'
import { getAllPublishedPages } from '@/lib/sanity-queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stiedwimulya.ac.id'
  
  try {
    const pages = await getAllPublishedPages()
    
    const pageUrls = pages.map((page) => ({
      url: `${baseUrl}/${page.slug.current}`,
      lastModified: page.updatedAt ? new Date(page.updatedAt) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: page.slug.current === 'home' ? 1 : 0.8,
    }))

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      ...pageUrls,
    ]
  } catch (error) {
    console.error('Failed to generate sitemap:', error)
    
    // Fallback to basic sitemap
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ]
  }
}
