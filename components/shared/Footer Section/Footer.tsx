import { Phool } from "../Phool";
import { Socials } from "@/components/shared/Footer Section/Socials";
import { FootFooter } from "./FootFooter";
import { PricingResCon } from "./PricingResCon";
import { Newsletter } from "./Newsletter";
import { LetsConnect } from "@/components/shared/Footer Section/LetsConnetc";
import { Slay } from "./Slay";

export const Footer = () => {
  return (
    <footer className="flex px-2 max-w-7xl relative mx-auto py-8">
      <div className="flex  justify-center gap-8 sm:gap-12 md:gap-16 items-center flex-col mx-auto w-full">
        <Phool
          Line1="Based out of Dubai "
          Line2="Designing Worldwide"
          src="union.svg"
        />
        <PricingResCon />
        <Newsletter />
        <Slay />
      </div>
    </footer>
  );
};
