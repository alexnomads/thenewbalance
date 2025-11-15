import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ModuleSectionProps {
  id: string;
  icon?: string;
  iconComponent?: LucideIcon;
  title: string;
  subtitle: string;
  tagline: string;
  color: "agora" | "acorn" | "aegis";
  purpose: string;
  howItWorks: string[];
  technology: string;
  example: {
    title: string;
    oldWay: string;
    newWay: string;
    advantage: string;
  };
  advantages: string[];
}

export const ModuleSection = ({
  id,
  icon,
  iconComponent: IconComponent,
  title,
  subtitle,
  tagline,
  color,
  purpose,
  howItWorks,
  technology,
  example,
  advantages,
}: ModuleSectionProps) => {
  return (
    <section id={id} className="py-24 px-6 scroll-mt-16">
      <div className="container mx-auto max-w-6xl">
        {/* Module header */}
        <div className="text-center space-y-4 mb-16">
          {icon && <div className="text-7xl mb-4">{icon}</div>}
          {IconComponent && (
            <div className="flex justify-center mb-4">
              <div className={`bg-${color}/10 p-6 rounded-full`}>
                <IconComponent className={`h-16 w-16 text-${color}`} />
              </div>
            </div>
          )}
          <h2 className={`text-4xl md:text-5xl font-bold font-heading text-${color}`}>
            {title}
          </h2>
          <p className="text-xl text-muted-foreground font-semibold">{subtitle}</p>
          <p className="text-lg italic text-foreground">{tagline}</p>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Purpose card */}
          <Card className="p-6 border-l-4" style={{ borderLeftColor: `hsl(var(--${color}))` }}>
            <h3 className="text-xl font-bold mb-3 font-heading">Purpose</h3>
            <p className="text-muted-foreground leading-relaxed">{purpose}</p>
          </Card>

          {/* How it works card */}
          <Card className="p-6 border-l-4" style={{ borderLeftColor: `hsl(var(--${color}))` }}>
            <h3 className="text-xl font-bold mb-3 font-heading">How It Works</h3>
            <ol className="space-y-2">
              {howItWorks.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className={`font-bold text-${color} flex-shrink-0`}>{index + 1}.</span>
                  <span className="text-sm text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </Card>

          {/* Technology simplified card */}
          <Card className="p-6 md:col-span-2 border-l-4" style={{ borderLeftColor: `hsl(var(--${color}))` }}>
            <h3 className="text-xl font-bold mb-3 font-heading">Technology (Simplified)</h3>
            <p className="text-muted-foreground leading-relaxed">{technology}</p>
          </Card>
        </div>

        {/* Real-life example */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 font-heading text-center">Real-Life Example</h3>
          <Card className="p-8 border-2" style={{ borderColor: `hsl(var(--${color}))` }}>
            <h4 className="text-xl font-bold mb-6 text-center">{example.title}</h4>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-destructive"></div>
                  <h5 className="font-bold text-destructive">The Old Way</h5>
                </div>
                <p className="text-sm text-muted-foreground pl-4 border-l-2 border-destructive/30">
                  {example.oldWay}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: `hsl(var(--${color}))` }}></div>
                  <h5 className={`font-bold text-${color}`}>The New Balance Way</h5>
                </div>
                <p className="text-sm text-muted-foreground pl-4 border-l-2" style={{ borderColor: `hsl(var(--${color}) / 0.3)` }}>
                  {example.newWay}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t">
              <div className="flex items-start gap-3">
                <ArrowRight className={`h-5 w-5 text-${color} flex-shrink-0 mt-1`} />
                <div>
                  <h5 className="font-bold mb-2">Citizen Advantage</h5>
                  <p className="text-muted-foreground">{example.advantage}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Advantages callout */}
        <Card className="p-6 bg-card" style={{ backgroundColor: `hsl(var(--${color}) / 0.05)` }}>
          <h3 className="text-xl font-bold mb-4 font-heading">Citizen Advantages</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className={`h-5 w-5 text-${color} flex-shrink-0 mt-0.5`} />
                <span className="text-sm">{advantage}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
