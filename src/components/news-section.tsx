import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const newsItems = [
  {
    image: "https://placehold.co/600x400.png",
    hint: "students library",
    category: "Announcement",
    date: "July 20, 2024",
    title: "New Library Wing Opening Soon",
    description: "We are excited to announce the grand opening of our new library extension, featuring state-of-the-art study spaces."
  },
  {
    image: "https://placehold.co/600x400.png",
    hint: "campus event",
    category: "Event",
    date: "July 15, 2024",
    title: "Annual Entrepreneurship Fair 2024",
    description: "Join us for our annual fair showcasing innovative student startups. A day of inspiration and networking awaits."
  },
  {
    image: "https://placehold.co/600x400.png",
    hint: "graduation ceremony",
    category: "Campus Life",
    date: "July 10, 2024",
    title: "Celebrating the Graduating Class of 2024",
    description: "Highlights from our recent graduation ceremony, celebrating the achievements of our talented students."
  }
];

export function NewsSection() {
  return (
    <section id="news" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-accent">News & Events</h2>
          <p className="mt-2 text-lg text-muted-foreground">Stay updated with the latest happenings at STIE Dwimulya.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.title} className="overflow-hidden flex flex-col group shadow-md hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                   <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={item.hint}
                    />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center gap-4 mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">{item.category}</Badge>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
                <CardTitle className="font-headline text-xl mb-2">{item.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href="#" className="flex items-center text-primary font-semibold text-sm">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
