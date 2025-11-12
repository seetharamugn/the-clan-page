import { useState } from "react";
import Header from "@/components/Header";
import FooterBar from "@/components/sections/FooterBar";
import Contact from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import creamBg from "@/assets/Cream BG.png";
import greenBg from "@/assets/Green BG.jpg";
import aerialNight from "@/assets/Aerial_Night.jpeg";
import interiorLuxury from "@/assets/interior-luxury.jpg";
import buildingExterior from "@/assets/building-exterior.jpg";
import lobby from "@/assets/lobby.jpg";
import hallway from "@/assets/interior-hallway.jpg";
import amenities from "@/assets/amenities.jpeg";
import exterior from "@/assets/exterior.jpeg";
import interior from "@/assets/interior.jpeg";

const Amenities = () => {
  const [selectedType, setSelectedType] = useState<"interior" | "exterior">("interior");

  const interiorAmenities = [
    { image: interiorLuxury, title: "Luxury Interiors" },
    { image: lobby, title: "Grand Lobby" },
    { image: hallway, title: "Interior Hallway" },
    { image: interior, title: "Premium Spaces" },
    { image: amenities, title: "Amenity Centers" },
    { image: interiorLuxury, title: "Modern Living" },
  ];

  const exteriorAmenities = [
    { image: buildingExterior, title: "Building Exterior" },
    { image: exterior, title: "Landscape Design" },
    { image: aerialNight, title: "Aerial View" },
    { image: buildingExterior, title: "Architecture" },
    { image: exterior, title: "Open Spaces" },
    { image: aerialNight, title: "Night View" },
  ];

  const currentAmenities = selectedType === "interior" ? interiorAmenities : exteriorAmenities;

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Header />
      
      <main className="pt-20 overflow-x-hidden w-full">
        {/* Section 1: Hero with Amenities Heading */}
        <section 
          className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-end overflow-hidden"
          style={{
            backgroundImage: `url(${aerialNight})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 pb-12 md:pb-16 lg:pb-20 px-4 md:px-8 w-full">
            <div className="mx-auto w-full max-w-[1600px]">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                AMENITIES
              </h1>
            </div>
          </div>
        </section>

        {/* Section 2: Elevate Your Everyday - White BG */}
        <section className="py-10 md:py-20 lg:py-24 bg-white overflow-hidden">
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
            <div className="text-center mb-8 md:mb-12 lg:mb-16 px-2">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                Elevate Your Everyday with <span className="text-luxury-gold">World-Class Amenities</span>
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Experience a lifestyle where every moment is crafted for comfort, leisure, and well-being. 
                Our thoughtfully designed amenities bring together the finest elements of modern living, 
                ensuring you and your family enjoy the best of everything, right at your doorstep.
              </p>
            </div>

            {/* Random Size Images Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
              <div className="col-span-2 row-span-2">
                <img 
                  src={interiorLuxury} 
                  alt="Amenity" 
                  className="w-full h-full min-h-[250px] sm:min-h-[300px] object-cover rounded-md"
                />
              </div>
              <div className="col-span-1">
                <img 
                  src={lobby} 
                  alt="Amenity" 
                  className="w-full h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px] object-cover rounded-md"
                />
              </div>
              <div className="col-span-1">
                <img 
                  src={hallway} 
                  alt="Amenity" 
                  className="w-full h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px] object-cover rounded-md"
                />
              </div>
              <div className="col-span-1">
                <img 
                  src={exterior} 
                  alt="Amenity" 
                  className="w-full h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px] object-cover rounded-md"
                />
              </div>
              <div className="col-span-1">
                <img 
                  src={buildingExterior} 
                  alt="Amenity" 
                  className="w-full h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px] object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Interior & Exterior Amenities - Cream BG */}
        <section 
          className="py-10 md:py-20 lg:py-24 overflow-hidden"
          style={{
            backgroundImage: `url(${creamBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
            {/* Toggle Buttons */}
            <div className="flex justify-center gap-3 md:gap-4 mb-8 md:mb-12 lg:mb-16 px-2">
              <Button
                onClick={() => setSelectedType("interior")}
                className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all ${
                  selectedType === "interior"
                    ? "bg-luxury-green text-white hover:bg-luxury-green/90"
                    : "bg-white text-luxury-green border-2 border-luxury-green hover:bg-luxury-green/10"
                }`}
              >
                Interior Amenities
              </Button>
              <Button
                onClick={() => setSelectedType("exterior")}
                className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all ${
                  selectedType === "exterior"
                    ? "bg-luxury-green text-white hover:bg-luxury-green/90"
                    : "bg-white text-luxury-green border-2 border-luxury-green hover:bg-luxury-green/10"
                }`}
              >
                Exterior Amenities
              </Button>
            </div>

            {/* Amenities Grid - 2 rows, 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {currentAmenities.map((amenity, index) => (
                <div 
                  key={index} 
                  className="relative group overflow-hidden rounded-md shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img 
                    src={amenity.image} 
                    alt={amenity.title} 
                    className="w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[350px] object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                    <p className="font-serif text-white text-base sm:text-lg md:text-xl p-3 md:p-4 lg:p-6">
                      {amenity.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Download Brochure - White BG */}
        <section 
          className="py-10 md:py-20 lg:py-24 overflow-hidden bg-white"
        >
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center px-2">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                <span className="text-luxury-green/90">Your Future, Unfolded:</span>{" "}
                <span className="text-luxury-gold">Download Our Brochure</span>
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-luxury-green/90 leading-relaxed mb-6 md:mb-8 lg:mb-10">
                Discover every detail of your dream home. Download our comprehensive brochure to explore 
                floor plans, amenities, location advantages, and everything that makes The Clan extraordinary.
              </p>
              <Button 
                size="lg"
                className="bg-luxury-green text-white hover:bg-luxury-green/90 font-semibold px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-full inline-flex items-center gap-2 md:gap-3"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                Download Brochure
              </Button>
            </div>
          </div>
        </section>

        {/* Section 5: Contact Us */}
        <Contact />
      </main>

      <FooterBar />
    </div>
  );
};

export default Amenities;

