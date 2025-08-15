
'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const NewsCard = ({ item, theme }: { item: any, theme?: 'bright' | 'dark' }) => (
  <motion.div 
    className={cn("flex flex-col h-full group", theme === 'bright' ? 'bg-[#e3e5e5]' : 'bg-gray-800')}
    variants={cardVariants}
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={item.hint} />
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className={cn("font-headline text-2xl mb-4", theme === 'dark' ? 'text-white' : 'text-black')}>{item.title}</h3>
      <p className={cn("text-lg mb-6 flex-grow", theme === 'dark' ? 'text-gray-300' : 'text-gray-700')}>{item.description}</p>
      <Link href={item.href} className="text-[#a51c30] font-bold self-start hover:underline">
        {item.linkText}
      </Link>
    </div>
  </motion.div>
);

const Section = ({ title, children, className = "", theme }: { title?: string, children: React.ReactNode, className?: string, theme?:'bright' | 'dark' }) => (
  <motion.section 
    className={`py-16 md:py-24 ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ staggerChildren: 0.2 }}
  >
    <div className="container mx-auto px-6">
      {title && (
         <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
         >
            <h2 className={cn("font-headline text-4xl md:text-5xl",  theme === 'dark' ? 'text-white' : 'text-black')}>{title}</h2>
            <hr className={cn("mt-4 border-b-4  w-24", theme === 'dark' ? 'border-white' : 'border-black')} />
         </motion.div>
      )}
      {children}
    </div>
  </motion.section>
);

export function ContentSection({ theme = 'bright' }: { theme?: 'bright' | 'dark' }) {

  const mentorshipCards = [
    { image: "https://placehold.co/645x430.png", hint: "student portrait", title: "Mentorship fuels big ideas", description: "As part of a mentee-mentor pair, Olúmídé Fagboyegun was awarded a fellowship to support his dissertation research...", href: "#", linkText: "Learn more about his work" },
    { image: "https://placehold.co/768x576.png", hint: "women talking", title: "Mentorship creates connections", description: "Harvard Chan School’s Jane Kim and Sue Goldie talk about how mentoring plays a critical role...", href: "#", linkText: "Learn more about the conversation" },
    { image: "https://placehold.co/768x576.png", hint: "student outside", title: "Mentorship opens opportunities", description: "Sufiya Hassan was a student ambassador in Harvard School of Dental Medicine’s Bridge to Dental School Program...", href: "#", linkText: "Learn more about the program" },
  ];

  const scienceCards = [
     { image: "https://placehold.co/768x576.png", hint: "researchers lab", title: "Advice for aspiring researchers", description: "Knowing the impact mentorship has on the next generation of scientists, Wyss community members shared guidance...", href: "#", linkText: "Read their advice" },
    { image: "https://placehold.co/640x370.png", hint: "women computer", title: "Networks for women in computer science", description: "The Harvard Women in Computer Science mentorship program brings together students with a mentor from the tech industry...", href: "#", linkText: "Read about their success" },
  ]
  
  return (
    <div className="t-sink l-sink [container:layout_/_inline-size] relative z-[1]">
      <motion.section 
        className={cn("py-12", theme === 'bright' ? 'bg-white' : 'bg-gray-900')}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 border-t border-b border-gray-300 py-8">
            <h2 className={cn("font-headline text-4xl md:w-1/3", theme === 'dark' ? 'text-white' : 'text-black')}>Educational inspiration begins at home</h2>
            <p className={cn("text-lg md:w-2/3", theme === 'dark' ? 'text-gray-300' : 'text-gray-700')}>In this <a href="#" className="text-[#a51c30] font-bold hover:underline">free online Harvard course</a>, learn how successful collaborations between families and educators can lead to improved outcomes for students and schools.</p>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div className="md:w-1/2" variants={cardVariants}>
              <blockquote className="relative pl-16">
                 <motion.div className="absolute top-0 left-0 text-[12rem] text-[#a51c30] font-serif opacity-20 leading-none -mt-8" initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 0.2 }} viewport={{once: true}} transition={{ duration: 0.5}}>“</motion.div>
                <p className={cn("font-headline text-4xl md:text-5xl leading-tight", theme==='dark' ? 'text-white' : 'text-black')}>When you mentor people, they mentor people, then they mentor people, and it has a huge exponential impact.”</p>
                <cite className="mt-6 block">
                  <span className={cn("block font-bold text-lg", theme === 'dark' ? 'text-white' : 'text-black')}>Judith Hochman</span>
                  <span className={cn("block", theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>Harvard Medical School alum</span>
                </cite>
                 <Button asChild className="mt-8 bg-[#1e1e1e] text-white hover:bg-black rounded-full px-6 py-3">
                    <Link href="#">Read more about her work</Link>
                 </Button>
              </blockquote>
            </motion.div>
            <motion.div className="md:w-1/2" variants={cardVariants}>
              <Image src="https://placehold.co/624x624.png" alt="Judith Hochman" width={624} height={624} className="rounded-full" data-ai-hint="professional woman portrait" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Section title="Mentorship in health and medicine" theme={theme}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentorshipCards.map(item => <NewsCard key={item.title} item={item} theme={theme} />)}
        </div>
      </Section>
      
      <Section title="Supporting scientists" theme={theme}>
        <div className="grid md:grid-cols-2 gap-8">
            {scienceCards.map(item => <NewsCard key={item.title} item={item} theme={theme} />)}
        </div>
      </Section>

    </div>
  );
}
