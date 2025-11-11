import {
  Trees,
  BusFront,
  PawPrint,
  Bike,
  Waves,
  Mic2,
  Dumbbell,
  LayoutGrid
} from "lucide-react";
import greenBg from "@/assets/Green BG.jpg";

const features = [
  { icon: Trees, title: "Lawns & Gardens" },
  { icon: BusFront, title: "Bus Bay" },
  { icon: PawPrint, title: "Pet Park" },
  { icon: Bike, title: "Bicycle Lane & Jogging Track" },
  { icon: LayoutGrid, title: "Plazas & Community Spaces" },
  { icon: Waves, title: "Swimming Pools & Jacuzzi" },
  { icon: Mic2, title: "Event Areas & Amphitheatre" },
  { icon: Dumbbell, title: "Multiple Courts" }
];

const Features = () => {
  return (
    <section
      className="py-20 text-primary-foreground"
      style={{
        backgroundImage: `url(${greenBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal">
            DESIGNED FOR <span className="text-luxury-gold">FOUR GENERATIONS</span>
          </h2>
          <div className="h-1 w-28 bg-luxury-gold mx-auto mt-6 mb-8" />
          <p className="font-sans text-base md:text-lg text-primary-foreground/90 max-w-5xl mx-auto">
            At LivingTree, we believe in nurturing a holistic lifestyle. Our thoughtfully crafted amenities
            cater to all ages, fostering a vibrant and fulfilling community. From serene gardens and pet park
            to swimming pools, jogging tracks and play areas, there's something for everyone. We offer quiet
            retreats like yoga zones and reading nooks, along with active spaces for sports and events.
          </p>
          <p className="font-sans text-sm md:text-base text-primary-foreground/80 max-w-5xl mx-auto mt-4">
            Sustainability is at our core, with pollution filtration, renewable energy and EV charging stations.
            LivingTree ensures a balanced lifestyle for every generation, whether for work, play or relaxation.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3 py-6"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full ring-2 ring-luxury-gold/60 bg-white/5">
                <feature.icon className="w-10 h-10 text-luxury-gold" />
              </div>
              <h3 className="font-serif text-lg md:text-xl">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
