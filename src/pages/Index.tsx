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
import EnquireNow from "@/components/EnquireNow";
import Segments from "@/components/sections/Segments";
import FooterBar from "@/components/sections/FooterBar";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <EnquireNow />
      <main className="pt-20">
        <Hero />
      <LuxuryIntro />
      <Features />
      <FloorPlans />
      <Gallery />
      <Location />
      <FAQ />
      <VirtualTour />
      <Lifestyle />
      <Segments />
      <Calculator />
      <Contact />
      </main>
      
      <FooterBar />
    </div>
  );
};

export default Index;
