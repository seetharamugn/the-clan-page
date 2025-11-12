import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import clanLogo from "@/assets/Clan.png";
import geLogo from "@/assets/GE.png";
import greenBg from "@/assets/Green BG.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "/about" },
    { label: "Amenities", href: "/amenities" },
    { label: "Unit Plans", href: "/unit-plans" },
    { label: "Gallery", href: "/gallery" },
    { label: "Project Status", href: "/project-status" },
    { label: "Location", href: "/location" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const handleMenuClick = (href: string) => {
    setMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 w-full overflow-hidden"
        style={{
          backgroundImage: `url(${greenBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-luxury-green/40 backdrop-blur-sm" />
        <div className="container mx-auto px-4 md:px-4 lg:px-12 xl:px-28 max-w-full relative z-10">
          <div className="flex items-center justify-between h-20 w-full">
            {/* Left Logo */}
            <div className="flex-shrink-0">
              <img 
                src={clanLogo} 
                alt="The Clan - Community Living Tree" 
                className="h-10 md:h-16 w-auto"
              />
            </div>
            
            {/* Center Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-sans text-[19px] text-luxury-gold hover:text-luxury-gold/80 transition-colors tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            {/* Right Logo */}
            <div className="hidden lg:flex flex-shrink-0">
              <img 
                src={geLogo} 
                alt="Global Edifice" 
                className="h-12 md:h-20 w-auto"
              />
            </div>
            
            {/* Mobile Menu Button - 3 Gold Lines */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden absolute right-0 flex flex-col gap-1.5 p-2 hover:opacity-80 transition-opacity"
              aria-label="Open menu"
            >
              <span className="w-6 h-0.5 bg-luxury-gold rounded-full"></span>
              <span className="w-6 h-0.5 bg-luxury-gold rounded-full"></span>
              <span className="w-6 h-0.5 bg-luxury-gold rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] z-[70] transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage: `url(${greenBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-luxury-green-dark/30 backdrop-blur-sm" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-luxury-gold/20">
            <img 
              src={clanLogo} 
              alt="The Clan" 
              className="h-12 w-auto"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-luxury-gold hover:text-luxury-gold/80 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col py-6 px-6 space-y-0 flex-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleMenuClick(item.href)}
                className="font-sans text-lg text-luxury-gold hover:bg-luxury-gold/10 py-4 px-4 rounded-sm transition-colors border-b border-luxury-gold/10"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Footer Logo */}
          <div className="pb-4 8pt-0 flex justify-center">
            <img 
              src={geLogo} 
              alt="Global Edifice" 
              className="h-20 w-auto opacity-80"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
