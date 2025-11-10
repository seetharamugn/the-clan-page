import lobbyImage from "@/assets/lobby.jpg";
import buildingImage from "@/assets/building-exterior.jpg";
import hallwayImage from "@/assets/interior-hallway.jpg";

const Gallery = () => {
  return (
    <section className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4 text-foreground md:text-5xl">
            A LOOK INTO YOUR FUTURE AT <span className="text-luxury-green">LIVINGTREE</span>
          </h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden group cursor-pointer">
            <img 
              src={lobbyImage} 
              alt="Entrance Lobby" 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="overflow-hidden group cursor-pointer">
            <img 
              src={buildingImage} 
              alt="Building Exterior" 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="overflow-hidden group cursor-pointer">
            <img 
              src={hallwayImage} 
              alt="Interior Design" 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
