
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Rss } from 'lucide-react';
import { Logo } from '../primitives/logo';
import { footerSections } from '@/lib/data';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Rss, label: "TikTok" }, // Using RSS as placeholder for TikTok
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Youtube, label: "YouTube" },
  ];

  return (
    <footer className="bg-[#0e0e0e] text-[#8996a0] py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center text-center md:text-left gap-8">
          {footerSections.map((section) => (
            <div key={section.title} className="md:w-1/3">
              <h2 className="text-lg font-bold text-white pb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-lg text-[#8996a0] hover:text-white border-b border-transparent hover:border-white transition">
                        {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-12 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-center md:text-left order-3 md:order-1 mt-8 md:mt-0">Copyright © {currentYear} The President and Fellows of Harvard College</p>
            <div className="order-1 md:order-2">
                <Link href="/">
                    <Logo theme="dark" className="h-20 w-40"/>
                </Link>
            </div>
             <div className="flex gap-4 order-2 md:order-3 mt-8 md:mt-0">
                {socialLinks.map((social) => (
                    <Link key={social.label} href={social.href} aria-label={social.label}>
                       <social.icon className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
