
'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { TeaseFeed } from '@/components/blocks/tease-feed/tease-feed';
import { type ArticleTeaseProps } from '@/components/primitives/article-tease/types';
import { Breadcrumbs } from '@/components/primitives/breadcrumbs/breadcrumbs';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { SearchTopper } from '@/components/toppers/search-topper/search-topper';
import { searchContent } from './actions';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);

  const [results, setResults] = useState<ArticleTeaseProps[]>([]);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (query) {
      const fetchResults = async () => {
        const { results: newResults, totalHits: newTotalHits } = await searchContent(query);
        setResults(newResults);
        setTotalHits(newTotalHits);
      };
      fetchResults();
    } else {
      setResults([]);
      setTotalHits(0);
    }
  }, [query]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalHits / itemsPerPage);
  const paginatedResults = results.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const SearchStats = () => (
    <div className="mb-8">
      <p className="text-lg" role="status">
        Menampilkan <strong>{paginatedResults.length}</strong> dari <strong>{totalHits}</strong> hasil untuk <strong>&quot;{query}&quot;</strong>
      </p>
    </div>
  );

  return (
    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
      <div className="col-span-full lg:col-span-12 lg:col-start-3">
        {query && <SearchStats />}
        {paginatedResults.length > 0 ? (
           <TeaseFeed
              items={paginatedResults.map((props) => ({ name: 'ArticleTease', props }))}
              feedTeaseStyle="full"
            />
        ) : (
          query && <p>Tidak ada hasil ditemukan.</p>
        )}

        {totalPages > 1 && (
           <div className="mt-16">
            <Pagination>
              <PaginationContent>
                {page > 1 && (
                  <PaginationItem>
                    <PaginationPrevious href={`/search?q=${query}&page=${page - 1}`} />
                  </PaginationItem>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <PaginationItem key={p}>
                    <PaginationLink href={`/search?q=${query}&page=${p}`} isActive={p === page}>
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                {page < totalPages && (
                  <PaginationItem>
                    <PaginationNext href={`/search?q=${query}&page=${page + 1}`} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  const breadcrumbs = [
    { title: "Beranda", href: "/" },
    { title: "Pencarian", link: "/search", isCurrent: true },
  ];

  return (
    <main>
      <SearchTopper />
      <div className="py-12">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
            <div className="col-span-full">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchResults />
        </Suspense>
      </div>
    </main>
  );
}
