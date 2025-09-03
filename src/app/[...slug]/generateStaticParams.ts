import { getAllPublishedPages } from '@/lib/sanity-queries';

export async function generateStaticParams() {
  try {
    const pages = await getAllPublishedPages();
    
    return pages.map((page) => {
      const slugArray = page.slug.current.split('/').filter(Boolean);
      return {
        slug: slugArray,
      };
    });
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}
