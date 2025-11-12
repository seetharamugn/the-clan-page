import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import clanLogo from "@/assets/Clan.png";
import greenBg from "@/assets/Green BG.jpg";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      {/* Contact section with green background and centered branding */}
      <section
        className="py-12 md:py-20 text-primary-foreground overflow-hidden"
        style={{
          backgroundImage: `url(${greenBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
          <div className="text-center mb-8 md:mb-10">
            <img src={clanLogo} alt="The Clan" className="h-10 sm:h-12 md:h-16 mx-auto mb-4 md:mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 px-2">
              <span className="text-luxury-gold">CONTACT</span> US
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-primary-foreground/90 max-w-3xl mx-auto px-4 leading-relaxed">
            Tell us a little about yourself to receive personalized details, brochures
            and exclusive offers for a seamless home-buying experience with us.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            {/* Full name - full width like reference */}
            <div>
              <Label htmlFor="name" className="text-primary-foreground text-sm md:text-base mb-2 block">
                Full Name *
              </Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-full bg-white/10 border-white/30 text-primary-foreground placeholder:text-primary-foreground/70 pl-3 py-2 md:py-3 text-sm md:text-base"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email and Phone row */}
            <div className="grid gap-4 md:gap-6 md:grid-cols-[1fr_minmax(240px,0.6fr)]">
              <div>
                <Label htmlFor="email" className="text-primary-foreground text-sm md:text-base mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-full bg-white/10 border-white/30 text-primary-foreground placeholder:text-primary-foreground/70 pl-3 py-2 md:py-3 text-sm md:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-primary-foreground text-sm md:text-base mb-2 block">
                  Phone *
                </Label>
                <div className="flex gap-2">
                  <select
                    aria-label="Country code"
                    className="rounded-full text-luxury-green-dark font-semibold px-2 text-sm md:text-base"
                    defaultValue="+91"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+65">🇸🇬 +65</option>
                  </select>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="rounded-full bg-white/10 border-white/30 text-primary-foreground placeholder:text-primary-foreground/70 w-full py-2 md:py-3 text-sm md:text-base"
                    placeholder="Phone number"
                  />
                </div>
              </div>
            </div>

            <div className="text-center pt-2 md:pt-4">
              <Button
                type="submit"
                size="lg"
                className="rounded-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-green-dark font-semibold px-8 md:px-10 py-2 md:py-3 text-sm md:text-base"
              >
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
      </section>

      
    </>
  );
};

export default Contact;
