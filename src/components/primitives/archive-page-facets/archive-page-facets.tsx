'use client';

import { cn } from '@/lib/utils';

export interface FacetItem {
  label: string;
  value: string;
  count?: number;
}

interface ArchivePageFacetsProps {
  title: string;
  items: FacetItem[];
  onFacetChanged: (item: FacetItem, checked: boolean) => void;
  className?: string;
}

export function ArchivePageFacets({ title, items, onFacetChanged, className }: ArchivePageFacetsProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="font-headline text-lg font-semibold">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <label key={item.value} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-primary focus:ring-primary"
              onChange={(e) => onFacetChanged(item, e.target.checked)}
            />
            <span className="text-sm text-muted-foreground">
              {item.label}
              {item.count !== undefined && (
                <span className="ml-2 text-xs text-muted-foreground">
                  ({item.count})
                </span>
              )}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
