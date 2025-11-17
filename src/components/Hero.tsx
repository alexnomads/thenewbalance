import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import tnbLogo from "@/assets/tnb-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Textured background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Large geometric circle - dominant anchor */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-40"
        style={{ background: "var(--gradient-circle)" }}
      />
      
      {/* TNB Logo watermark inside circle */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex items-center justify-center pointer-events-none"
      >
        <img 
          src={tnbLogo} 
          alt="" 
          className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-contain opacity-[0.15] mix-blend-multiply dark:mix-blend-screen dark:opacity-[0.10]"
        />
      </div>
      
      {/* Circuit-like network patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        {/* Horizontal and vertical grid lines */}
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="hsl(var(--secondary))" strokeWidth="1" />
        <line x1="0" y1="80%" x2="100%" y2="80%" stroke="hsl(var(--secondary))" strokeWidth="1" />
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="hsl(var(--secondary))" strokeWidth="1" />
        <line x1="80%" y1="0" x2="80%" y2="100%" stroke="hsl(var(--secondary))" strokeWidth="1" />
        
        {/* Network nodes */}
        <circle cx="20%" cy="20%" r="4" fill="hsl(var(--primary))" />
        <circle cx="80%" cy="20%" r="4" fill="hsl(var(--primary))" />
        <circle cx="20%" cy="80%" r="4" fill="hsl(var(--primary))" />
        <circle cx="80%" cy="80%" r="4" fill="hsl(var(--primary))" />
        <circle cx="50%" cy="50%" r="6" fill="hsl(var(--secondary))" />
        
        {/* Connecting lines to center */}
        <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
      
      {/* Painterly geometric blocks */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rotate-45" />
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-secondary/10 -rotate-12" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/20 rotate-12" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-heading text-secondary leading-tight">
            The New Balance:{" "}
            <span className="text-primary">Freedom</span>,{" "}
            <span className="text-secondary">Fairness</span>,{" "}
            <span className="text-foreground">Intelligence</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A new social contract for the 21st century — blending open-source capitalism, 
            technocratic democracy, and shared prosperity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="text-lg group bg-primary hover:bg-primary/90" asChild>
              <Link to="/join">
                Join the movement
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-secondary text-secondary hover:bg-secondary hover:text-white" 
              asChild
            >
              <Link to="/manifesto">Read the Manifesto</Link>
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg" 
              asChild
            >
              <Link to="/daedalus">Build the Future</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
