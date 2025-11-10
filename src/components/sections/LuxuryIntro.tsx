import interiorImage from "@/assets/interior-luxury.jpg";

const LuxuryIntro = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              ROOTED IN <span className="text-luxury-gold">LUXURY</span>,<br />
              BRANCHING INTO <span className="text-luxury-green">THE FUTURE</span>
            </h2>
            <div className="h-1 w-24 bg-luxury-gold" />
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Welcome to a residence that redefines modern luxury living. Every detail has been meticulously crafted to provide an unparalleled living experience. From the grand entrance to the thoughtfully designed interiors, experience a lifestyle that speaks volumes about your refined taste.
            </p>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Our commitment to excellence is reflected in every corner, offering you not just a home, but a sanctuary where memories are created and traditions are built for generations to come.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={interiorImage} 
              alt="Luxury Interior" 
              className="w-full h-[500px] object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-luxury-green opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryIntro;
