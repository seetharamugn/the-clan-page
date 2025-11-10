import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

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
    <section className="py-20 bg-luxury-green-dark text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-4 md:text-5xl">
            <span className="text-luxury-gold">CONTACT</span> US
          </h2>
          <p className="font-sans text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Take the first step towards your dream home. Our team is here to assist you.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <Label htmlFor="name" className="text-primary-foreground mb-2 block">
                Name *
              </Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-primary-foreground mb-2 block">
                Phone *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                placeholder="Your phone number"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email" className="text-primary-foreground mb-2 block">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <Label htmlFor="message" className="text-primary-foreground mb-2 block">
              Message
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 min-h-32"
              placeholder="Tell us about your requirements..."
            />
          </div>
          
          <Button 
            type="submit"
            size="lg"
            className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-green-dark font-semibold"
          >
            Submit Inquiry
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
