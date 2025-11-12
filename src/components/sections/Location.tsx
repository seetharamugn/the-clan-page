import { useState } from "react";
import greenBg from "@/assets/Green BG.jpg";
import locationMap from "@/assets/Clan-Location Map png.png";

type Category = { title: string; items: string[] };
const categories: Category[] = [
  {
    title: "Tech Parks/ Work Spaces",
    items: ["Wipro Aerospace", "Manyata Tech Park", "L&T Tech Park", "Boeing", "Brigade Magnum"],
  },
  {
    title: "Schools And Colleges",
    items: ["Sample school 1", "Sample college 2", "Sample institute 3"],
  },
  {
    title: "Hospitals",
    items: ["Sample hospital 1", "Sample hospital 2"],
  },
  {
    title: "Shopping Malls",
    items: ["Sample mall 1", "Sample mall 2"],
  },
  {
    title: "Others",
    items: ["Sample point 1", "Sample point 2"],
  },
];

const AccordionItem = ({
  title,
  items,
  defaultOpen = false,
}: {
  title: string;
  items: string[];
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-white/15 py-4 md:py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-sans text-lg md:text-xl">{title}</span>
        <span className="text-2xl leading-none select-none">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <ul className="mt-4 ml-2 list-disc list-inside space-y-2 text-primary-foreground/90">
          {items.map((it, idx) => (
            <li key={idx} className="font-sans">
              {it}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Location = () => {
  return (
    <section
      className="text-primary-foreground py-0 overflow-hidden"
      style={{
        backgroundImage: `url(${greenBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-none pl-4 pr-4 md:pl-8 md:pr-0 overflow-hidden">
        <div className="grid gap-10 lg:grid-cols-2 items-stretch min-h-[720px] md:min-h-[820px]">
          <div className="space-y-4 md:space-y-6 py-6 md:py-16 w-full max-w-full md:max-w-[720px] px-2 md:pl-12 lg:pl-20 md:pr-8">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-gold tracking-wide md:whitespace-nowrap">
                LOCATION <span className="text-luxury-gold">PREVILEGE</span>
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-primary-foreground/90 mt-4 leading-relaxed">
              Perfectly positioned at Sarjapur, The Clan stands at the heart of Bengaluru’s next big growth
zone. With landmark projects like STRR, PRR, SWIFT City, and Metro Phase 3A, the
neighbourhood promises seamless connectivity and strong future value.

              </p>
            </div>
            <div className="mt-8 space-y-0">
              {categories.map((cat, i) => (
                <AccordionItem key={cat.title} title={cat.title} items={cat.items} defaultOpen={i === 0} />
              ))}
            </div>
          </div>

          <div className="w-full h-[300px] md:h-full  md:-ml-8 lg:-ml-12 order-1 lg:order-2 -mt-8 md:mt-0">
            <img
              src={locationMap}
              alt="The Clan Location Map"
              className="w-full h-full object-cover object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
