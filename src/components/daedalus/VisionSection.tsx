import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const VisionSection = () => {
  const connections = [
    {
      module: "The Agora",
      principle: "Technocratic Democracy",
      color: "agora",
      description: "Decision-making combining citizen participation with technical expertise and radical transparency",
      quote: "Every public budget, contract, and algorithm must be open and verifiable."
    },
    {
      module: "The Acorn",
      principle: "Open-Source Capitalism",
      color: "acorn",
      description: "Democratizing access to capital while preserving free enterprise dynamism and merit-based opportunity",
      quote: "The rewards of collective productivity must circulate, not concentrate."
    },
    {
      module: "The Aegis",
      principle: "Privacy & Freedom",
      color: "aegis",
      description: "Privacy as foundation of freedom, transparency through verifiable systems, not surveillance",
      quote: "Privacy is not opacity. Trust must be earned through transparency, not demanded through surveillance."
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Fulfilling The New Balance Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each module embodies core principles from our manifesto, translating ideals into working technology
          </p>
        </div>

        {/* Connection cards */}
        <div className="space-y-8">
          {connections.map((connection, index) => (
            <Card 
              key={index} 
              className="p-8 border-l-4" 
              style={{ borderLeftColor: `hsl(var(--${connection.color}))` }}
            >
              <div className="grid md:grid-cols-[300px_1fr] gap-6">
                <div>
                  <h3 className={`text-2xl font-bold font-heading mb-2 text-${connection.color}`}>
                    {connection.module}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-1 w-12 rounded" style={{ backgroundColor: `hsl(var(--${connection.color}))` }}></div>
                    <span className="text-sm font-semibold text-muted-foreground">
                      {connection.principle}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {connection.description}
                  </p>
                  
                  <div className="bg-background p-4 rounded-lg border-l-2" style={{ borderLeftColor: `hsl(var(--${connection.color}))` }}>
                    <div className="flex gap-3">
                      <Quote className={`h-5 w-5 text-${connection.color} flex-shrink-0`} />
                      <p className="text-sm italic">{connection.quote}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Core manifesto principles */}
        <div className="mt-16 text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading">
              Three Pillars, One Movement
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Project Daedalus is the technical foundation for The New Balance—where freedom meets fairness, where markets serve people, and where technology empowers rather than controls.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <Card className="p-6 max-w-xs bg-background">
              <div className="text-3xl mb-3">⚖️</div>
              <h4 className="font-bold mb-2">Balance</h4>
              <p className="text-sm text-muted-foreground">
                Individual liberty and collective wellbeing reinforcing each other
              </p>
            </Card>
            
            <Card className="p-6 max-w-xs bg-background">
              <div className="text-3xl mb-3">🔓</div>
              <h4 className="font-bold mb-2">Openness</h4>
              <p className="text-sm text-muted-foreground">
                Transparent systems that can be understood, audited, and improved by all
              </p>
            </Card>
            
            <Card className="p-6 max-w-xs bg-background">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-bold mb-2">Participation</h4>
              <p className="text-sm text-muted-foreground">
                Every citizen empowered to contribute, decide, and benefit
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
