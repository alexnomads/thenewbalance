import { Card } from "@/components/ui/card";
import { Users, Shield, Rocket, AlertCircle } from "lucide-react";

export const FundingGoal = () => {
  const breakdown = [
    {
      icon: Users,
      title: "World-Class Team",
      amount: "$850,000",
      description: "Specialized engineering talent across blockchain, AI, security, and full-stack development, plus project management",
      details: [
        "Blockchain/Protocol Engineer",
        "AI/ML Engineer",
        "Full-Stack Developer",
        "Security Engineer",
        "Project Manager"
      ]
    },
    {
      icon: Shield,
      title: "Infrastructure & Security",
      amount: "$150,000",
      description: "Cloud hosting, blockchain services, comprehensive smart contract audits, and legal compliance",
      details: [
        "Cloud hosting & services",
        "Blockchain infrastructure",
        "Smart contract audits",
        "Legal compliance"
      ]
    },
    {
      icon: Rocket,
      title: "Community & Pilot Program",
      amount: "$150,000",
      description: "Partner city onboarding, educational materials, documentation, and initial Acorn grants for early adopters",
      details: [
        "Partner city onboarding",
        "Educational materials",
        "Community documentation",
        "First Acorn grants"
      ]
    },
    {
      icon: AlertCircle,
      title: "Contingency Buffer",
      amount: "$100,000",
      description: "Reserve fund for unexpected challenges and opportunities during development",
      details: [
        "Technical challenges",
        "Regulatory changes",
        "Extended testing",
        "Additional security measures"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Funding Goal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building foundational infrastructure requires specialized expertise and resources
          </p>
          <div className="pt-4">
            <div className="inline-block">
              <div 
                className="text-5xl md:text-6xl font-bold font-heading bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-daedalus-accent)" }}
              >
                $1,250,000
              </div>
              <div className="text-muted-foreground text-sm mt-2">Over 18 months</div>
            </div>
          </div>
        </div>

        {/* Breakdown cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {breakdown.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4" style={{ borderLeftColor: index === 0 ? 'hsl(var(--agora))' : index === 1 ? 'hsl(var(--acorn))' : index === 2 ? 'hsl(var(--aegis))' : 'hsl(var(--daedalus-gold))' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: index === 0 ? 'hsl(var(--agora) / 0.1)' : index === 1 ? 'hsl(var(--acorn) / 0.1)' : index === 2 ? 'hsl(var(--aegis) / 0.1)' : 'hsl(var(--daedalus-gold) / 0.1)' }}>
                  <item.icon className="h-6 w-6" style={{ color: index === 0 ? 'hsl(var(--agora))' : index === 1 ? 'hsl(var(--acorn))' : index === 2 ? 'hsl(var(--aegis))' : 'hsl(var(--daedalus-gold))' }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold font-heading">{item.title}</h3>
                    <span className="text-lg font-bold" style={{ color: index === 0 ? 'hsl(var(--agora))' : index === 1 ? 'hsl(var(--acorn))' : index === 2 ? 'hsl(var(--aegis))' : 'hsl(var(--daedalus-gold))' }}>{item.amount}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <ul className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full" style={{ backgroundColor: index === 0 ? 'hsl(var(--agora))' : index === 1 ? 'hsl(var(--acorn))' : index === 2 ? 'hsl(var(--aegis))' : 'hsl(var(--daedalus-gold))' }}></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Emphasis callout */}
        <Card className="p-8 bg-primary/5 border-2 border-primary/20">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold font-heading">Why This Investment Matters</h3>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              This is not a weekend project—it's foundational infrastructure requiring battle-tested expertise in cryptography, distributed systems, and AI. This funding allows us to build production-ready technology and launch a real-world pilot that demonstrates the future of civic infrastructure.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-background rounded-full text-sm font-medium">
                ✓ Production-Ready Code
              </span>
              <span className="px-4 py-2 bg-background rounded-full text-sm font-medium">
                ✓ Security Audited
              </span>
              <span className="px-4 py-2 bg-background rounded-full text-sm font-medium">
                ✓ Real-World Pilot
              </span>
              <span className="px-4 py-2 bg-background rounded-full text-sm font-medium">
                ✓ Open Source
              </span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
