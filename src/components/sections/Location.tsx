import { MapPin, School, ShoppingBag, Hospital } from "lucide-react";

const advantages = [
  { icon: School, text: "Top Schools within 2km" },
  { icon: ShoppingBag, text: "Premium Shopping Centers nearby" },
  { icon: Hospital, text: "Multi-specialty Hospitals accessible" },
  { icon: MapPin, text: "Excellent Connectivity" }
];

const Location = () => {
  return (
    <section className="py-20 bg-luxury-green text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-4 md:text-5xl">
                <span className="text-luxury-gold">LOCATION</span> ADVANTAGES
              </h2>
              <p className="font-sans text-lg text-primary-foreground/90">
                Strategically located to offer the perfect balance between urban convenience and serene living
              </p>
            </div>
            
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0">
                    <advantage.icon className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <p className="font-sans text-lg">{advantage.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-96 bg-primary-foreground/10 flex items-center justify-center">
            <p className="font-sans text-lg text-center text-primary-foreground/70">
              Interactive Map<br />Coming Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
