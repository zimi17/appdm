
import { footerBlocks, footerLegalItems } from "@/lib/data/nav";
import { SiteFooterLegal } from "./site-footer-legal";
import { SiteFooterPrimaryCta } from "./site-footer-primary-cta";
import { SiteFooterBlock } from "./site-footer-block";
import Link from "next/link";
import { Logo } from "@/components/primitives/logo/logo";
import { Facebook, Instagram, Linkedin, Youtube, Rss } from "lucide-react";

export function SiteFooter() {
  const socialLinks = [
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Rss, label: "TikTok" }, // Placeholder for TikTok
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Youtube, label: "YouTube" },
  ];

  return (
    <footer className="mt-auto">
      <SiteFooterPrimaryCta
        title="Daftar Sekarang"
        description="Mulai perjalanan Anda menuju karier yang pasti."
        href="/pendaftaran"
      />
      
      <div className="bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-12 lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
              <Link href="/" aria-label="Beranda" className="mb-4">
                <Logo theme="dark" className="h-16" />
              </Link>
              <h3 className="font-bold text-lg text-white">STIE Dwimulya</h3>
              <p className="text-muted-foreground mt-2 text-base">
                Jl. Kav. Sindangsari B1, Kec. Pabuaran, Serang 42163, Banten
              </p>
            </div>
            
            <div className="md:col-span-12 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {footerBlocks.map((block, i) => (
                    <div key={i} className="text-center sm:text-left">
                        <SiteFooterBlock
                        title={block.title}
                        items={block.items}
                        />
                </div>
                ))}
                
                <div className="text-center sm:text-left">
                <h3 className="font-bold text-lg text-white mb-4">Media Sosial</h3>
                <div className="flex justify-center sm:justify-start gap-2">
                    {socialLinks.map((social) => (
                    <Link key={social.label} href={social.href} aria-label={social.label} className="p-2 rounded-full border border-gray-600 hover:border-white hover:text-white text-gray-400 transition-colors">
                        <social.icon className="h-5 w-5" />
                    </Link>
                    ))}
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooterLegal items={footerLegalItems} />
    </footer>
  );
}
