import interiorImage from "@/assets/interior.jpg";
import exteriorImage from "@/assets/exterior.jpeg";
import amenitiesImage from "@/assets/amenities.jpg";

const Gallery = () => {
  return (
    <section className="py-24 bg-[#f5f1e8]">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-luxury-green">
            A LOOK INTO YOUR FUTURE AT LIVINGTREE
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Interior */}
          <div className="relative cursor-pointer">
            <div className="absolute -top-16 -left-2 md:-left-3 lg:-left-4 flex flex-col items-center text-center w-12 md:w-16 select-none">
              <span className="font-serif text-6xl md:text-7xl leading-none text-luxury-green/40">01</span>
              <span className="font-sans text-[10px] md:text-sm text-luxury-green/60">Interior</span>
            </div>
            <div className="overflow-hidden group">
              <img
                src={interiorImage}
                alt="Interior"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Exterior (lowered) */}
          <div className="relative cursor-pointer md:translate-y-6 lg:translate-y-16">
            <div className="absolute -top-16 -left-2 md:-left-3 lg:-left-4 flex flex-col items-center text-center w-12 md:w-16 select-none">
              <span className="font-serif text-6xl md:text-7xl leading-none text-luxury-green/40">02</span>
              <span className="mt-1 font-sans text-[10px] md:text-xs text-luxury-green/60">Exterior</span>
            </div>
            <div className="overflow-hidden group">
              <img
                src={exteriorImage}
                alt="Exterior"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Amenities */}
          <div className="relative cursor-pointer">
            <div className="absolute -top-16 -left-2 md:-left-3 lg:-left-4 flex flex-col items-center text-center w-12 md:w-16 select-none">
              <span className="font-serif text-6xl md:text-7xl leading-none text-luxury-green/40">03</span>
              <span className="mt-1 font-sans text-[10px] md:text-xs text-luxury-green/60">Amenities</span>
            </div>
            <div className="overflow-hidden group">
              <img
                src={amenitiesImage}
                alt="Amenities"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
