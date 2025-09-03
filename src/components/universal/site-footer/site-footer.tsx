
import { footerBlocks, footerLegalItems } from "@/lib/data/nav";
import { SiteFooterLegal } from "./site-footer-legal";
import { SiteFooterPrimaryCta } from "./site-footer-primary-cta";
import { SiteFooterBlock } from "./site-footer-block";
import Link from "next/link";
import { Logo } from "@/components/primitives/logo/logo";
import { Facebook, Instagram, Linkedin, Youtube, Rss } from "lucide-react";
import { SanitySiteSettings } from "@/lib/sanity-queries";

interface SiteFooterProps {
  siteSettings: SanitySiteSettings | null;
}

export function SiteFooter({ siteSettings }: SiteFooterProps) {
  // Use Sanity data if available, fallback to static data
  const primaryCta = siteSettings?.footerSettings?.primaryCta || {
    title: "Daftar Sekarang",
    description: "Mulai perjalanan Anda menuju karier yang pasti.",
    href: "/pendaftaran"
  };

  const footerBlocks = siteSettings?.footerSettings?.footerBlocks || [
    {
      title: 'Tentang Kami',
      items: [
        { text: "Sejarah", href: "/tentang/sejarah" },
        { text: "Visi & Misi", href: "/tentang/visi-misi" },
      ]
    },
    {
      title: 'Kontak',
      items: [
        { text: "Hubungi Kami", href: "/pendaftaran" },
        { text: "Peta & Arah", href: "/layanan" }
      ]
    },
  ];

  const legalLinks = siteSettings?.footerSettings?.legalLinks || [
    { text: 'Peta Situs', href: '/' },
    { text: 'Karir', href: '/' },
    { text: 'Merek Dagang', href: '/tentang' },
    { text: 'Kebijakan', href: '/tentang' },
    { text: 'Aksesibilitas', href: '/tentang' },
    { text: 'Aksesibilitas Digital', href: '/tentang' }
  ];

  const contactInfo = siteSettings?.contactInfo || {
    institutionName: "STIE Dwimulya",
    address: "Jl. Kav. Sindangsari B1, Kec. Pabuaran, Serang 42163, Banten"
  };

  const socialMedia = siteSettings?.socialMedia;
  const socialLinks = [
    { href: socialMedia?.instagram || "#", icon: Instagram, label: "Instagram" },
    { href: socialMedia?.tiktok || "#", icon: Rss, label: "TikTok" }, // Using Rss as placeholder for TikTok
    { href: socialMedia?.linkedin || "#", icon: Linkedin, label: "LinkedIn" },
    { href: socialMedia?.facebook || "#", icon: Facebook, label: "Facebook" },
    { href: socialMedia?.youtube || "#", icon: Youtube, label: "YouTube" },
  ];

  return (
    <footer className="mt-auto" data-sanity={siteSettings?._id ? `siteSettings=${siteSettings._id};path=footerSettings` : undefined}>
      <SiteFooterPrimaryCta
        title={primaryCta.title}
        description={primaryCta.description}
        href={primaryCta.href}
      />
      
      <div className="bg-brand-primary text-primary-foreground">
        <div className="max-w-screen-2xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Link href="/" aria-label="Beranda" className="mb-4">
                <Logo theme="dark" className="h-16" />
              </Link>
              <h3 className="font-bold text-lg text-white">{contactInfo.institutionName}</h3>
              <p className="text-muted-foreground mt-2 text-base">
                {contactInfo.address}
              </p>
            </div>
            
            {footerBlocks.map((block, i) => (
              <SiteFooterBlock
                key={i}
                title={block.title}
                items={block.items.map(item => ({ children: item.text, href: item.href }))}
              />
            ))}
            
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg text-white mb-4">Media Sosial</h3>
              <div className="flex justify-center md:justify-start gap-2">
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

      <SiteFooterLegal items={legalLinks.map(link => ({ children: link.text, href: link.href }))} />
    </footer>
  );
}
