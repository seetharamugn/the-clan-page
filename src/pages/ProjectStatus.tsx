import { useState } from "react";
import Header from "@/components/Header";
import FooterBar from "@/components/sections/FooterBar";
import Contact from "@/components/sections/Contact";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import greenBg from "@/assets/Green BG.jpg";
import creamBg from "@/assets/Cream BG.png";
import aerialNight from "@/assets/Aerial_Night.jpeg";
import buildingExterior from "@/assets/building-exterior.jpg";
import exterior from "@/assets/exterior.jpeg";
import amenities from "@/assets/amenities.jpeg";

const ProjectStatus = () => {
  const [selectedTower, setSelectedTower] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const towers = ["Tower A", "Tower B", "Tower C", "Tower D", "Tower E"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const years = ["2024", "2025", "2026"];

  const projectImages = [
    {
      image: buildingExterior,
      date: "June 2025",
      title: "B6 - POUR-02 BASEMENT 1 SLAB REINFORCEMENT",
    },
    {
      image: exterior,
      date: "June 2025",
      title: "B6 - POUR-01 GF SLAB SHUTTERING WORK",
    },
    {
      image: aerialNight,
      date: "May 2025",
      title: "Construction Progress - Aerial View",
    },
    {
      image: amenities,
      date: "May 2025",
      title: "Foundation Work in Progress",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Header />
      
      <main className="pt-20 overflow-x-hidden w-full">
        {/* Section 1: Hero - Project Status */}
        <section 
          className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-end overflow-hidden"
          style={{
            backgroundImage: `url(${aerialNight})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 pb-12 md:pb-16 lg:pb-20 px-4 md:px-8 w-full">
            <div className="mx-auto w-full max-w-[1600px]">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                PROJECT STATUS
              </h1>
            </div>
          </div>
        </section>

        {/* Section 2: Dropdowns and Images - Green BG */}
        <section 
          className="py-10 md:py-20 lg:py-24 overflow-hidden"
          style={{
            backgroundImage: `url(${greenBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
            {/* Title and Description */}
            <div className="text-center mb-8 md:mb-12 lg:mb-16 px-2">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-luxury-gold mb-4 md:mb-6">
                Project Status
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
                The project radiates an exceptional sense of completeness.
              </p>
            </div>

            {/* Dropdown Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-6 max-w-5xl mx-auto mb-8 md:mb-12 lg:mb-16">
              <Select value={selectedTower} onValueChange={setSelectedTower}>
                <SelectTrigger className="bg-white text-foreground h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg rounded-md">
                  <SelectValue placeholder="Select tower" />
                </SelectTrigger>
                <SelectContent>
                  {towers.map((tower) => (
                    <SelectItem key={tower} value={tower}>
                      {tower}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="bg-white text-foreground h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg rounded-md">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="bg-white text-foreground h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg rounded-md">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* 2x2 Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {projectImages.map((item, index) => (
                <div 
                  key={index} 
                  className="relative group overflow-hidden rounded-md shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-8 text-white">
                    <p className="font-serif text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2">
                      {item.date}
                    </p>
                    <p className="font-sans text-xs sm:text-sm md:text-base text-white/90">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2.5: Cream Background Buffer */}
        <section 
          className="py-10 md:py-20 overflow-hidden"
          style={{
            backgroundImage: `url(${creamBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
            <div className="text-center px-2">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-green mb-4 md:mb-6">
                Witness The <span className="text-luxury-gold">Progress</span>
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Stay updated with the latest developments at The Clan. Our commitment to transparency ensures you're 
                always informed about the progress of your future home. Every milestone brings us closer to delivering 
                the lifestyle you deserve.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Contact Us */}
        <Contact />
      </main>

      {/* Section 4: Footer */}
      <FooterBar />
    </div>
  );
};

export default ProjectStatus;

