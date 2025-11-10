import tourImage from "@/assets/interior-hallway.jpg";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VirtualTour = () => {
  return (
    <section className="py-20 bg-luxury-cream px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-4 text-foreground md:text-5xl">
            A JOURNEY THROUGH YOUR <span className="text-luxury-green">FUTURE HOME</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the luxury of your new home through our immersive virtual tour
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <img 
            src={tourImage} 
            alt="Virtual Tour" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-luxury-green-dark/30 flex items-center justify-center">
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
