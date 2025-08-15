import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText, ListChecks, CalendarDays } from 'lucide-react';

const admissionSteps = [
    {
        icon: FileText,
        title: "Admission Requirements",
        content: "High school diploma or equivalent. Minimum GPA of 2.5. Standardized test scores (optional but recommended). Application essay and letters of recommendation."
    },
    {
        icon: ListChecks,
        title: "How to Apply",
        content: "1. Complete the online application form. 2. Submit all required documents through the portal. 3. Pay the application fee. 4. Wait for the admission decision via email."
    },
    {
        icon: CalendarDays,
        title: "Important Deadlines",
        content: "Early Admission Deadline: November 1st. Regular Admission Deadline: February 15th. Scholarship Application Deadline: March 1st. Classes Begin: August 25th."
    }
]

export function AdmissionsSection() {
  return (
    <section id="admissions" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-accent">Admissions</h2>
          <p className="mt-2 text-lg text-muted-foreground">Your journey to STIE Dwimulya starts here.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {admissionSteps.map((step, index) => (
              <AccordionItem key={step.title} value={`item-${index}`} className="bg-background rounded-lg mb-4 shadow-sm px-4">
                <AccordionTrigger className="text-lg font-headline hover:no-underline">
                  <div className="flex items-center gap-4">
                    <step.icon className="w-6 h-6 text-primary" />
                    <span>{step.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pl-10">
                  {step.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
