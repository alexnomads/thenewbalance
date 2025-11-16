import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, BookOpen, Users } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Join the Movement
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Project Daedalus is open source and built by the community. Whether you're a developer, citizen, or visionary—there's a place for you.
          </p>
        </div>

        {/* CTA buttons with module colors */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <Button size="lg" asChild className="group bg-acorn hover:bg-acorn-light">
            <Link to="/join?pillar=capitalism">
              <Code className="mr-2 h-5 w-5" />
              Contribute to Development
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button size="lg" variant="outline" asChild className="group border-agora text-agora hover:bg-agora/10">
            <Link to="/manifesto">
              <BookOpen className="mr-2 h-5 w-5" />
              Read the Full Manifesto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button size="lg" asChild className="group bg-aegis hover:bg-aegis-light">
            <Link to="/join">
              <Users className="mr-2 h-5 w-5" />
              Join the Community
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Stats or social proof section */}
        <div className="grid md:grid-cols-3 gap-6 pt-12 border-t">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold font-heading bg-gradient-to-r from-agora to-agora-light bg-clip-text text-transparent">
              Open Source
            </div>
            <p className="text-sm text-muted-foreground">
              Built transparently, owned by the community
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="text-4xl font-bold font-heading bg-gradient-to-r from-acorn to-acorn-light bg-clip-text text-transparent">
              Merit-Based
            </div>
            <p className="text-sm text-muted-foreground">
              Contribution valued over credentials
            </p>
          </div>

          <div className="text-center space-y-2">
            <div className="text-4xl font-bold font-heading bg-gradient-to-r from-aegis to-aegis-light bg-clip-text text-transparent">
              Privacy First
            </div>
            <p className="text-sm text-muted-foreground">
              Your data, your control, always
            </p>
          </div>
        </div>

        {/* Back to top */}
        <div className="text-center mt-16">
          <Button
            variant="ghost"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group"
          >
            Back to Top
            <ArrowRight className="ml-2 h-4 w-4 rotate-[-90deg] group-hover:translate-y-[-4px] transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
