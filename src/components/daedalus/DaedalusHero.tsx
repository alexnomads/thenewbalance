import { ArrowDown } from "lucide-react";

export const DaedalusHero = () => {
  const scrollToIntro = () => {
    const intro = document.getElementById("introduction");
    intro?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 container mx-auto max-w-5xl text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
            Project Daedalus
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            The Open-Source Civic Infrastructure
          </p>
        </div>

        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Creating a transparent, intelligent, and equitable digital layer for modern governance and economic participation
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">
            Base L2 Blockchain
          </span>
          <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">
            AI-Powered
          </span>
          <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">
            Zero-Knowledge Proofs
          </span>
          <span className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium">
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
