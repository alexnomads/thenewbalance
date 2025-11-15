import { Card } from "@/components/ui/card";
import { Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    icon: "🏛️",
    title: "The Agora",
    subtitle: "Transparent Public Finance Ledger",
    description: "Making all public spending traceable and auditable through blockchain and AI, bringing radical transparency to governance.",
    link: "/daedalus#agora",
    color: "agora",
  },
  {
    icon: "🌰",
    title: "The Acorn",
    subtitle: "Cooperative Capital & Startup Fund",
    description: "Democratizing investment and shared prosperity through decentralized funding where citizens share in the wealth they help create.",
    link: "/daedalus#acorn",
    color: "acorn",
  },
  {
    iconComponent: Shield,
    title: "The Aegis",
    subtitle: "Private & Verifiable Voting",
    description: "Secure, privacy-preserving democratic participation using zero-knowledge proofs for verifiable yet anonymous voting.",
    link: "/daedalus#aegis",
    color: "aegis",
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
            <Link key={index} to={project.link}>
              <Card 
                className={`p-6 h-full hover:shadow-lg transition-all hover:translate-y-[-4px] cursor-pointer border-l-4 border-l-${project.color}`}
              >
                {project.icon && (
                  <div className="text-5xl mb-4">{project.icon}</div>
                )}
                {project.iconComponent && (
                  <project.iconComponent className={`h-12 w-12 mb-4 text-${project.color}`} />
                )}
                <h3 className="text-xl font-bold mb-1 font-heading">{project.title}</h3>
                <p className="text-sm font-semibold text-muted-foreground mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-2xl font-semibold text-foreground flex items-center justify-center gap-2">
            <ArrowRight className="h-6 w-6 text-primary" />
            Three interconnected modules building the future of civic infrastructure
          </p>
        </div>
      </div>
    </section>
  );
};
