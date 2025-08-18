

import { SiteHeader } from "@/components/universal/site-header";
import { HeroSection } from "@/components/blocks/hero-section";
import { PromoBar } from "@/components/blocks/promo-bar";
import { CardGrid } from "@/components/blocks/card-grid";
import { TwoColumnContent } from "@/components/blocks/two-column-content";
import { SiteFooter } from "@/components/universal/site-footer";
import { AccordionSection } from "@/components/blocks/accordion-section";
import { Aside } from "@/components/primitives/aside";
import { academicsPageData } from "@/lib/data/pages";
import Link from "next/link";

export default function Academics() {
  const { hero, twoColumnContent, degreePrograms, promoBar, kurikulum, aside } = academicsPageData;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content">
        <HeroSection 
          title={hero.title}
          description={hero.description}
          imageUrl={hero.imageUrl}
          imageHint={hero.imageHint}
        />
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <TwoColumnContent
                title={twoColumnContent.title}
                paragraphs={twoColumnContent.paragraphs}
                className="py-0"
              />
            </div>
            <div className="lg:col-span-1">
              <Aside title={aside.title}>
                {aside.links.map((link) => (
                  <p key={link.text}>
                    <Link href={link.href}>{link.text}</Link>
                  </p>
                ))}
              </Aside>
            </div>
          </div>
        </div>
        <CardGrid 
            title={degreePrograms.title}
            items={degreePrograms.items}
            className="bg-card"
        />
        <AccordionSection 
            title={kurikulum.title}
            items={kurikulum.items}
            linkText={kurikulum.linkText}
            linkHref={kurikulum.linkHref}
        />
        <PromoBar
          title={promoBar.title}
          description={promoBar.description}
          linkHref={promoBar.linkHref}
          linkText={promoBar.linkText}
          className="bg-secondary text-secondary-foreground"
          descriptionClassName="text-gray-300"
          linkClassName="text-white hover:text-gray-200"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
