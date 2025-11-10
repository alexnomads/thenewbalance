import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-heading">The New Balance:
Freedom, Fairness, 
Intelligence.{" "}
            <span className="text-primary">
Freedom</span>,{" "}
            <span className="text-secondary">Fairness</span>,{" "}
            <span className="text-foreground">Intelligence</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A new social contract for the 21st century — blending open-source capitalism, 
            technocratic democracy, and shared prosperity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="text-lg group">
              Join the movement
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <Link to="/manifesto">Read the Manifesto</Link>
            </Button>
            <Button size="lg" variant="secondary" className="text-lg">
              Build the Future
            </Button>
          </div>
        </div>
      </div>
    </section>;
};