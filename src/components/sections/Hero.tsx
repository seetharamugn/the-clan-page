import heroImage from "@/assets/hero-aerial.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-luxury-green-dark/40" />
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-primary-foreground md:text-7xl lg:text-8xl animate-fade-in">
          LIVE THE LEGACY OF<br />
          <span className="text-luxury-gold">COMMUNITY LIVING</span>
        </h1>
        <p className="mb-8 max-w-2xl font-sans text-lg text-primary-foreground/90 md:text-xl">
          Experience unparalleled luxury in the heart of nature's embrace
        </p>
        <Button 
          size="lg" 
          className="bg-luxury-gold text-luxury-green-dark hover:bg-luxury-gold/90 font-semibold px-8 py-6 text-lg"
        >
          Explore Residences
        </Button>
      </div>
    </section>
  );
};

export default Hero;
