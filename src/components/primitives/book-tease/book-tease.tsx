"use client";

import Link from "next/link";
import { LazyImage } from "../lazy-image/lazy-image";
import { cn } from "@/lib/utils";
import type { BookTeaseProps } from './types';

export function BookTease({
  type,
  title,
  subtitle,
  link,
  authors,
  description,
  media,
  style = "content",
  HeadingLevel = "h3",
  className,
}: BookTeaseProps) {

  const AuthorLinks = () => {
    if (!authors || authors.length === 0) return null;
    return (
        <ul className="flex flex-wrap gap-x-1">
            {authors.map((author, index) => (
            <li key={author.name} className="flex items-center">
                {author.link ? (
                <Link href={author.link} className="hover:underline">
                    {author.name}
                </Link>
                ) : (
                <span>{author.name}</span>
                )}
                {index < authors.length - 1 && <span className="mx-1">,</span>}
            </li>
            ))}
        </ul>
    );
  };

  return (
    <div className={cn(
        "grid md:grid-cols-12 gap-8 items-start",
        className
    )}>
        <div className="md:col-span-8 lg:col-span-9 order-2 md:order-1">
            <p className="text-primary font-semibold mb-2">{type}</p>
            <Link href={link} className="hover:underline">
                <HeadingLevel className="font-headline font-bold text-3xl md:text-4xl text-foreground">
                    {title}
                </HeadingLevel>
                {subtitle && <p className="text-xl md:text-2xl text-muted-foreground mt-1">{subtitle}</p>}
            </Link>
            {description && <p className="text-lg text-muted-foreground mt-4">{description}</p>}
            <div className="mt-4 text-muted-foreground">
                <AuthorLinks />
            </div>
        </div>
        <div className="md:col-span-4 lg:col-span-3 order-1 md:order-2 flex justify-center">
            <Link href={link} className="block shadow-lg hover:shadow-xl transition-shadow w-48 md:w-full">
                <LazyImage 
                    src={media.image.src}
                    alt={media.image.alt}
                    className="aspect-[3/4]"
                    imageClassName="object-cover"
                    data-ai-hint={media.image.hint}
                    fill
                />
            </Link>
        </div>
    </div>
  );
}