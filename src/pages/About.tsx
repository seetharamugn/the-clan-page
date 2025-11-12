import Header from "@/components/Header";
import FooterBar from "@/components/sections/FooterBar";
import Contact from "@/components/sections/Contact";
import creamBg from "@/assets/Cream BG.png";
import greenBg from "@/assets/Green BG.jpg";
import interiorLuxury from "@/assets/interior-luxury.jpg";
import buildingExterior from "@/assets/building-exterior.jpg";
import aerialNight from "@/assets/Aerial_Night.jpeg";
import locationMap from "@/assets/Clan-Location Map png.png";

const About = () => {
  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Header />
      
      <main className="pt-20 overflow-x-hidden w-full">
        {/* Hero Section with Background Image */}
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
                ABOUT US
              </h1>
            </div>
          </div>
        </section>

        {/* Perfect Sanctuary Section */}
        <section 
          className="py-10 md:py-20 lg:py-24 overflow-hidden"
          style={{
            backgroundImage: `url(${creamBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
              {/* Left - Image */}
              <div className="relative">
                <img 
                  src={interiorLuxury} 
                  alt="Interior" 
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-md shadow-xl"
                />
              </div>

              {/* Right - Content */}
              <div className="space-y-4 md:space-y-6 text-center lg:text-left px-2 md:px-0">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  YOUR PERFECT <span className="text-luxury-gold">SANCTUARY</span>,{" "}
                  DESIGNED WITH OUR{" "}
                  <span className="text-luxury-green">EXPERTISE</span>.
                </h2>
                <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  At The Clan, we believe in creating spaces that resonate with your aspirations. 
                  Every detail is thoughtfully crafted to offer not just a home, but a lifestyle 
                  that reflects elegance, comfort, and belonging.
                </p>
                <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  With our expertise in architectural excellence and commitment to quality, we 
                  transform dreams into reality, one home at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Designed for Life Section */}
        <section 
          className="py-10 md:py-20 lg:py-24 text-primary-foreground overflow-hidden"
          style={{
            backgroundImage: `url(${greenBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
              {/* Left - Content */}
              <div className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1 px-2 md:px-0">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  DESIGNED FOR <span className="text-luxury-gold">LIFE</span>
                </h2>
                <div className="space-y-4">
                  <div className="bg-luxury-green-dark/30 backdrop-blur-sm p-4 md:p-6 rounded-md">
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-luxury-gold">
                      The Clan Advantages
                    </h3>
                    <ul className="space-y-1.5 md:space-y-2 font-sans text-xs sm:text-sm md:text-base text-left">
                      <li>• 15 Mins to International Airport</li>
                      <li>• Fully-gated Gn+1 Ecosystem</li>
                      <li>• Close to leading Software, Adtech, Amazon, Flipkart, SAP, EY, KPMG</li>
                      <li>• Premium Amenities</li>
                      <li>• Close to upcoming landmarks, such as the Aerospace Park, TCs, etc</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative order-1 lg:order-2">
                <img 
                  src={buildingExterior} 
                  alt="Building Exterior" 
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-md shadow-xl"
                />
              </div>
            </div>

            {/* Bottom Features */}
            <div className="mt-8 md:mt-12 lg:mt-20 grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {/* Lifestyle Amenities */}
              <div className="bg-luxury-green-dark/30 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-md">
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-luxury-gold text-center">
                  Lifestyle Amenities
                </h3>
                <ul className="space-y-1.5 md:space-y-2 font-sans text-xs sm:text-sm md:text-base">
                  <li>• Comprehensively 3bhk Balconies</li>
                  <li>• Extra-Large Bedroom Floor plans</li>
                  <li>• Massive Dual Balconies</li>
                  <li>• Water Compliant</li>
                </ul>
              </div>

              {/* Project Features */}
              <div className="bg-luxury-green-dark/30 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-md">
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-luxury-gold text-center">
                  Project Features
                </h3>
                <ul className="space-y-1.5 md:space-y-2 font-sans text-xs sm:text-sm md:text-base">
                  <li>• Inspired by thriving roots</li>
                  <li>• Encourages exploration, interaction</li>
                  <li>• A nature-forward approach</li>
                  <li>• Inclusive spaces for health and physical wellness</li>
                  <li>• Well-thought spirit of project</li>
                  <li>• Inclusive + availability</li>
                  <li>• Spaces for every lifestyle</li>
                  <li>• Aesthetic zones reflecting project spirit</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Master Plan Section */}
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
            <div className="text-center mb-6 md:mb-12 lg:mb-16">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6 px-2">
                MASTER <span className="text-luxury-gold">PLAN</span>
              </h2>
              <div className="h-0.5 md:h-1 w-20 md:w-28 bg-luxury-gold mx-auto mb-4 md:mb-8" />
              <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
                Meticulously planned to maximize open spaces, connectivity, and community living. 
                Every detail is crafted to create a harmonious living environment.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto px-2 md:px-0">
              <img 
                src={locationMap} 
                alt="Master Plan" 
                className="w-full h-auto object-contain rounded-md shadow-xl"
              />
            </div>

            {/* Master Plan Highlights */}
            <div className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-6 lg:gap-8 max-w-5xl mx-auto px-2 md:px-0">
              <div className="text-center space-y-2 md:space-y-3 p-3 md:p-6 bg-white/50 rounded-md">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-luxury-green">3.5</h3>
                <p className="font-sans text-xs sm:text-sm md:text-base text-muted-foreground">Acres of Land</p>
              </div>
              
              <div className="text-center space-y-2 md:space-y-3 p-3 md:p-6 bg-white/50 rounded-md">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-luxury-green">60%</h3>
                <p className="font-sans text-xs sm:text-sm md:text-base text-muted-foreground">Open Spaces</p>
              </div>
              
              <div className="text-center space-y-2 md:space-y-3 p-3 md:p-6 bg-white/50 rounded-md">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-luxury-green">30+</h3>
                <p className="font-sans text-xs sm:text-sm md:text-base text-muted-foreground">Curated Amenities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <Contact />
      </main>

      <FooterBar />
    </div>
  );
};

export default About;

