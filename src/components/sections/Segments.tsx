import { useRef } from "react";
import lobby from "@/assets/lobby.jpg";
import hallway from "@/assets/interior-hallway.jpg";
import building from "@/assets/building-exterior.jpg";
import interior from "@/assets/interior.jpg";
import exterior from "@/assets/exterior.jpeg";
import amenities from "@/assets/amenities.jpg";

type SegmentItem = {
  title: string;
  image: string;
};

const items: SegmentItem[] = [
  { title: "MANAGED SPACES", image: lobby },
  { title: "FACILITY MANAGEMENT", image: hallway },
  { title: "RESIDENTIAL", image: exterior },
  { title: "COMMERCIAL", image: building },
  { title: "HOSPITALITY", image: amenities },
];

const Segments = () => {
  const scroller = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: "left" | "right") => {
    const node = scroller.current;
    if (!node) return;
    const step = node.clientWidth * 0.8;
    node.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="mx-auto w-full max-w-[1600px] relative">
        {/* Arrows */}
        <button
          aria-label="Previous"
          onClick={() => scrollBy("left")}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full border border-white/70 bg-white/10 text-white hover:bg-white/20 transition"
        >
          <span className="text-2xl">‹</span>
        </button>
        <button
          aria-label="Next"
          onClick={() => scrollBy("right")}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full border border-white/70 bg-white/10 text-white hover:bg-white/20 transition"
        >
          <span className="text-2xl">›</span>
        </button>

        <style>{`
          /* Hide horizontal scrollbar for the segments scroller */
          .segments-scroller {
            scrollbar-width: none; /* Firefox */
          }
          .segments-scroller::-webkit-scrollbar {
            display: none; /* Chrome, Safari */
          }
        `}</style>
        <div
          ref={scroller}
          className="segments-scroller flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
        >
          {items.map((it, i) => (
            <div
              key={i}
              className="relative min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%] xl:min-w-[24%] snap-start"
            >
              <img
                src={it.image}
                alt={it.title}
                className="w-full h-[420px] object-cover rounded-md"
              />
              <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <p className="font-serif text-white text-xl md:text-2xl drop-shadow">
                  {it.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;


