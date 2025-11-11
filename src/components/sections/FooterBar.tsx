import fbIcon from "@/icons/facebook-gold.png";
import igIcon from "@/icons/instagram-Gold.png";
import ytIcon from "@/icons/youtube-gold.png";
import liIcon from "@/icons/linkedin-gold.png";

const FooterBar = () => {
  return (
    <footer className="bg-black text-luxury-gold">
      <div className="mx-auto w-full max-w-[600px] px-4 md:px-8 py-6">
        <p className="text-center md:text-center text-xs md:text-sm">
          The Clan by Global Edifice: VQ5W+3VM, Bagalur – Sarjapur Rd, Sarjapura, Bengaluru,
          Karnataka – 562 125. PRM/KA/1251/308/PR/091025/008153. Available at{" "}
          <a
            href="https://rera.karnataka.gov.in"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            https://rera.karnataka.gov.in
          </a>
        </p>

        <div className="mt-3 flex items-center justify-center md:justify-center gap-3">
          {[fbIcon, igIcon, ytIcon, liIcon].map((src, i) => (
            <span
              key={i}
              className="inline-flex w-9 h-9 items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="social" className="w-10 h-10" />
            </span>
          ))}
        </div>
      </div>
        {/* separator line */}
        <div className="h-[2px] w-full bg-luxury-green/40 flex items-center justify-center" />

        {/* bottom row with copyright and links */}
        <div className="mt-3 flex items-center justify-center md:justify-between text-[11px] opacity-90 px-4 md:px-16">
          <p>Copyright © 2025 LivingTree 198901086104. All Rights Reserved.</p>
          <div className="space-x-3">
            <a className="hover:underline" href="#">
              Terms & Conditions
            </a>
            <span className="opacity-60">|</span>
            <a className="hover:underline" href="#">
              Disclaimer
            </a>
            <span className="opacity-60">|</span>
            <a className="hover:underline" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
    
    </footer>
  );
};

export default FooterBar;


