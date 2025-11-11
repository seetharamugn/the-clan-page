import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import creamBg from "@/assets/Cream BG.png";

const faqs = [
  {
    question: "What are the payment plans available?",
    answer: "We offer flexible payment plans with options for construction-linked payments, down payment schemes, and easy EMI options to suit your financial planning needs."
  },
  {
    question: "When is the possession date?",
    answer: "The project is scheduled for possession by Q4 2025, subject to all necessary approvals and clearances."
  },
  {
    question: "What amenities are included?",
    answer: "The project features a clubhouse, swimming pool, gymnasium, children's play area, landscaped gardens, indoor games room, and 24/7 security with CCTV surveillance."
  },
  {
    question: "Are there any customization options available?",
    answer: "Yes, we offer customization options for flooring, paint colors, and fixtures during the pre-construction phase, subject to terms and conditions."
  }
];

const FAQ = () => {
  return (
    <section
      className="py-24 px-4 md:px-8"
      style={{
        backgroundImage: `url(${creamBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-luxury-green text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap">
            YOUR QUESTIONS, <span className="text-luxury-gold">ELEGANTLY ANSWERED</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/40 bg-transparent px-4 md:px-6 rounded-none"
            >
              <AccordionTrigger className="font-serif text-base md:text-lg text-left hover:text-luxury-green">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
