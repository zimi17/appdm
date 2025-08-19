
import { TwoColumnContent } from "@/components/blocks/two-column-content/two-column-content";
import { AccordionSection } from "@/components/blocks/accordion-section/accordion-section";
import { CardGrid } from "@/components/blocks/card-grid/card-grid";
import { HeroSection } from "@/components/blocks/hero-section/hero-section";
import { PromoBar } from "@/components/blocks/promo-bar/promo-bar";
import { Aside } from "@/components/primitives/aside/aside";
import { Breadcrumbs } from "@/components/primitives/breadcrumbs/breadcrumbs";
import { academicsPageData } from "./akademik-data";
import Link from "next/link";

export default function Academics() {
  const { hero, twoColumnContent, degreePrograms, promoBar, kurikulum, aside } = academicsPageData;
  const breadcrumbs = [{ title: "Akademik", link: "/akademik", isCurrent: true }];

  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
        <div className="col-span-full">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
      </div>
      <HeroSection 
        title={hero.title}
        description={hero.description}
        imageUrl={hero.imageUrl}
        imageHint={hero.imageHint}
        className="col-span-full"
      />
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
        <div className="col-span-full lg:col-span-8 lg:col-start-3 py-16 md:py-24">
              <TwoColumnContent
                title={twoColumnContent.title}
                paragraphs={twoColumnContent.paragraphs}
              />
        </div>
        <div className="col-span-full lg:col-span-4 lg:col-start-13 py-16 md:py-24">
              <Aside title={aside.title}>
                {aside.links.map((link) => (
                  <p key={link.text}>
                    <Link href={link.href}>{link.text}</Link>
                  </p>
                ))}
              </Aside>
        </div>
      </div>
      <CardGrid 
          title={degreePrograms.title}
          items={degreePrograms.items}
          className="bg-background"
      />
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
        <AccordionSection 
            title={kurikulum.title}
            items={kurikulum.items}
            linkText={kurikulum.linkText}
            linkHref={kurikulum.linkHref}
            className="col-span-full"
        />
      </div>
      <PromoBar
        title={promoBar.title}
        description={promoBar.description}
        linkHref={promoBar.linkHref}
        linkText={promoBar.linkText}
        className="bg-secondary text-secondary-foreground"
        descriptionClassName="text-gray-300"
        linkClassName="text-white hover:text-gray-200"
      />
    </>
  );
}
