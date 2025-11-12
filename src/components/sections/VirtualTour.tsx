import tourImage from "@/assets/interior-hallway.jpg";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import creamBg from "@/assets/Cream BG.png";

const VirtualTour = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 px-2">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground">
            A JOURNEY THROUGH YOUR <span className="text-luxury-green">FUTURE HOME</span>
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-3 md:mt-4 leading-relaxed">
            Experience the luxury of your new home through our immersive virtual tour
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto rounded-md overflow-hidden shadow-[0_18px_30px_rgba(0,0,0,0.18),0_12px_12px_rgba(0,0,0,0.14)]">
          <img 
            src={tourImage} 
            alt="Virtual Tour" 
            className="w-full h-[300px] sm:h-[400px] md:h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-luxury-green-dark/20 flex items-center justify-center">
            <Button 
              size="lg"
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-green-dark rounded-full w-16 h-16 sm:w-20 sm:h-20 p-0"
            >
              <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" fill="currentColor" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
