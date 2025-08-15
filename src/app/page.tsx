
import { SiteHeader } from "@/components/jalantempuh/site-header";
import { HeroSection } from "@/components/blocks/hero-section";
import { PromoBar } from "@/components/blocks/promo-bar";
import { QuoteSection } from "@/components/blocks/quote-section";
import { NewsCardGrid } from "@/components/blocks/news-card-grid";
import { SiteFooter } from "@/components/jalantempuh/site-footer";
import { mentorshipCards, scienceCards, quote } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content">
        <HeroSection 
          title="Kampus Rakyat, Kampus Perubahan"
          description="Memberdayakan Masyarakat, Mengubah Masa Depan. STIE Dwimulya berkomitmen untuk menyediakan pendidikan berkualitas yang dapat diakses oleh semua lapisan masyarakat, menciptakan pemimpin yang siap membawa perubahan positif."
          imageUrl="https://placehold.co/2000x667.png"
          imageHint="students graduation"
        />
        <PromoBar
          title="Penerimaan Mahasiswa Baru Telah Dibuka!"
          description="Jelajahi program studi kami dan temukan bagaimana STIE Dwimulya dapat menjadi langkah awal kesuksesan Anda. Daftar sekarang dan jadilah bagian dari kampus perubahan."
          linkHref="/admissions"
          linkText="Info Pendaftaran"
        />
        <QuoteSection
          quote={quote.text}
          author={quote.author}
          role={quote.role}
          imageUrl={quote.imageUrl}
          imageHint={quote.imageHint}
          linkHref={quote.linkHref}
          linkText={quote.linkText}
        />
        <NewsCardGrid 
            title="Berita & Kegiatan"
            items={mentorshipCards}
        />
         <NewsCardGrid 
            title="Sorotan Akademik"
            items={scienceCards}
            className="bg-secondary text-secondary-foreground"
            titleClassName="text-white"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
