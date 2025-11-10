import { Building2, Trees, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Premium Architecture",
    description: "Contemporary design with timeless elegance"
  },
  {
    icon: Trees,
    title: "Green Spaces",
    description: "Surrounded by lush landscaped gardens"
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Advanced security systems for peace of mind"
  },
  {
    icon: Heart,
    title: "Lifestyle Amenities",
    description: "World-class facilities for modern living"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-luxury-green text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4 md:text-5xl">
            DESIGNED FOR <span className="text-luxury-gold">FOUR GENERATIONS</span>
          </h2>
          <p className="font-sans text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            A thoughtfully planned community that caters to every member of your family, from the youngest to the eldest, ensuring comfort and joy for all.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg bg-primary-foreground/5 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-luxury-gold/20">
                <feature.icon className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="font-sans text-sm text-primary-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
