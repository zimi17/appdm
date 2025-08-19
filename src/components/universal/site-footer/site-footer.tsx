
import { footerBlocks, footerLegalItems } from "@/lib/data/nav";
import { Logo } from "@/components/primitives/logo/logo";
import { SiteFooterBlock } from "./site-footer-block";
import { SiteFooterLegal } from "./site-footer-legal";
import Link from "next/link";
import { SiteFooterPrimaryCta } from "./site-footer-primary-cta";
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export function SiteFooter() {

  const socialLinks = [
    { href: "#", icon: Instagram, label: "Instagram" },
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
              <Link href="/" aria-label="Beranda" className="mb-4">
                <Logo theme="dark" className="h-16 w-32" />
              </Link>
              <h3 className="font-bold text-lg text-white">STIE Dwimulya</h3>
              <p className="text-muted-foreground mt-2 text-base">
                Jl. Kav. Sindangsari B1, Kec. Pabuaran, Serang 42163, Banten
              </p>
            </div>

            {footerBlocks.map((block, i) => (
               <div key={i} className="col-span-1 text-center md:text-left">
                <SiteFooterBlock
                    title={block.title}
                    items={block.items}
                />
               </div>
            ))}
             <div className="col-span-1 text-center md:text-left">
                 <h3 className="font-bold text-lg text-white mb-4">Media Sosial</h3>
                 <div className="flex justify-center md:justify-start gap-4">
                    {socialLinks.map((social) => (
                        <Link key={social.label} href={social.href} aria-label={social.label}>
                           <social.icon className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
                        </Link>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </div>
      <SiteFooterLegal items={footerLegalItems} copyright="© {new Date().getFullYear()} Yayasan Dwimulya Sahati dan Civitas Akademika STIE Dwimulya." />
    </footer>
  );
}
