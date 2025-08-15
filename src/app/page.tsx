
import { SiteHeader } from "@/components/jalantempuh/site-header";
import { HeroSection } from "@/components/hero-section";
import { ContentSection } from "@/components/content-section";
import { SiteFooter } from "@/components/jalantempuh/site-footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4f4]">
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ContentSection />
      </main>
      <SiteFooter />
    </div>
  );
}
