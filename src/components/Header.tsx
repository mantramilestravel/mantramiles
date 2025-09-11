import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png"; 

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentView: string;
  onBackToHome: () => void;
}

export const Header = ({ onNavigate, currentView, onBackToHome }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", action: () => onBackToHome(), sectionId: "home" },
    { name: "Top Packages", action: () => onNavigate("packages"), sectionId: "top-packages" },
    { name: "Blog", action: () => onNavigate("blog"), sectionId: "blog" },
    { name: "Domestic", action: () => onNavigate("domestic"), sectionId: "destinations" },
    { name: "International", action: () => onNavigate("international"), sectionId: "destinations" },
    { name: "About", action: () => onNavigate("about"), sectionId: "about" },
    { name: "Contact", action: () => onNavigate("contact"), sectionId: "footer" },

  ];

  const handleNavigation = (item) => {
    if (currentView === "home") {
      const element = document.getElementById(item.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // Fallback for sections not on the home page
        item.action();
      }
    } else {
      item.action();
    }
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3">
          {/* Logo image */}
          <img
            src = {logo}
            alt="Mantra Miles Logo"
            className="h-14 w-14 rounded-sm object-contain"
          />

          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-foreground">Mantra Miles</h1>
            <span className="text-xs text-muted-foreground">
              Sacred Journeys. Shared Souls.
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => handleNavigation(item)}
            >
              {item.name}
            </Button>
          ))}
          
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4 flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="justify-start text-foreground hover:text-primary"
                onClick={() => handleNavigation(item)}
              >
                {item.name}
              </Button>
            ))}
            
          </nav>
        </div>
      )}
    </header>
  );
};
