import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Rss } from "lucide-react";

interface SiteFooterBlockItem {
  children: ReactNode;
  href?: string;
}

export interface SiteFooterBlockProps {
  title?: ReactNode;
  items?: Array<SiteFooterBlockItem>;
  className?: string;
}

const SocialLinks = () => {
    const socialLinks = [
        { href: "#", icon: Instagram, label: "Instagram" },
        { href: "#", icon: Rss, label: "TikTok" }, // Using RSS as placeholder for TikTok
        { href: "#", icon: Linkedin, label: "LinkedIn" },
        { href: "#", icon: Facebook, label: "Facebook" },
        { href: "#", icon: Youtube, label: "YouTube" },
    ];
    return (
        <div className="flex gap-3">
             {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} aria-label={social.label}>
                    <social.icon className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
                </Link>
            ))}
        </div>
    )
}

export function SiteFooterBlock({
  title,
  items,
  className,
}: SiteFooterBlockProps) {
  return (
    <div className={cn("text-center md:text-left", className)}>
        {title && <h3 className="font-bold text-lg text-white mb-4">{title}</h3>}
        <ul className="space-y-2">
            {items?.map(({ children, href }, i) => (
                <li key={i}>
                    {href ? (
                         <Link href={href} className="text-muted-foreground hover:text-white transition-colors">
                            {children}
                        </Link>
                    ): (
                        children === 'SocialMedia' ? <SocialLinks/> : <div className="text-muted-foreground">{children}</div>
                    )}
                </li>
            ))}
        </ul>
    </div>
  );
}
