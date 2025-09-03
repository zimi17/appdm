'use server';

import { homePageData } from '@/app/home-data';
import { mockNews } from '@/app/news-events/news-events-data';
import { type ArticleTeaseProps } from '@/components/primitives/article-tease/types';
import { searchSanityContent, SearchableContent } from '@/lib/sanity-queries';
import { urlFor } from '@/lib/sanity-client';

interface SearchResult {
    results: ArticleTeaseProps[],
    totalHits: number;
}

// Simple in-memory cache for search results (server-side only)
const searchCache = new Map<string, { result: SearchResult; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Transform Sanity search result to ArticleTeaseProps format
function transformSanityResult(item: SearchableContent): ArticleTeaseProps {
  const baseResult: ArticleTeaseProps = {
    type: 'Article',
    title: item.title || 'Untitled',
    tease: item.description || item.meta || item.tease || '',
    link: item.href || '#',
  };

  // Add overline based on content type
  if (item._type === 'wawasan') {
    baseResult.overline = { label: item.overline || 'Wawasan & Penelitian' };
  } else if (item._type === 'page') {
    baseResult.overline = { label: 'Halaman' };
  } else if (item._type === 'homepage') {
    baseResult.overline = { label: 'Halaman Utama' };
  }

  // Add byline with publication date if available
  if (item.publishedAt) {
    baseResult.byline = {
      publicationDate: item.publishedAt
    };
  }

  // Add image if available
  if (item.image) {
    try {
      baseResult.image = {
        src: urlFor(item.image).width(400).height(300).url(),
        alt: item.title || 'Search result image',
        hint: 'search-result'
      };
    } catch (error) {
      console.warn('Failed to process image for search result:', error);
    }
  }

  return baseResult;
}

// Fallback search using mock data when Sanity is unavailable
function fallbackSearch(query: string): ArticleTeaseProps[] {
  const lowerCaseQuery = query.toLowerCase();
  const allResults: ArticleTeaseProps[] = [];

  // 1. Search in Home Page Data
  if (homePageData.heroStatement.title.toLowerCase().includes(lowerCaseQuery) ||
      homePageData.heroStatement.description.toLowerCase().includes(lowerCaseQuery)) {
    allResults.push({
      type: 'Article',
      title: homePageData.heroStatement.title,
      tease: homePageData.heroStatement.description,
      link: '/',
      overline: { label: 'Halaman Utama' },
    });
  }

  // 2. Search in News and Events data
  mockNews.forEach(news => {
      if(news.title.toLowerCase().includes(lowerCaseQuery) ||
         news.description.toLowerCase().includes(lowerCaseQuery)) {
        allResults.push({
            type: 'Article',
            title: news.title,
            tease: news.description,
            link: `/news-events/${news.id}`,
            overline: { label: news.category },
            byline: { publicationDate: "2024-08-15T12:00:00Z" }
        });
      }
  });

  return allResults;
}

export async function searchContent(query: string): Promise<SearchResult> {
  // Check cache first
  const cacheKey = query.toLowerCase().trim();
  const cachedResult = searchCache.get(cacheKey);

  if (cachedResult && (Date.now() - cachedResult.timestamp) < CACHE_DURATION) {
    return cachedResult.result;
  }

  try {
    // First, try to search using Sanity
    const sanityResults = await searchSanityContent(query);

    if (sanityResults.results.length > 0) {
      // Transform Sanity results to ArticleTeaseProps format
      const transformedResults = sanityResults.results.map(transformSanityResult);

      const result = {
        results: transformedResults,
        totalHits: sanityResults.totalHits,
      };

      // Cache the result
      searchCache.set(cacheKey, { result, timestamp: Date.now() });

      return result;
    }

    // If no Sanity results, fall back to mock data search
    console.log('No results from Sanity, falling back to mock data search');
    const fallbackResults = fallbackSearch(query);

    const result = {
      results: fallbackResults,
      totalHits: fallbackResults.length,
    };

    // Cache the fallback result too
    searchCache.set(cacheKey, { result, timestamp: Date.now() });

    return result;

  } catch (error) {
    console.error('Error searching with Sanity, falling back to mock data:', error);

    // Fallback to mock data search on error
    const fallbackResults = fallbackSearch(query);

    const result = {
      results: fallbackResults,
      totalHits: fallbackResults.length,
    };

    // Cache the fallback result
    searchCache.set(cacheKey, { result, timestamp: Date.now() });

    return result;
  }
}
