import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState("5000000");
  const [interestRate, setInterestRate] = useState("8.5");
  const [tenure, setTenure] = useState("20");
  
  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100;
    const time = parseFloat(tenure) * 12;
    
    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    return emi.toFixed(0);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-luxury-gold to-accent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-4 text-luxury-green-dark md:text-5xl">
              CALCULATE YOUR <span className="text-luxury-green">EMI</span>
            </h2>
            <p className="font-sans text-lg text-luxury-green-dark/80">
              Plan your investment with our easy-to-use EMI calculator
            </p>
          </div>
          
          <div className="bg-card p-8 shadow-xl">
            <div className="space-y-6">
              <div>
                <Label htmlFor="loan-amount" className="font-sans text-sm mb-2 block">
                  Loan Amount (₹)
                </Label>
                <Input
                  id="loan-amount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="border-luxury-green/30 focus:border-luxury-green"
                />
              </div>
              
              <div>
                <Label htmlFor="interest-rate" className="font-sans text-sm mb-2 block">
                  Interest Rate (% per annum)
                </Label>
                <Input
                  id="interest-rate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="border-luxury-green/30 focus:border-luxury-green"
                />
              </div>
              
              <div>
                <Label htmlFor="tenure" className="font-sans text-sm mb-2 block">
                  Tenure (Years)
                </Label>
                <Input
                  id="tenure"
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                  className="border-luxury-green/30 focus:border-luxury-green"
                />
              </div>
              
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-sans text-sm text-muted-foreground">Monthly EMI</span>
                  <span className="font-serif text-3xl font-bold text-luxury-green">
                    ₹{calculateEMI()}
                  </span>
                </div>
                <Button className="w-full bg-luxury-green hover:bg-luxury-green-dark text-primary-foreground">
                  Get Payment Schedule
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
