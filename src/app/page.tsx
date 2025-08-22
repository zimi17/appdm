
import { MissionTopper } from "@/components/toppers/mission-topper/mission-topper";
import { HeroStatement } from "@/components/blocks/hero-statement/hero-statement";
import { homePageData } from "./home-data";
import { KeywordScrollLists } from "@/components/blocks/keyword-scroll-lists/keyword-scroll-lists";
import { SupportingDetails } from "@/components/blocks/supporting-details/supporting-details";
import { PageSection } from "@/components/primitives/page-section/page-section";
import { TeaseRow } from "@/components/blocks/tease-row/tease-row";
import { ComponentHeader } from "@/components/primitives/component-header/component-header";
import { HierarchicalTease } from "@/components/blocks/hierarchical-tease/hierarchical-tease";
import { getHomepageInsights } from "@/lib/sanity-queries";


export default async function Home() {
    const { missionTopper, programCards, heroStatement, snowflakes, distinction } = homePageData;
    const insights = await getHomepageInsights();

    return (
        <main id="main-content">
            <MissionTopper 
              titleParts={missionTopper.titleParts}
              slides={missionTopper.slides}
            />
            
            <PageSection>
                <ComponentHeader 
                    title="Pendidikan dinamis dan imersif untuk para pemimpin di setiap tingkatan"
                    isSmall={false}
                    className="max-w-4xl"
                />
                <TeaseRow items={programCards} />
              </PageSection>

              <PageSection theme="light">
                  <HeroStatement
                      title={heroStatement.title}
                      description={heroStatement.description}
                      imageUrl={heroStatement.imageUrl}
                      imageHint={heroStatement.imageHint}
                      links={heroStatement.links}
                  />
                  <KeywordScrollLists keywords={snowflakes.keywords} />
              </PageSection>
              
              <PageSection theme="dark">
                <HierarchicalTease
                    header={homePageData.hierarchicalTease.header}
                    articles={insights}
                />
              </PageSection>
              
              <PageSection className="bg-background">
                <div className="col-span-full">
                    <SupportingDetails
                        header={distinction.header}
                        items={distinction.details.items}
                        mediaAsset={distinction.details.mediaAsset}
                    />
                </div>
              </PageSection>
        </main>
    );
}
