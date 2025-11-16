import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const Interconnection = () => {
  const connections = [
    {
      title: "Transparent Investment",
      description: "The Agora tracks Acorn fund allocations, ensuring every startup dollar is traceable and accountable",
      modules: "Agora + Acorn",
    },
    {
      title: "Democratic Funding",
      description: "The Aegis enables private voting on which Acorn proposals receive community funding",
      modules: "Aegis + Acorn",
    },
    {
      title: "Verified Governance",
      description: "The Aegis and Agora work together to ensure government spending decisions are both private and transparent",
      modules: "Aegis + Agora",
    },
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            How They Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three modules, one unified vision: combining transparency, shared prosperity, and privacy to rebuild civic infrastructure
          </p>
        </div>

        {/* Interconnection diagram */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* Center circle with gradient */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="rounded-full w-32 h-32 flex items-center justify-center shadow-lg border-4"
                style={{
                  background: "var(--gradient-daedalus-accent)",
                  borderColor: "hsl(var(--daedalus-gold))"
                }}
              >
                <div className="text-center text-white">
                  <div className="font-bold text-sm">The New</div>
                  <div className="font-bold text-sm">Balance</div>
                </div>
              </div>
            </div>

            {/* Module circles */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <div className="bg-agora/10 border-4 border-agora rounded-full w-24 h-24 flex items-center justify-center">
                <span className="text-3xl">🏛️</span>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0">
              <div className="bg-acorn/10 border-4 border-acorn rounded-full w-24 h-24 flex items-center justify-center">
                <span className="text-3xl">🌰</span>
              </div>
            </div>
            
            <div className="absolute bottom-0 right-0">
              <div className="bg-aegis/10 border-4 border-aegis rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                <svg className="h-12 w-12 text-aegis" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>

            {/* Connection lines with module colors */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              <line x1="50%" y1="20%" x2="50%" y2="50%" stroke="hsl(var(--agora))" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="hsl(var(--acorn))" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="hsl(var(--aegis))" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>
        </div>

        {/* Connection examples */}
        <div className="grid md:grid-cols-3 gap-6">
          {connections.map((connection, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <ArrowRight className="h-5 w-5 text-primary" />
                <h3 className="font-bold font-heading">{connection.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{connection.description}</p>
              <div className="text-xs font-mono text-primary">{connection.modules}</div>
            </Card>
          ))}
        </div>

        {/* Unified principles */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-lg font-semibold">Together, they embody The New Balance principles:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-agora/10 border border-agora text-agora rounded-full text-sm font-medium">
              Technocratic Democracy
            </span>
            <span className="px-4 py-2 bg-acorn/10 border border-acorn text-acorn rounded-full text-sm font-medium">
              Open-Source Capitalism
            </span>
            <span className="px-4 py-2 bg-aegis/10 border border-aegis text-aegis rounded-full text-sm font-medium">
              Privacy & Freedom
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
