import { useState } from "react";
import Header from "@/components/Header";
import FooterBar from "@/components/sections/FooterBar";
import { Button } from "@/components/ui/button";
import interiorLuxury from "@/assets/interior-luxury.jpg";
import greenBg from "@/assets/Green BG.jpg";
import plan119 from "@/plans/119.png";
import plan205 from "@/plans/205.png";

type PlanType = "all" | "1bhk" | "2bhk" | "3bhk";

const UnitPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("all");

  const plans = [
    {
      id: "2bhk",
      type: "2 BHK",
      image: plan119,
      area: "1131 - 1451 sq.ft",
    },
    {
      id: "3bhk",
      type: "3 BHK",
      image: plan205,
      area: "1244 - 1826 sq.ft",
    },
  ];

  const filteredPlans = selectedPlan === "all" 
    ? plans 
    : plans.filter(plan => plan.id === selectedPlan);

  const specifications = [
    {
      title: "LOBBY",
      items: [
        "Ground floor - Flooring and dado upto 900mm with Polished Granite.",
        "Basement and all upper floors - Flooring in vitrified tiles, lift architrave with Polished Granite, walls with combination of texture & emulsion paint and ceiling with emulsion paint.test",
        "Service staircase and service lobby - Granite / Vitrified Tiles for floor, combination of texture and emulsion paint for walls and ceiling with emulsion paint.",
      ],
    },
    {
      title: "ELECTRICAL",
      items: [
        "All electrical wiring is concealed in PVC insulated copper wires with modular switches.",
        "Power outlets and light points provided in all rooms.",
        "3 KW power will be provided for 1 bed units.",
        "4 KW power will be provided for 2 and 2 bed with study units.",
        "6 KW power will be provided for 3 bed units.",
        "TV points provided in the living and bedrooms.",
        "Telephone points provided in living room only.",
        "Data points provided in living, study and bedrooms.",
        "Split AC provisions in living and all bed rooms.",
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Header />
      
      <main className="pt-20 overflow-x-hidden w-full">
        {/* Section 1: Hero - Unit Plans */}
        <section 
          className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-end overflow-hidden"
          style={{
            backgroundImage: `url(${interiorLuxury})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 pb-12 md:pb-16 lg:pb-20 px-4 md:px-8 w-full">
            <div className="mx-auto w-full max-w-[1600px]">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                UNIT PLANS
              </h1>
            </div>
          </div>
        </section>

        {/* Section 2: Thoughtfully Designed Homes - Green BG */}
        <section 
          className="py-10 md:py-20 lg:py-24 text-primary-foreground overflow-hidden"
          style={{
            backgroundImage: `url(${greenBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
              {/* Left - Image */}
              <div className="relative order-2 lg:order-1">
                <img 
                  src={interiorLuxury} 
                  alt="Interior" 
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-md shadow-xl"
                />
              </div>

              {/* Right - Content */}
              <div className="space-y-4 md:space-y-6 text-center lg:text-left order-1 lg:order-2 px-2 md:px-0">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  THOUGHTFULLY <span className="text-luxury-gold">DESIGNED HOMES</span>
                </h2>
                <p className="font-sans text-sm sm:text-base md:text-lg text-primary-foreground/90 leading-relaxed">
                  Uncover the canvas of your future home at LivingTree. Our floor plans are more than just layouts—they are the foundation of your aspirations. 
                  All our units, from cosy 1BHKs to expansive 3BHKs, seamlessly blend modern living and natural serenity. Featuring beautiful Juliet balconies, 
                  Vastu compliance and more, our spaces are designed to enhance convenience, functionality and comfort, ensuring a harmonious flow of 
                  positive energy at all times. Immerse yourself in our carefully crafted unit plans and prepare to watch your life's most precious moments unfold.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The Blueprint of Your Dreams - White BG */}
        <section className="py-10 md:py-20 lg:py-24 bg-white overflow-hidden">
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
            <div className="text-center mb-8 md:mb-12 lg:mb-16 px-2">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                THE BLUEPRINT OF <span className="text-luxury-green">YOUR DREAMS</span>
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Explore the details of LivingTree's expertly crafted unit plans, each layout thoughtfully designed to maximise space, light and comfort. 
                Discover a home that speaks to you and resonates with your unique lifestyle.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 lg:mb-16 px-2">
              <Button
                onClick={() => setSelectedPlan("all")}
                className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all ${
                  selectedPlan === "all"
                    ? "bg-luxury-green text-white hover:bg-luxury-green/90"
                    : "bg-white text-luxury-green border-2 border-luxury-green hover:bg-luxury-green/10"
                }`}
              >
                All
              </Button>
              <Button
                onClick={() => setSelectedPlan("1bhk")}
                className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all ${
                  selectedPlan === "1bhk"
                    ? "bg-luxury-green text-white hover:bg-luxury-green/90"
                    : "bg-white text-luxury-green border-2 border-luxury-green hover:bg-luxury-green/10"
                }`}
              >
                1 BHK
              </Button>
              <Button
                onClick={() => setSelectedPlan("2bhk")}
                className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all ${
                  selectedPlan === "2bhk"
                    ? "bg-luxury-green text-white hover:bg-luxury-green/90"
                    : "bg-white text-luxury-green border-2 border-luxury-green hover:bg-luxury-green/10"
                }`}
              >
                2 BHK
              </Button>
              <Button
                onClick={() => setSelectedPlan("3bhk")}
                className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all ${
                  selectedPlan === "3bhk"
                    ? "bg-luxury-green text-white hover:bg-luxury-green/90"
                    : "bg-white text-luxury-green border-2 border-luxury-green hover:bg-luxury-green/10"
                }`}
              >
                3 BHK
              </Button>
            </div>

            {/* Floor Plans Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
              {filteredPlans.map((plan) => (
                <div key={plan.id} className="space-y-3 md:space-y-4">
                  <div className="bg-gray-50 rounded-md overflow-hidden shadow-lg">
                    <img 
                      src={plan.image} 
                      alt={`${plan.type} Floor Plan`} 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-luxury-green mb-2">
                      {plan.type}
                    </h3>
                    <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground">
                      {plan.area}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredPlans.length === 0 && (
              <div className="text-center py-8 md:py-12">
                <p className="font-sans text-base md:text-lg text-muted-foreground">
                  No plans available for this configuration.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Specifications - Green BG */}
        <section 
          className="py-10 md:py-20 lg:py-24 text-primary-foreground overflow-hidden"
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
                SPECIFICATIONS
              </h2>
            </div>

            {/* Specifications Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
              {specifications.map((spec, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-md p-4 md:p-6 lg:p-8 space-y-3 md:space-y-4"
                >
                  <div className="flex items-center justify-center mb-4 md:mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-luxury-green flex items-center justify-center">
                      <span className="text-xl sm:text-2xl md:text-3xl">
                        {index === 0 ? "🏢" : "⚡"}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-luxury-gold text-center mb-4 md:mb-6">
                    {spec.title}
                  </h3>
                  <ul className="space-y-2 md:space-y-3 font-sans text-xs sm:text-sm md:text-base text-primary-foreground/90">
                    {spec.items.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Footer */}
      </main>

      <FooterBar />
    </div>
  );
};

export default UnitPlans;

