import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, MapPin, FileText, ArrowRight } from "lucide-react";

const actions = [
  {
    icon: Users,
    title: "Join our community",
    description: "Connect with builders and thinkers.",
  },
  {
    icon: MapPin,
    title: "Launch a city pilot",
    description: "Start a local experiment in your region.",
  },
  {
    icon: FileText,
    title: "Contribute to the framework",
    description: "Help shape the Open Balance Framework.",
  },
];

export const GetInvolved = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 font-heading">
          Get Involved
        </h2>
        
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          This is not a protest. It's a prototype.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {actions.map((action, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover:shadow-xl transition-all hover:scale-105 bg-card/80 backdrop-blur"
            >
              <action.icon className="h-12 w-12 mb-4 mx-auto text-primary" />
              <h3 className="text-xl font-bold mb-2 font-heading">{action.title}</h3>
              <p className="text-muted-foreground text-sm">{action.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="text-lg group">
            Join the movement today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
