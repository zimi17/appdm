
import Link from 'next/link';
import { CtaLink } from '../primitives/cta-link';

interface CarouselCardProps {
    slide: {
      description: string;
      linkText: string;
      linkHref: string;
    }
}

export const CarouselCard = ({ slide }: CarouselCardProps) => (
    <Link href={slide.linkHref} className="block group cursor-pointer">
        <div className="w-full max-w-sm bg-background/90 backdrop-blur-sm p-8 transition-colors duration-300 group-hover:bg-card">
            <p className="text-muted-foreground mb-6 text-lg font-semibold">{slide.description}</p>
            <CtaLink href={slide.linkHref}>{slide.linkText}</CtaLink>
        </div>
    </Link>
);
