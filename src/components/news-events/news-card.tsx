
'use client';
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { LazyImage } from "@/components/primitives/lazy-image";

export function NewsCard({ article }: { article: any }) {
    return (
        <Card className="overflow-hidden flex flex-col group">
            <LazyImage 
                src={article.image} 
                alt={article.title} 
                className="aspect-[4/3]" 
                imageClassName="group-hover:scale-105 transition-transform duration-300 object-cover" 
                data-ai-hint={article.imageHint} 
                fill
            />
            <div className="p-6 flex-grow flex flex-col">
                <span className="text-sm text-primary font-semibold mb-2">{article.category}</span>
                <h3 className="text-xl font-bold font-headline mb-4">{article.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{article.description}</p>
                <Link href="#" className="font-semibold text-primary hover:underline self-start">Read More</Link>
            </div>
        </Card>
    );
}
