import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4 text-foreground md:text-5xl">
            YOUR QUESTIONS, <span className="text-luxury-gold">ELEGANTLY ANSWERED</span>
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border bg-card px-6 rounded-none"
            >
              <AccordionTrigger className="font-serif text-lg text-left hover:text-luxury-green">
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
