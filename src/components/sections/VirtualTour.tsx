import tourImage from "@/assets/interior-hallway.jpg";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import creamBg from "@/assets/Cream BG.png";

const VirtualTour = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            A JOURNEY THROUGH YOUR <span className="text-luxury-green">FUTURE HOME</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the luxury of your new home through our immersive virtual tour
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto rounded-md overflow-hidden shadow-[0_18px_30px_rgba(0,0,0,0.18),0_12px_12px_rgba(0,0,0,0.14)]">
          <img 
            src={tourImage} 
            alt="Virtual Tour" 
            className="w-full h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-luxury-green-dark/20 flex items-center justify-center">
            <Button 
              size="lg"
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-green-dark rounded-full w-20 h-20 p-0"
            >
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
