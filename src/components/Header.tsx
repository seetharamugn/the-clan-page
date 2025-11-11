import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import clanLogo from "@/assets/Clan.png";
import geLogo from "@/assets/GE.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-green backdrop-blur-sm">
      
      <div className="container mx-auto px-4 md:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <img 
              src={clanLogo} 
              alt="The Clan - Community Living Tree" 
              className="h-10 md:h-16 w-auto"
            />
          </div>
          
          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            <a href="#about" className="font-sans text-[15px] text-luxury-gold hover:text-luxury-gold/80 transition-colors tracking-wide">
              About
            </a>
            <a href="#amenities" className="font-sans text-[15px] text-luxury-gold hover:text-luxury-gold/80 transition-colors tracking-wide">
              Amenities
            </a>
            <a href="#unit-plans" className="font-sans text-[15px] text-luxury-gold hover:text-luxury-gold/80 transition-colors tracking-wide">
              Unit Plans
            </a>
            <a href="#gallery" className="font-sans text-[15px] text-luxury-gold hover:text-luxury-gold/80 transition-colors tracking-wide">
              Gallery
            </a>
            <a href="#project-status" className="font-sans text-[15px] text-luxury-gold hover:text-luxury-gold/80 transition-colors tracking-wide">
              Project Status
            </a>
            <a href="#location" className="font-sans text-[15px] text-luxury-gold hover:text-luxury-gold/80 transition-colors tracking-wide">
              Location
            </a>
            <a href="#contact" className="font-sans text-[15px] text-luxury-gold hover:text-luxury-gold/80 transition-colors tracking-wide">
              Contact Us
            </a>
          </nav>
          
          {/* Right Logo */}
          <div className="hidden lg:flex flex-shrink-0">
            <img 
              src={geLogo} 
              alt="Global Edifice" 
              className="h-12 md:h-20 w-auto"
            />
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
