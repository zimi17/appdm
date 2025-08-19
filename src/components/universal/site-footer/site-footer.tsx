import { footerBlocks, footerLegalItems } from "@/lib/data/nav";
import { Logo } from "@/components/primitives/logo/logo";
import { SiteFooterBlock } from "./site-footer-block";
import { SiteFooterLegal } from "./site-footer-legal";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="col-span-2 md:col-span-4 lg:col-span-2 flex items-center justify-center lg:justify-start">
               <Link href="/" aria-label="Beranda">
                 <Logo theme="dark" className="h-20 w-40" />
               </Link>
            </div>
            {footerBlocks.map((block, i) => (
              <SiteFooterBlock
                key={i}
                title={block.title}
                items={block.items}
                className="col-span-1"
              />
            ))}
          </div>
        </div>
      </div>
      <SiteFooterLegal items={footerLegalItems} copyright="STIE Dwimulya" />
    </footer>
  );
}
