
import { cn } from "@/lib/utils";

export function ShimmerCard({ className }: { className?: string }) {
  return (
    <div className={cn("group flex h-full flex-col", className)}>
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent animate-shimmer" />
      </div>
      <div className="flex-grow p-8">
        <div className="mb-4 h-6 w-3/4 rounded bg-muted"></div>
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-muted"></div>
          <div className="h-4 w-5/6 rounded bg-muted"></div>
        </div>
        <div className="mt-6 h-6 w-1/3 rounded bg-muted"></div>
      </div>
    </div>
  );
}
