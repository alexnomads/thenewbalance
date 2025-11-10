import { Card } from "@/components/ui/card";
import { Code, Brain, Heart } from "lucide-react";
import type { Pillar } from "@/pages/Join";

interface PillarSelectionProps {
  onSelect: (pillar: Pillar) => void;
}

const pillars = [
  {
    id: "capitalism" as Pillar,
    icon: Code,
    title: "Open-Source Capitalism",
    description: "Help build public markets that work for everyone: share code, datasets, or a small stake.",
    color: "primary",
  },
  {
    id: "democracy" as Pillar,
    icon: Brain,
    title: "Technocratic Democracy",
    description: "Join a civic lab: test policy prototypes, audit algorithms, or run a local deliberation.",
    color: "secondary",
  },
  {
    id: "prosperity" as Pillar,
    icon: Heart,
    title: "Shared Prosperity & Freedom",
    description: "Support a guaranteed dignity floor: sign, pilot, or design local programs.",
    color: "accent",
  },
];

export const PillarSelection = ({ onSelect }: PillarSelectionProps) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
          Join the Movement
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose how you want to contribute to building a better balance
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <Card
              key={pillar.id}
              onClick={() => onSelect(pillar.id)}
              className="p-8 text-center cursor-pointer hover:shadow-xl transition-all hover:scale-105 bg-card/80 backdrop-blur group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-16 w-16 rounded-full bg-${pillar.color}/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-${pillar.color}/20 transition-colors`}>
                <Icon className={`h-8 w-8 text-${pillar.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-primary transition-colors">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
