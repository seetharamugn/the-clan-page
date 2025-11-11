import interiorImage from "@/assets/Lifestyle.png";
import creamBg from "@/assets/Cream BG.png";

const LuxuryIntro = () => {
  return (
    <section
      className="py-16 px-4 md:px-6  lg:px-8"
      style={{
        backgroundImage: `url(${creamBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid gap-8 xl:gap-16 lg:grid-cols-2 items-center">
          {/* Image Panels on LEFT */}
          <div className="relative order-2 lg:order-1">
            <div className="flex gap-6 justify-start items-end">
              {/* Left Panel (left third of the single image) */}
              <div
                className="w-1/3 h-[400px] rounded-md shadow-[0_14px_28px_rgba(0,0,0,0.16),0_10px_10px_rgba(0,0,0,0.12)] overflow-hidden"
                style={{
                  backgroundImage: `url(${interiorImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '300% auto',
                  backgroundPosition: '0% 55%',
                }}
              />

              {/* Center Panel (center third of the single image) */}
              <div
                className="w-1/3 h-[420px] -translate-y-12 md:-translate-y-12 rounded-md shadow-[0_16px_30px_rgba(0,0,0,0.18),0_16px_16px_rgba(0,0,0,0.14)] overflow-hidden"
                style={{
                  backgroundImage: `url(${interiorImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '300% auto',
                  backgroundPosition: '50% 35%',
                }}
              />

              {/* Right Panel (right third of the single image) */}
              <div
                className="w-1/3 h-[400px] rounded-md shadow-[0_14px_28px_rgba(0,0,0,0.16),0_10px_10px_rgba(0,0,0,0.12)] overflow-hidden"
                style={{
                  backgroundImage: `url(${interiorImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '300% auto',
                  backgroundPosition: '100% 55%',
                }}
              />
            </div>
          </div>
          
          {/* Text on RIGHT */}
          <div className="space-y-5 animate-fade-in order-1 lg:order-2 lg:pl-0">
            <h2 className="font-serif text-4xl md:text-4xl lg:text-5xl font-normal text-luxury-green-dark leading-tight">
              ROOTED IN <span className="text-[#5a7c5e]">LUXURY</span>,
              BRANCHING INTO
              <span className="text-[#5a7c5e]">THE FUTURE</span>
            </h2>
            <div className="h-1 w-16 bg-luxury-gold" />
            <p className="font-sans text-base md:text-base text-luxury-green-dark leading-relaxed">
              At LivingTree, we're designing more than just living spaces we're crafting the canvas for your life's most cherished memories. Nestled within a lush, 25-acre community, our residential property in Bangalore combines the best of nature and luxury, just 15 minutes from Bangalore International Airport. With ten 24-floored towers and over 60 amenities specially curated for four generations, we create a home that is a reflection of your dreams a place where you can truly belong.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryIntro;
