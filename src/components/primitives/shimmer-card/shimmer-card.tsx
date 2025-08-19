
import { cn } from "@/lib/utils";

export function ShimmerCard({ className }: { className?: string }) {
  return (
    <div className={cn("h-full w-full bg-muted", className)}>
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent animate-shimmer" />
    </div>
  );
}
