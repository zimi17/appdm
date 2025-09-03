'use client';

import { cn } from '@/lib/utils';

interface DateRange {
  from: Date | undefined;
  to?: Date | undefined;
}

interface DateRangePickerProps {
  onRangeChange: (range: DateRange | undefined) => void;
  selectedRange?: DateRange | undefined;
  className?: string;
}

export function DateRangePicker({ 
  onRangeChange, 
  selectedRange, 
  className 
}: DateRangePickerProps) {
  const handleFromDateChange = (date: string) => {
    const fromDate = date ? new Date(date) : undefined;
    onRangeChange({
      from: fromDate,
      to: selectedRange?.to
    });
  };

  const handleToDateChange = (date: string) => {
    const toDate = date ? new Date(date) : undefined;
    onRangeChange({
      from: selectedRange?.from,
      to: toDate
    });
  };

  const clearRange = () => {
    onRangeChange(undefined);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="font-headline text-lg font-semibold">Filter by Date</h3>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">
            From Date
          </label>
          <input
            type="date"
            value={selectedRange?.from?.toISOString().split('T')[0] || ''}
            onChange={(e) => handleFromDateChange(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">
            To Date
          </label>
          <input
            type="date"
            value={selectedRange?.to?.toISOString().split('T')[0] || ''}
            onChange={(e) => handleToDateChange(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        {(selectedRange?.from || selectedRange?.to) && (
          <button
            onClick={clearRange}
            className="text-sm text-primary hover:underline"
          >
            Clear date filter
          </button>
        )}
      </div>
    </div>
  );
}
