import { Card } from "@/components/ui/card";
import { Settings, Compass, Handshake } from "lucide-react";

const pillars = [
  {
    icon: Settings,
    title: "Open-Source Capitalism",
    subtitle: "Markets thrive when knowledge and ownership are shared.",
    points: [
      "Every citizen should own a stake in the economy.",
      "Innovation must remain free — but value must circulate.",
      "No monopoly should own the digital commons.",
    ],
    cta: "→ Create, share, and rebuild trust in progress.",
    color: "text-primary",
  },
  {
    icon: Compass,
    title: "Technocratic Democracy",
    subtitle: "Democracy must evolve — not vanish.",
    points: [
      "Citizens choose direction, experts design execution.",
      "Full transparency for budgets, contracts, and algorithms.",
      "Leadership as service, not status.",
    ],
    cta: "→ Competence without elitism. Participation without chaos.",
    color: "text-secondary",
  },
  {
    icon: Handshake,
    title: "Shared Prosperity & Freedom",
    subtitle: "Freedom means nothing without dignity.",
    points: [
      "A universal income floor to replace bureaucratic welfare.",
      "Guaranteed access to housing, healthcare, and learning.",
      "Privacy and digital rights are non-negotiable.",
    ],
    cta: "→ Freedom is infrastructure.",
    color: "text-primary",
  },
];

export const Pillars = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-heading">
          Our Three Pillars
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-primary/50"
            >
              <pillar.icon className={`h-12 w-12 mb-6 ${pillar.color}`} />
              
              <h3 className="text-2xl font-bold mb-3 font-heading">
                {pillar.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 font-medium">
                {pillar.subtitle}
              </p>
              
              <ul className="space-y-3 mb-6">
                {pillar.points.map((point, i) => (
                  <li key={i} className="text-sm text-foreground flex items-start">
                    <span className={`mr-2 ${pillar.color}`}>•</span>
                    {point}
                  </li>
                ))}
              </ul>
              
              <p className="text-sm font-semibold text-foreground pt-4 border-t">
                {pillar.cta}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
