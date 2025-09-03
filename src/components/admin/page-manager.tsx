'use client';

import { useState, useEffect } from 'react';
import { getAllPublishedPages } from '@/lib/sanity-queries';

interface PageManagerProps {
  className?: string;
}

export function PageManager({ className = '' }: PageManagerProps) {
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPages() {
      try {
        setLoading(true);
        const fetchedPages = await getAllPublishedPages();
        setPages(fetchedPages);
      } catch (err) {
        setError('Failed to fetch pages');
        console.error('Error fetching pages:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPages();
  }, []);

  if (loading) {
    return (
      <div className={`p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-6 ${className}`}>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
        </div>
      </div>
    );
  }

  if (pages.length === 0) {
    return (
      <div className={`p-6 ${className}`}>
        <div className="text-center py-8">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Pages Found</h3>
          <p className="text-gray-500">
            Create your first page in Sanity Studio to get started.
          </p>
          <a
            href="/studio"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 mt-4"
          >
            Go to Sanity Studio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Manager</h2>
        <p className="text-gray-600">
          Manage and preview your website pages. Click on a page to view or edit it.
        </p>
      </div>

      <div className="grid gap-4">
        {pages.map((page) => (
          <div
            key={page._id}
            className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  {page.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>Type: {page.pageType}</span>
                  <span>Slug: /{page.slug.current}</span>
                  {page.updatedAt && (
                    <span>
                      Updated: {new Date(page.updatedAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
                {page.metaDescription && (
                  <p className="text-gray-600 mt-2 text-sm">
                    {page.metaDescription}
                  </p>
                )}
              </div>
              <div className="flex space-x-2">
                <a
                  href={`/${page.slug.current}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  View
                </a>
                <a
                  href={`/studio/desk/page;${page._id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90"
                >
                  Edit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="/studio"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
        >
          Create New Page
        </a>
      </div>
    </div>
  );
}
