
import { SiteHeader } from "@/components/universal/site-header/site-header";
import { HeroSection } from "@/components/blocks/hero-section/hero-section";
import { PromoBar } from "@/components/blocks/promo-bar/promo-bar";
import { CardGrid } from "@/components/blocks/card-grid/card-grid";
import { TwoColumnContent } from "@/components/blocks/two-column-content";
import { SiteFooter } from "@/components/universal/site-footer/site-footer";
import { AccordionSection } from "@/components/blocks/accordion-section/accordion-section";
import { Aside } from "@/components/primitives/aside";
import { academicsPageData } from "./academics-data";
import Link from "next/link";
import { Breadcrumbs } from "@/components/primitives/breadcrumbs/breadcrumbs";

export default function Academics() {
  const { hero, twoColumnContent, degreePrograms, promoBar, kurikulum, aside } = academicsPageData;
  const breadcrumbs = [{ title: "Akademik", link: "/akademik", isCurrent: true }];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content" className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
        <div className="col-span-full">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
        <HeroSection 
          title={hero.title}
          description={hero.description}
          imageUrl={hero.imageUrl}
          imageHint={hero.imageHint}
          className="col-span-full"
        />
        <div className="col-span-full lg:col-span-8 lg:col-start-3 py-16 md:py-24">
              <TwoColumnContent
                title={twoColumnContent.title}
                paragraphs={twoColumnContent.paragraphs}
              />
        </div>
        <div className="col-span-full lg:col-span-4 lg:col-start-11 py-16 md:py-24">
              <Aside title={aside.title}>
                {aside.links.map((link) => (
                  <p key={link.text}>
                    <Link href={link.href}>{link.text}</Link>
                  </p>
                ))}
              </Aside>
        </div>
        <CardGrid 
            title={degreePrograms.title}
            items={degreePrograms.items}
            className="col-span-full bg-card"
        />
        <AccordionSection 
            title={kurikulum.title}
            items={kurikulum.items}
            linkText={kurikulum.linkText}
            linkHref={kurikulum.linkHref}
            className="col-span-full"
        />
        <PromoBar
          title={promoBar.title}
          description={promoBar.description}
          linkHref={promoBar.linkHref}
          linkText={promoBar.linkText}
          className="col-span-full bg-secondary text-secondary-foreground"
          descriptionClassName="text-gray-300"
          linkClassName="text-white hover:text-gray-200"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
