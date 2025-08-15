import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, RefreshCw } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: "Empowerment",
    description: "We are committed to empowering individuals and communities through knowledge, skills, and opportunities, fostering a generation of leaders and innovators."
  },
  {
    icon: RefreshCw,
    title: "Change",
    description: "As a campus of change, we embrace and drive positive transformation, encouraging critical thinking and proactive solutions to societal challenges."
  }
];

export function CoreValuesSection() {
  return (
    <section id="values" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-accent">Our Core Values</h2>
          <p className="mt-2 text-lg text-muted-foreground">The principles that guide STIE Dwimulya.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value) => (
            <Card key={value.title} className="text-center border-2 border-primary/20 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl text-accent">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
