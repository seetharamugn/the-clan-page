import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-green/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="font-serif text-2xl font-bold text-luxury-gold">
            THE CLAN
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="font-sans text-sm text-primary-foreground hover:text-luxury-gold transition-colors">
              HOME
            </a>
            <a href="#about" className="font-sans text-sm text-primary-foreground hover:text-luxury-gold transition-colors">
              ABOUT
            </a>
            <a href="#plans" className="font-sans text-sm text-primary-foreground hover:text-luxury-gold transition-colors">
              FLOOR PLANS
            </a>
            <a href="#amenities" className="font-sans text-sm text-primary-foreground hover:text-luxury-gold transition-colors">
              AMENITIES
            </a>
            <a href="#location" className="font-sans text-sm text-primary-foreground hover:text-luxury-gold transition-colors">
              LOCATION
            </a>
            <a href="#contact" className="font-sans text-sm text-primary-foreground hover:text-luxury-gold transition-colors">
              CONTACT
            </a>
          </nav>
          
          <Button 
            variant="outline" 
            size="sm"
            className="md:hidden border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
