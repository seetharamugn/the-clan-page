import { useState } from "react";
import Header from "@/components/Header";
import FooterBar from "@/components/sections/FooterBar";
import Contact from "@/components/sections/Contact";
import aerialNight from "@/assets/Aerial_Night.jpeg";
import interiorLuxury from "@/assets/interior-luxury.jpg";
import buildingExterior from "@/assets/building-exterior.jpg";
import lobby from "@/assets/lobby.jpg";
import hallway from "@/assets/interior-hallway.jpg";
import amenities from "@/assets/amenities.jpeg";
import exterior from "@/assets/exterior.jpeg";
import interior from "@/assets/interior.jpeg";
import greenBg from "@/assets/Green BG.jpg";

const GalleryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: buildingExterior, title: "Building Exterior" },
    { image: exterior, title: "Landscape Design" },
    { image: aerialNight, title: "Aerial View" },
    { image: lobby, title: "Grand Lobby" },
    { image: hallway, title: "Interior Hallway" },
    { image: amenities, title: "Amenity Centers" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Header />
      
      <main className="pt-20 overflow-x-hidden w-full">
        {/* Section 1: Hero - Gallery */}
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
                GALLERY
              </h1>
            </div>
          </div>
        </section>

        {/* Section 2: A Journey Through Your Future Home - White BG */}
        <section className="py-10 md:py-20 lg:py-24 bg-white overflow-hidden">
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
              {/* Left - Image */}
              <div className="relative">
                <img 
                  src={interiorLuxury} 
                  alt="Master Bedroom" 
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-md shadow-xl"
                />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-black/50 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded">
                  <p className="font-serif text-white text-sm sm:text-base md:text-lg lg:text-xl">Master Bedroom</p>
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-4 md:space-y-6 text-center lg:text-left px-2 md:px-0">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  A JOURNEY THROUGH YOUR <span className="text-luxury-green">FUTURE HOME</span>
                </h2>
                <div className="space-y-3 md:space-y-4">
                  <div className="border-l-4 border-luxury-gold pl-3 md:pl-4">
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-luxury-green mb-2">
                      Experience LivingTree: A Virtual Tour
                    </h3>
                    <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                      Step into the thoughtfully designed world of LivingTree through our immersive video walkthrough. 
                      Our master layout seamlessly integrates all ten towers with our world-class amenities, ensuring easy access 
                      and a harmonious living environment. Discover how we have blurred the lines between indoors and outdoors, 
                      creating a Vastu-compliant haven where nature and modern living coexist in perfect balance.
                    </p>
                  </div>
                  <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    Catch a glimpse of a world where luxury meets convenience, and every day feels like a retreat. 
                    Explore the future of residential living and see how LivingTree sets new standards in modern, nature-inspired urban living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The Essence of LivingTree - Green BG Slider */}
        <section 
          className="py-10 md:py-20 lg:py-24 overflow-hidden"
          style={{
            backgroundImage: `url(${greenBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
            <div className="text-center mb-8 md:mb-12 lg:mb-16 px-2">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-luxury-gold">
                THE ESSENCE OF LIVINGTREE
              </h2>
            </div>

            {/* Image Slider */}
            <div className="relative max-w-6xl mx-auto">
              {/* Main Image */}
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-md shadow-2xl">
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title} 
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <p className="font-serif text-white text-lg sm:text-xl md:text-2xl lg:text-3xl drop-shadow-lg">
                    {slides[currentSlide].title}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl z-10"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl z-10"
                aria-label="Next slide"
              >
                →
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4 md:mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
                      currentSlide === index 
                        ? "bg-luxury-gold w-6 md:w-8" 
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Thumbnail Preview */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 md:gap-4 mt-6 md:mt-8">
                {slides.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative overflow-hidden rounded-md transition-all ${
                      currentSlide === index 
                        ? "ring-2 md:ring-4 ring-luxury-gold" 
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-16 sm:h-20 md:h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Contact Us */}
        <Contact />
      </main>

      {/* Section 5: Footer */}
      <FooterBar />
    </div>
  );
};

export default GalleryPage;

