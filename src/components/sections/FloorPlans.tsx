import { Button } from "@/components/ui/button";
import creamBg from "@/assets/Cream BG.png";
import clanLogo from "@/assets/Clan-Logo-Green.png";

type Plan = {
  name: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  image: string;
  imageLeft?: boolean;
};

const floorPlans: Plan[] = [
  {
    name: "3 BHK Luxury",
    area: "1,850 sq.ft",
    bedrooms: 3,
    bathrooms: 3,
    description:
      "Expansive spaces with Juliet balconies in most units promising functionality, luxury and unmatched comfort to larger families with stunning views and our signature amenities.",
    image: "/placeholder.svg",
    imageLeft: true,
  },
  {
    name: "2 BHK Premium",
    area: "1,250 sq.ft",
    bedrooms: 2,
    bathrooms: 2,
    description:
      "Elegant spaces with Juliet balconies in most units offering compact luxury perfect for young professionals or couples seeking comfort and convenience.",
    image: "/placeholder.svg",
    imageLeft: false,
  },
];

const FloorPlans = () => {
  return (
    <section
      className="py-20 px-4 md:px-8"
      style={{
        backgroundImage: `url(${creamBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            SPACES DESIGNED FOR YOUR <span className="text-luxury-gold">UNIQUE LIFESTYLE</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
            Thoughtfully planned layouts that maximize space, light, and functionality
          </p>
        </div>

        <div className="space-y-20">
          {floorPlans.map((plan, index) => (
            <div key={index} className="relative grid items-center gap-10 lg:grid-cols-2">
              {/* vertical divider */}
              <div className="hidden lg:block absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-luxury-gold/40" />

              {/* Image */}
              <div className={`${plan.imageLeft ? "order-1" : "order-2"}`}>
                <div className="mx-auto max-w-[720px] rounded-md shadow-[0_18px_30px_rgba(0,0,0,0.18),0_12px_12px_rgba(0,0,0,0.14)] overflow-hidden">
                  <img src={plan.image} alt={plan.name} className="w-full h-auto object-contain" />
                </div>
              </div>

              {/* Content */}
              <div className={`text-center ${plan.imageLeft ? "order-2" : "order-1"}`}>
                <div className="mx-auto max-w-xl">
                  <img src={clanLogo} alt="The Clan" className="h-12 md:h-14 mx-auto mb-4" />
                  
                  <p className="font-sans text-sm md:text-base text-muted-foreground mt-1">
                    {plan.bedrooms} BHK, {plan.area}
                  </p>
                  <p className="font-sans text-base md:text-lg text-muted-foreground mt-6">{plan.description}</p>
                  <Button className="mt-6 bg-green-700 hover:bg-luxury-green/50 text-luxury-green-dark rounded">
                   <p className="font-semibold text-white">Check Prices</p>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
