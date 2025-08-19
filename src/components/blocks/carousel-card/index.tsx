
import Link from 'next/link';
import { CtaLink } from '../../primitives/cta-link';

interface CarouselCardProps {
    slide: {
      description: string;
      linkText: string;
      linkHref: string;
    }
}

export const CarouselCard = ({ slide }: CarouselCardProps) => (
    <Link href={slide.linkHref} className="block group cursor-pointer">
        <div className="w-full max-w-sm bg-background/90 backdrop-blur-sm p-4 transition-colors duration-300 group-hover:bg-card">
            <p className="mb-6 text-base font-normal">{slide.description}</p>
            <span className="text-primary font-bold self-start group-hover:underline flex items-center gap-2">
                {slide.linkText}
            </span>
        </div>
    </Link>
);
