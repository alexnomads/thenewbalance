import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-foreground text-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-bold font-heading">
            The New Balance Association
          </h3>
          
          <p className="text-lg text-background/80 max-w-2xl mx-auto">
            Building the next social architecture — together.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button variant="outline" className="bg-transparent border-background text-background hover:bg-background hover:text-foreground" asChild>
              <Link to="/join">Join</Link>
            </Button>
            <Button variant="outline" className="bg-transparent border-background text-background hover:bg-background hover:text-foreground" asChild>
              <Link to="/manifesto">Manifesto</Link>
            </Button>
            <Button variant="outline" className="bg-transparent border-background text-background hover:bg-background hover:text-foreground" asChild>
              <Link to="/daedalus">Project Daedalus</Link>
            </Button>
            <Button variant="outline" className="bg-transparent border-background text-background hover:bg-background hover:text-foreground">
              Newsletter
            </Button>
            <Button variant="outline" className="bg-transparent border-background text-background hover:bg-background hover:text-foreground">
              Forum
            </Button>
          </div>
          
          <div className="pt-8 border-t border-background/20 text-sm text-background/60">
            © 2025 The New Balance Association. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
