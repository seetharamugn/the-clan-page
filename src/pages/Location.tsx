import Header from "@/components/Header";
import FooterBar from "@/components/sections/FooterBar";
import Contact from "@/components/sections/Contact";
import aerialNight from "@/assets/Aerial_Night.jpeg";
import locationMap from "@/assets/Clan-Location Map png.png";
import creamBg from "@/assets/Cream BG.png";

const LocationPage = () => {
  const locationCategories = [
    {
      title: "Tech Parks/ Work Spaces",
      items: [
        "KIADB Aerospace Park - 5 mins",
        "Wipro - 10 mins",
        "Infosys - 12 mins",
        "Tech Mahindra - 15 mins",
        "Amazon Development Center - 18 mins",
      ],
    },
    {
      title: "Schools And Colleges",
      items: [
        "Inventure Academy - 8 mins",
        "Delhi Public School - 10 mins",
        "Greenwood High - 12 mins",
        "CHRIST University - 15 mins",
        "NPS International School - 18 mins",
      ],
    },
    {
      title: "Hospitals",
      items: [
        "Columbia Asia Hospital - 10 mins",
        "Manipal Hospital - 12 mins",
        "Apollo Clinic - 8 mins",
        "Fortis Hospital - 20 mins",
        "Aster RV Hospital - 15 mins",
      ],
    },
    {
      title: "Shopping Malls",
      items: [
        "Forum Mall - 15 mins",
        "Phoenix Marketcity - 18 mins",
        "Central Mall - 12 mins",
        "Gopalan Mall - 10 mins",
        "Total Mall - 8 mins",
      ],
    },
    {
      title: "Others",
      items: [
        "Kempegowda International Airport - 15 mins",
        "Sarjapur Main Road - 5 mins",
        "Outer Ring Road - 10 mins",
        "Electronic City - 20 mins",
        "Whitefield - 25 mins",
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Header />
      
      <main className="pt-20 overflow-x-hidden w-full">
        {/* Section 1: Hero - Location */}
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
                LOCATION
              </h1>
            </div>
          </div>
        </section>

        {/* Section 2: Know Your Neighbourhood - Cream BG */}
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
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-start">
              {/* Left - Map */}
              <div className="relative order-2 lg:order-1">
                <div className="lg:sticky lg:top-24">
                  <img 
                    src={locationMap} 
                    alt="Location Map" 
                    className="w-full h-auto object-contain rounded-md shadow-xl"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-4 md:space-y-6 order-1 lg:order-2 px-2 md:px-0">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-green leading-tight text-center lg:text-left">
                  KNOW YOUR <span className="text-luxury-gold">NEIGHBOURHOOD</span>
                </h2>
                <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
                  Nestled in the thriving KIADB Aerospace Park, LivingTree offers unparalleled access to prominent tech parks, 
                  educational institutions, entertainment hubs and more. Experience the perfect blend of convenience and serenity 
                  just 15 minutes from the Bangalore International Airport at your dreamiest home.
                </p>

                {/* Accordion-style Categories */}
                <div className="space-y-3 md:space-y-4 mt-6 md:mt-8">
                  {locationCategories.map((category, index) => (
                    <details 
                      key={index} 
                      className="group border-b border-border/40 pb-3 md:pb-4"
                    >
                      <summary className="flex justify-between items-center cursor-pointer font-serif text-base sm:text-lg md:text-xl font-bold text-luxury-green hover:text-luxury-gold transition-colors py-3 md:py-4">
                        <span>{category.title}</span>
                        <span className="text-xl md:text-2xl group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <ul className="mt-3 md:mt-4 space-y-1.5 md:space-y-2 font-sans text-xs sm:text-sm md:text-base text-muted-foreground pl-3 md:pl-4">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Contact Us */}
        <Contact />
      </main>

      {/* Section 4: Footer */}
      <FooterBar />
    </div>
  );
};

export default LocationPage;

