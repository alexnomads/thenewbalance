import { Card } from "@/components/ui/card";
import { Code, Coins, Building2, ArrowRight } from "lucide-react";

const projects = [
  {
    icon: Code,
    title: "Open governance prototypes",
    description: "Participatory platforms and transparency dashboards.",
  },
  {
    icon: Coins,
    title: "Economic tools",
    description: "Cooperative ventures, shared equity models, automation dividends.",
  },
  {
    icon: Building2,
    title: "Local experiments",
    description: "City-scale pilots in housing, energy, and digital democracy.",
  },
];

export const WhatWeBuild = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-heading">
          What We Build
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all hover:translate-y-[-4px] border-l-4 border-l-primary"
            >
              <project.icon className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2 font-heading">{project.title}</h3>
              <p className="text-muted-foreground text-sm">{project.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-2xl font-semibold text-foreground flex items-center justify-center gap-2">
            <ArrowRight className="h-6 w-6 text-primary" />
            We design the future before we demand it.
          </p>
        </div>
      </div>
    </section>
  );
};
