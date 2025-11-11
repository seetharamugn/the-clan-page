import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "@/banners/Banner 1.png";
import banner2 from "@/banners/Banner 2.png";
import banner3 from "@/banners/Banner 3.png";
import banner4 from "@/banners/Banner 4.png";

const Hero = () => {
  const banners = [banner1, banner2, banner3, banner4];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(id);
  }, [banners.length]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <section className="relative w-full h-[calc(100vh-5rem)]">
  <div className="absolute inset-0">
    {banners.map((src, i) => (
     <img
     key={i}
     src={src}
     alt={`Banner ${i + 1}`}
     className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
       i === index ? "opacity-100" : "opacity-0"
     }`}
     draggable={false}
   />
    ))}
  </div>

      {/* Controls */}
      <button
        aria-label="Previous slide"
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-luxury-green/80 border border-luxury-gold/60 flex items-center justify-center hover:bg-luxury-green-dark/80 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-luxury-gold" />
      </button>

      <button
        aria-label="Next slide"
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-luxury-green/80 border border-luxury-gold/60 flex items-center justify-center hover:bg-luxury-green-dark/80 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-luxury-gold" />
      </button>
      
    
    </section>
  );
};

export default Hero;
