import {
  Waves,
  Dumbbell,
  Trophy,
  Armchair,
  PawPrint,
  Trees,
  PlaySquare,
  Bike
} from "lucide-react";
import greenBg from "@/assets/Green BG.jpg";

const features = [
  { icon: Waves, title: "Swim & Soak Arena" },
  { icon: Dumbbell, title: "Gymnasium" },
  { icon: Trophy, title: "Dribble Court" },
  { icon: Armchair, title: "Senior Seating Gazebo" },
  { icon: PawPrint, title: "Pets Park" },
  { icon: Trees, title: "Landscaped Gardens" },
  { icon: PlaySquare, title: "Children's Play Area" },
  { icon: Bike, title: "Jogging & Cycling Track" }
];

const Features = () => {
  return (
    <section
      className="py-20 text-primary-foreground overflow-hidden"
      style={{
        backgroundImage: `url(${greenBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-relaxed">
            AN ENCLAVE OF <span className="text-luxury-gold">EXQUISITE AMENITIES</span>, A SANCTUARY OF BELONGING.
          </h2>
          <div className="h-1 w-28 bg-luxury-gold mx-auto mt-6 mb-8" />
          <p className="font-sans text-base md:text-lg text-primary-foreground/90 max-w-5xl mx-auto">
          Thoughtfully curated and soulfully designed, every amenity at The Clan reflects a balance of
          leisure and life. From rejuvenating wellness corners to lively play zones and peaceful greens,
          each space invites you to unwind, connect, and belong.

          </p>
          
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-4 lg:gap-x-8 lg:gap-y-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-3 py-2 md:py-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full ring-2 ring-luxury-gold/90 bg-white/5">
                  <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-luxury-gold" />
                </div>
                <h3 className="font-serif text-sm md:text-lg lg:text-xl">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
