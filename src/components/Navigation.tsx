import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Examples', href: '#examples' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-lift">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-heading font-bold text-foreground">
              UGCGen
            </span>
          </Link>

          {/* Navigation Links - Only show on homepage */}
          {isHomePage && (
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" className="hidden sm:inline-flex">
                Dashboard
              </Button>
            </Link>
            <Button variant="outline">
              Sign In
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-glow">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;