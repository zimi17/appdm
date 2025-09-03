
import { MissionTopper } from "@/components/toppers/mission-topper/mission-topper";
import { HeroStatement } from "@/components/blocks/hero-statement/hero-statement";
import { KeywordScrollList } from "@/components/blocks/keyword-scroll-list/keyword-scroll-list";
import { SupportingDetails } from "@/components/blocks/supporting-details/supporting-details";
import { PageSection } from "@/components/primitives/page-section/page-section";
import { TeaseRow } from "@/components/blocks/tease-row/tease-row";
import { ComponentHeader } from "@/components/primitives/component-header/component-header";
import { HierarchicalTease } from "@/components/blocks/hierarchical-tease/hierarchical-tease";
import { getHomepageInsights, getHomepage } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity-client";
import { PageHead } from "@/components/primitives/page-head/page-head";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Helper to process image URLs, as some components expect strings
const processImages = (data: any) => {
  if (!data) return null;

  // Process MissionTopper slides images
  if (data.missionTopper && data.missionTopper.slides) {
    data.missionTopper.slides.forEach((slide: any) => {
      if (slide.image) {
        slide.imageUrl = urlFor(slide.image as SanityImageSource).width(1200).height(800).toString();
      }
    });
  }

  // Process HeroStatement image
  if (data.heroStatement && data.heroStatement.image) {
    data.heroStatement.imageUrl = urlFor(data.heroStatement.image as SanityImageSource).width(1024).height(768).toString();
  }
  
  // Process Distinction mediaAsset
  if (data.distinction && data.distinction.details && data.distinction.details.mediaAsset) {
    const mediaAsset = data.distinction.details.mediaAsset;
    // Check if it's a valid Sanity image object
    if (mediaAsset && typeof mediaAsset === 'object' && mediaAsset._type === 'image' && mediaAsset.asset) {
      data.distinction.details.mediaAsset.src = urlFor(mediaAsset as SanityImageSource).width(800).height(600).toString();
    } else if (typeof mediaAsset === 'string') {
      // If it's already a URL string, use it directly
      data.distinction.details.mediaAsset.src = mediaAsset;
    }
  }

  return data;
};

export default async function Home() {
    const rawHomepageData = await getHomepage();
    
    // If no data from Sanity, show an error or loading state. No fallback to static data.
    if (!rawHomepageData) {
        return (
            <PageSection>
                <ComponentHeader title="Konten Halaman Utama Tidak Ditemukan" isSmall={true} />
                <p>Pastikan dokumen 'Homepage' ada dan sudah di-'publish' di Sanity Studio.</p>
            </PageSection>
        );
    }
    
    const homepageData = processImages(rawHomepageData);

    const {
        _id: homepageId,
        missionTopper,
        programCards,
        heroStatement,
        snowflakes,
        hierarchicalTease,
        distinction,
        metaTitle,
        metaDescription
    } = homepageData;

    const keywords = snowflakes?.keywords;
    const insights = await getHomepageInsights();

    return (
        <>
            <PageHead 
                title={metaTitle || "STIE Dwimulya"}
                description={metaDescription || "Kampus Rakyat, Kampus Perubahan."}
            />
            {/* Root element with Sanity data attribute for Visual Editing */}
            <div data-sanity={`homepage,${homepageId}`}>
                {missionTopper && (
                  <MissionTopper 
                      titleParts={missionTopper.titleParts}
                      slides={missionTopper.slides}
                      theme="light"
                  />
                )}
                
                {programCards && programCards.length > 0 && (
                  <PageSection>
                      <ComponentHeader 
                          title="Pendidikan dinamis dan imersif untuk para pemimpin di setiap tingkatan"
                          isSmall={false}
                          className="max-w-4xl"
                      />
                      <TeaseRow items={programCards} />
                  </PageSection>
                )}

                {heroStatement && (
                  <PageSection theme="light">
                      <HeroStatement
                          title={heroStatement.title}
                          description={heroStatement.description}
                          imageUrl={heroStatement.imageUrl}
                          imageHint={heroStatement.imageHint || heroStatement.title}
                          links={heroStatement.links}
                      />
                      {keywords && <KeywordScrollList keywords={keywords} />}
                  </PageSection>
                )}
                  
                {hierarchicalTease && (
                  <PageSection theme="dark">
                      <HierarchicalTease
                          header={hierarchicalTease.header}
                          articles={insights}
                      />
                  </PageSection>
                )}
                  
                {distinction && (
                  <PageSection className="bg-background">
                    <div className="col-span-full">
                        <SupportingDetails
                            header={distinction.header}
                            items={distinction.details.items}
                            mediaAsset={distinction.details.mediaAsset}
                        />
                    </div>
                  </PageSection>
                )}
            </div>
        </>
    );
}

