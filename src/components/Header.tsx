import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-green/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <div className="font-serif text-xl font-bold text-luxury-gold leading-tight">
              <span className="italic text-2xl">The</span> CLAN
              <div className="text-[10px] text-primary-foreground tracking-widest font-sans font-normal">
                COMMUNITY LIVING TREE
              </div>
            </div>
          </div>
          
          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            <a href="#about" className="font-sans text-sm text-primary-foreground hover:text-luxury-gold transition-colors tracking-wide">
              About
            </a>
            <a href="#amenities" className="font-sans text-sm text-primary-foreground hover:text-luxury-gold transition-colors tracking-wide">
              Amenities
            </a>
            <a href="#unit-plans" className="font-sans text-sm text-primary-foreground hover:text-luxury-gold transition-colors tracking-wide">
              Unit Plans
            </a>
            <a href="#gallery" className="font-sans text-sm text-primary-foreground hover:text-luxury-gold transition-colors tracking-wide">
              Gallery
            </a>
            <a href="#project-status" className="font-sans text-sm text-primary-foreground hover:text-luxury-gold transition-colors tracking-wide">
              Project Status
            </a>
            <a href="#location" className="font-sans text-sm text-primary-foreground hover:text-luxury-gold transition-colors tracking-wide">
              Location
            </a>
            <a href="#contact" className="font-sans text-sm text-primary-foreground hover:text-luxury-gold transition-colors tracking-wide">
              Contact Us
            </a>
          </nav>
          
          {/* Right Badge/Logo */}
          <div className="hidden lg:flex flex-shrink-0">
            <div className="flex flex-col items-center justify-center px-3 py-2 border border-luxury-gold rounded">
              <div className="w-8 h-8 mb-1 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-luxury-gold rounded-full" />
              </div>
              <div className="text-[9px] text-luxury-gold font-sans font-semibold tracking-wider">
                GLOBAL
              </div>
              <div className="text-[9px] text-luxury-gold font-sans font-semibold tracking-wider">
                EDIFICE
              </div>
              <div className="text-[8px] text-primary-foreground font-sans mt-0.5">
                గృహప్రవేశ్
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="outline" 
            size="sm"
            className="lg:hidden border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
