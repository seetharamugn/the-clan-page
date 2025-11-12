import fbIcon from "@/icons/facebook-gold.png";
import igIcon from "@/icons/instagram-Gold.png";
import ytIcon from "@/icons/youtube-gold.png";
import liIcon from "@/icons/linkedin-gold.png";

const FooterBar = () => {
  return (
    <footer className="bg-black text-luxury-gold overflow-hidden">
      <div className="mx-auto w-full max-w-[1000px] px-4 md:px-8 py-4 md:py-8">
        <p className="text-center text-[10px] sm:text-xs md:text-sm leading-relaxed">
          The Clan by Global Edifice: - VQ5W+3VM, Bagalur - Sarjapur, Bengaluru, Karnataka 562125.<br />
          PRM/KA/1251/308/PR/091025/008153<br />
          Available at RERA Website:{" "}
          <a
            href="https://rera.karnataka.gov.in"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            https://rera.karnataka.gov.in
          </a>
        </p>

        <div className="mt-3 md:mt-4 flex items-center justify-center gap-2 md:gap-3">
          {[fbIcon, igIcon, ytIcon, liIcon].map((src, i) => (
            <span
              key={i}
              className="inline-flex w-8 h-8 md:w-9 md:h-9 items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="social" className="w-8 h-8 md:w-10 md:h-10" />
            </span>
          ))}
        </div>
      </div>
        {/* separator line */}
        <div className="h-[1px] md:h-[2px] w-full bg-luxury-green/40 flex items-center justify-center" />

        {/* bottom row with copyright and links */}
        <div className="mt-2 md:mt-3 pb-2 md:pb-0 flex flex-col md:flex-row items-center justify-center md:justify-between text-[9px] sm:text-[10px] md:text-[11px] opacity-90 px-4 md:px-16 gap-2 md:gap-0">
          <p className="text-center">Copyright © 2025 LivingTree 198901086104. All Rights Reserved.</p>
          <div className="flex items-center space-x-2 md:space-x-3">
            <a className="hover:underline whitespace-nowrap" href="#">
              Terms & Conditions
            </a>
            <span className="opacity-60">|</span>
            <a className="hover:underline" href="#">
              Disclaimer
            </a>
            <span className="opacity-60">|</span>
            <a className="hover:underline whitespace-nowrap" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
    
    </footer>
  );
};

export default FooterBar;


