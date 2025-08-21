
'use server';

import { homePageData } from '@/app/home-data';
import { academicsPageData } from '@/app/academics/academics-data';
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
  homePageData.hierarchicalTease.articles.forEach(article => {
      if(article.title.toLowerCase().includes(lowerCaseQuery) || article.meta.toLowerCase().includes(lowerCaseQuery)) {
          allResults.push({
            type: 'Article',
            title: article.title,
            tease: article.meta,
            link: article.href,
            overline: { label: article.overline },
            byline: { publicationDate: "2024-08-15T12:00:00Z" },
          })
      }
  });


  // 2. Search in Academics Page Data
  if(academicsPageData.hero.title.toLowerCase().includes(lowerCaseQuery) || academicsPageData.hero.description.toLowerCase().includes(lowerCaseQuery)) {
    allResults.push({
        type: 'Article',
        title: academicsPageData.hero.title,
        tease: academicsPageData.hero.description,
        link: '/akademik',
        overline: { label: 'Akademik' }
    });
  }
  academicsPageData.degreePrograms.items.forEach(program => {
    if(program.title.toLowerCase().includes(lowerCaseQuery) || program.description.toLowerCase().includes(lowerCaseQuery)) {
        allResults.push({
            type: 'Article',
            title: program.title,
            tease: program.description,
            link: program.href,
            overline: { label: 'Program Studi' }
        });
    }
  });

  // 3. Search in News and Events data
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
