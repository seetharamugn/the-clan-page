import buildingImage from "@/assets/building-exterior.jpg";

const Lifestyle = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              ENHANCING <span className="text-luxury-gold">LIFESTYLES</span>.<br />
              TRANSFORMING <span className="text-luxury-green">SKYLINES</span>.
            </h2>
            <div className="h-1 w-24 bg-luxury-gold" />
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Our commitment extends beyond creating homes; we craft landmarks that define the cityscape. Each residence is designed to elevate your lifestyle while contributing to the architectural heritage of the city.
            </p>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              With attention to every detail, from the grand facade to intimate living spaces, we create environments that inspire and endure for generations.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={buildingImage} 
              alt="Building Skyline" 
              className="w-full h-[500px] object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
