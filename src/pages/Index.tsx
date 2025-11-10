import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import LuxuryIntro from "@/components/sections/LuxuryIntro";
import Features from "@/components/sections/Features";
import FloorPlans from "@/components/sections/FloorPlans";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import FAQ from "@/components/sections/FAQ";
import VirtualTour from "@/components/sections/VirtualTour";
import Lifestyle from "@/components/sections/Lifestyle";
import Calculator from "@/components/sections/Calculator";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LuxuryIntro />
      <Features />
      <FloorPlans />
      <Gallery />
      <Location />
      <FAQ />
      <VirtualTour />
      <Lifestyle />
      <Calculator />
      <Contact />
      
      <footer className="bg-luxury-green-dark text-primary-foreground py-8 text-center">
        <p className="font-sans text-sm">
          © 2024 The Clan. All rights reserved. | A Legacy of Luxury Living
        </p>
      </footer>
    </div>
  );
};

export default Index;
