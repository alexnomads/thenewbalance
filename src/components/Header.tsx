import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import tnbLogo from "@/assets/tnb-logo.png";
import xLogo from "@/assets/x-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/manifesto", label: "Manifesto" },
    { path: "/daedalus", label: "Project Daedalus" },
    { path: "/join", label: "Join" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={tnbLogo} 
              alt="The New Balance" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold font-heading text-secondary">
              The New Balance
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  className={
                    isActive(link.path)
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <a 
              href="https://x.com/tnbmov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-primary"
                aria-label="Follow us on X"
              >
                <img src={xLogo} alt="X" className="h-4 w-4" />
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    isActive(link.path)
                      ? "text-primary font-semibold"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <a 
              href="https://x.com/tnbmov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button
                variant="ghost"
                className="w-full justify-start text-foreground"
              >
                <img src={xLogo} alt="X" className="h-4 w-4 mr-2" />
                Follow on X
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
