import { ArrowDown } from "lucide-react";
import daedalusLogo from "@/assets/daedalus-logo.png";

export const DaedalusHero = () => {
  const scrollToIntro = () => {
    const intro = document.getElementById("introduction");
    intro?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient with logo colors */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-daedalus-hero)" }}
      />
      
      {/* Enhanced grid overlay with technical blueprint aesthetic */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--daedalus-blue-deep)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--daedalus-blue-deep)) 1px, transparent 1px),
            radial-gradient(circle at 0 0, hsl(var(--daedalus-orange)) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '50px 50px, 50px 50px, 50px 50px'
        }}
      />

      {/* Radial glow effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at center top, hsl(var(--daedalus-gold) / 0.3) 0%, transparent 60%)`
        }}
      />

      <div className="relative z-10 container mx-auto max-w-5xl text-center space-y-8 animate-fade-in">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={daedalusLogo} 
            alt="Project Daedalus Logo" 
            className="w-48 md:w-72 lg:w-80 h-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          />
        </div>

        <div className="space-y-4">
          <h1 
            className="text-5xl md:text-7xl font-bold font-heading leading-tight"
            style={{
              background: "var(--gradient-daedalus-accent)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Project Daedalus
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            The Open-Source Civic Infrastructure
          </p>
        </div>

        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Creating a transparent, intelligent, and equitable digital layer for modern governance and economic participation
        </p>

        {/* Tech stack badges with logo colors */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          <span className="px-4 py-2 bg-card border-2 border-agora rounded-full text-sm font-medium hover:bg-agora/10 transition-colors">
            Base L2 Blockchain
          </span>
          <span className="px-4 py-2 bg-card border-2 border-acorn rounded-full text-sm font-medium hover:bg-acorn/10 transition-colors">
            AI-Powered
          </span>
          <span className="px-4 py-2 bg-card border-2 border-aegis rounded-full text-sm font-medium hover:bg-aegis/10 transition-colors">
            Zero-Knowledge Proofs
          </span>
          <span className="px-4 py-2 bg-card border-2 border-agora rounded-full text-sm font-medium hover:bg-agora/10 transition-colors">
            Open Source
          </span>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToIntro}
          className="mt-12 inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          aria-label="Scroll to introduction"
        >
          <span className="text-sm font-medium">Explore the Modules</span>
          <ArrowDown className="h-6 w-6 animate-bounce group-hover:text-primary" />
        </button>
      </div>
    </section>
  );
};
