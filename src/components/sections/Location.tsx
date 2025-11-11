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
    <div className="border-b border-white/15 py-3">
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
      className="text-primary-foreground py-0"
      style={{
        backgroundImage: `url(${greenBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-none pl-4 pr-0 md:pl-8 md:pr-0">
        <div className="grid gap-10 lg:grid-cols-2 items-stretch min-h-[720px] md:min-h-[820px]">
          <div className="space-y-6 md:space-y-8 py-12 md:py-16 max-w-[820px] pl-4 md:pl-12 lg:pl-32">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-luxury-gold tracking-wide">
                LOCATION ADVANTAGES
              </h2>
              <p className="font-sans text-base md:text-lg text-primary-foreground/90 mt-4 max-w-2xl">
                Located in the thriving KIADB Aerospace Park, LivingTree offers the perfect blend of urban
                convenience and serene living with easy access to Bangalore's major tech hubs, educational
                institutions, healthcare facilities and more.
              </p>
            </div>
            <div className="mt-8 space-y-2">
              {categories.map((cat, i) => (
                <AccordionItem key={cat.title} title={cat.title} items={cat.items} defaultOpen={i === 0} />
              ))}
            </div>
          </div>

          <div className="w-full h-full -ml-4 md:-ml-8 lg:-ml-12">
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
