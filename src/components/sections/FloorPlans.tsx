import { Button } from "@/components/ui/button";

const floorPlans = [
  {
    name: "2 BHK Premium",
    area: "1,250 sq.ft",
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    name: "3 BHK Luxury",
    area: "1,850 sq.ft",
    bedrooms: 3,
    bathrooms: 3,
  }
];

const FloorPlans = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4 text-foreground md:text-5xl">
            SPACES DESIGNED FOR YOUR <span className="text-luxury-gold">UNIQUE LIFESTYLE</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            Thoughtfully planned layouts that maximize space, light, and functionality
          </p>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2">
          {floorPlans.map((plan, index) => (
            <div key={index} className="text-center animate-fade-in">
              <div className="bg-secondary/30 p-8 mb-6 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto border-2 border-luxury-green/20 flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-serif text-2xl font-bold text-luxury-green mb-2">{plan.name}</p>
                      <p className="font-sans text-lg text-muted-foreground">{plan.area}</p>
                      <div className="mt-4 space-y-1">
                        <p className="font-sans text-sm">{plan.bedrooms} Bedrooms</p>
                        <p className="font-sans text-sm">{plan.bathrooms} Bathrooms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="bg-luxury-green hover:bg-luxury-green-dark text-primary-foreground">
                View Floor Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
