
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SiteFooterBlockItem {
  children: ReactNode;
  href?: string;
}

export interface SiteFooterBlockProps {
  title?: ReactNode;
  items?: Array<SiteFooterBlockItem>;
  className?: string;
}

export function SiteFooterBlock({
  title,
  items,
  className,
}: SiteFooterBlockProps) {
  return (
    <div className={cn("text-center md:text-left", className)}>
        {title && <h3 className="font-bold text-lg text-white mb-4">{title}</h3>}
        <ul className="space-y-2">
            {items?.map(({ children, href }, i) => (
                <li key={i}>
                    {href ? (
                         <Link href={href} className="text-muted-foreground hover:text-white transition-colors">
                            {children}
                        </Link>
                    ): (
                        <div className="text-muted-foreground">{children}</div>
                    )}
                </li>
            ))}
        </ul>
    </div>
  );
}
