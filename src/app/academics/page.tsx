


import { SiteHeader } from "@/components/universal/site-header";
import { HeroSection } from "@/components/blocks/hero-section";
import { PromoBar } from "@/components/blocks/promo-bar";
import { CardGrid } from "@/components/blocks/card-grid";
import { TwoColumnContent } from "@/components/blocks/two-column-content";
import { SiteFooter } from "@/components/universal/site-footer";
import { AccordionSection } from "@/components/blocks/accordion-section";
import { academicsPage, kurikulumData } from "@/lib/data";

export default function Academics() {
  const { hero, twoColumnContent, degreePrograms, promoBar } = academicsPage;

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
        <TwoColumnContent
            title={twoColumnContent.title}
            paragraphs={twoColumnContent.paragraphs}
        />
        <CardGrid 
            title={degreePrograms.title}
            items={degreePrograms.items}
            className="bg-card"
        />
        <AccordionSection 
            title={kurikulumData.title}
            items={kurikulumData.items}
            linkText={kurikulumData.linkText}
            linkHref={kurikulumData.linkHref}
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
