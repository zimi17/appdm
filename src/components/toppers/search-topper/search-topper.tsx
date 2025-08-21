
'use client';

import { useState, type FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search as SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import './search-topper.scss';

export function SearchTopper() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <section className="hbs-topper-wrapper" data-theme="dark">
      <div className="hbs-search-topper hbs-search-topper--long">
        <h1 className="hbs-search-topper__title">Search</h1>
        <div className="hbs-search-topper__form">
          <form className="hbs-form" onSubmit={handleSubmit}>
            <div className="hbs-search-box">
              <input
                className="hbs-search-box__input"
                type="search"
                placeholder="Cari konten situs..."
                aria-label="Cari konten situs..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                className="hbs-search-box__submit"
                type="submit"
                title="Kirim pencarian Anda."
              >
                <span className="sr-only">Cari</span>
                <SearchIcon className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
