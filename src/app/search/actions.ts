
'use server';

import { homePageData } from '@/app/home-data';
import { newsPageData, mockNews } from '@/app/berita-dan-acara/berita-dan-acara-data';
import { type ArticleTeaseProps } from '@/components/primitives/article-tease/types';

interface SearchResult {
    results: ArticleTeaseProps[],
    totalHits: number;
}

// Ini adalah simulasi pencarian. Di aplikasi nyata, ini akan diganti dengan 
// panggilan ke layanan pencarian seperti Algolia, Elasticsearch, atau database.
export async function searchContent(query: string): Promise<SearchResult> {
  const lowerCaseQuery = query.toLowerCase();
  const allResults: ArticleTeaseProps[] = [];

  // 1. Search in Home Page Data
  if (homePageData.heroStatement.title.toLowerCase().includes(lowerCaseQuery) || homePageData.heroStatement.description.toLowerCase().includes(lowerCaseQuery)) {
    allResults.push({
      type: 'Article',
      title: homePageData.heroStatement.title,
      tease: homePageData.heroStatement.description,
      link: '/',
      overline: { label: 'Halaman Utama' },
    });
  }
  
  // Ambil wawasan dari getHomepageInsights karena sudah dari Sanity
  // const insights = await getHomepageInsights(); // Perlu modifikasi untuk mengambil data di server action
  // insights.forEach(article => {
  //     if(article.title.toLowerCase().includes(lowerCaseQuery) || (article.meta && article.meta.toLowerCase().includes(lowerCaseQuery))) {
  //         allResults.push({
  //           type: 'Article',
  //           title: article.title,
  //           tease: article.meta,
  //           link: article.href,
  //           overline: { label: article.overline },
  //           byline: { publicationDate: "2024-08-15T12:00:00Z" }, // Tanggal statis untuk contoh
  //         })
  //     }
  // });


  // 2. Search in News and Events data
  mockNews.forEach(news => {
      if(news.title.toLowerCase().includes(lowerCaseQuery) || news.description.toLowerCase().includes(lowerCaseQuery)) {
        allResults.push({
            type: 'Article',
            title: news.title,
            tease: news.description,
            link: `/berita-dan-acara/${news.id}`,
            overline: { label: news.category },
            byline: { publicationDate: "2024-08-15T12:00:00Z" }
        });
      }
  });


  return {
    results: allResults,
    totalHits: allResults.length,
  };
}
