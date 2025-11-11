import { useState } from "react";

const formatINR = (value: number, fraction = 2) =>
  value.toLocaleString("en-IN", {
    minimumFractionDigits: fraction,
    maximumFractionDigits: fraction,
  });

const Calculator = () => {
  // Defaults mimicking the reference design
  const [loanAmount, setLoanAmount] = useState<number>(2000000); // 20L to 1.8Cr scale
  const [interestRate, setInterestRate] = useState<number>(2); // 2% to 20%
  const [tenure, setTenure] = useState<number>(2); // years 0-20

  const monthlyRate = interestRate / 12 / 100;
  const months = tenure * 12;
  const emi =
    months > 0 && monthlyRate > 0
      ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1)
      : months > 0
      ? loanAmount / months
      : 0;
  const totalPayable = emi * months;

  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="mx-auto w-full max-w-[1600px]">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 text-luxury-green-dark">
          CALCULATE <span className="text-luxury-green">YOUR EMI</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT - sliders */}
          <div className="space-y-10">
            {/* Loan Amount */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="font-sans text-sm text-muted-foreground">Loan Amount :</p>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={formatINR(loanAmount, 0)}
                    readOnly
                    className="w-40 text-right font-serif text-lg bg-white border border-border px-3 py-1"
                  />
                  <span className="inline-flex items-center justify-center bg-luxury-green text-white px-3 py-1">
                    ₹
                  </span>
                </div>
              </div>
              <input
                type="range"
                className="w-full accent-luxury-green"
                min={2000000}
                max={18000000}
                step={100000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
              />
            </div>

            {/* Interest */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="font-sans text-sm text-muted-foreground">Rate Of Interest :</p>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(parseFloat(e.target.value || "0"))}
                    className="w-24 text-right font-serif text-lg bg-white border border-border px-3 py-1"
                  />
                  <span className="inline-flex items-center justify-center bg-luxury-green text-white px-3 py-1">
                    %
                  </span>
                </div>
              </div>
              <input
                type="range"
                className="w-full accent-luxury-green"
                min={2}
                max={20}
                step={0.5}
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              />
            </div>

            {/* Tenure */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="font-sans text-sm text-muted-foreground">Tenure :</p>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(parseFloat(e.target.value || "0"))}
                    className="w-24 text-right font-serif text-lg bg-white border border-border px-3 py-1"
                  />
                  <span className="inline-flex items-center justify-center bg-luxury-green text-white px-3 py-1">
                    Y
                  </span>
                </div>
              </div>
              <input
                type="range"
                className="w-full accent-luxury-green"
                min={0}
                max={20}
                step={1}
                value={tenure}
                onChange={(e) => setTenure(parseInt(e.target.value))}
              />
            </div>
          </div>

          {/* RIGHT - result card (gold, aligned similar to reference) */}
          <div className="w-full justify-self-end overflow-hidden shadow bg-[#d6b35d] text-white p-8 md:p-10 rounded-md">
            <div className="grid sm:grid-cols-1 gap-8 items-center justify-center">
              <div>
                <p className="font-sans text-sm md:text-base">Total amount</p>
                <p className="font-serif text-3xl md:text-4xl mt-1">
                  ₹{formatINR(totalPayable)}
                </p>
              </div>
              </div>  
              <div className="grid sm:grid-cols-2 gap-8 item-start">
              <div>
                <p className="font-sans text-sm md:text-base">Term:</p>
                <p className="font-serif text-lg md:text-xl mt-1">{tenure} years</p>
              </div>
              <div className="sm:text-right md:text-center">
                <p className="font-sans text-sm md:text-base">Your EMI:</p>
                <p className="font-serif text-lg md:text-xl mt-1">₹{formatINR(emi)} per month</p>
              </div>
              <div>
                <p className="font-sans text-sm md:text-base">At Interest Rate of:</p>
                <p className="font-serif text-lg md:text-xl mt-1">{interestRate}%</p>
              </div>
              <div className="sm:text-right md:text-center">
                <p className="font-sans text-sm md:text-base">Loan Amount:</p>
                <p className="font-serif text-lg md:text-xl mt-1">₹{formatINR(loanAmount, 0)}</p>
              </div>
              </div>
              </div>
            </div>
            </div>
    
    </section>
  );
};

export default Calculator;
