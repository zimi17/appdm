import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Calculator, Landmark } from 'lucide-react';

const programs = [
  {
    icon: Briefcase,
    title: "S1 Management",
    description: "Master the art of business leadership and strategy to thrive in the corporate world.",
  },
  {
    icon: Calculator,
    title: "S1 Accounting",
    description: "Develop expertise in financial reporting, auditing, and taxation for a successful accounting career.",
  },
  {
    icon: Landmark,
    title: "D3 Accounting",
    description: "Gain practical accounting skills for immediate application in various business environments.",
  }
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-accent">Academic Programs</h2>
          <p className="mt-2 text-lg text-muted-foreground">Find the right path to your future success.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.title} className="flex flex-col overflow-hidden shadow-md hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="flex-row items-center gap-4 pb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                    <program.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                    <CardTitle className="font-headline text-xl">{program.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{program.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-primary p-0 h-auto">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
