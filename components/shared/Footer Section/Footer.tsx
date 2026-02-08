import { Phool } from "../Phool";
import { PricingResCon } from "./PricingResCon";
import { Newsletter } from "./Newsletter";
import { Slay } from "./Slay";
import { PrivacyandPolicy } from "./PrivacyandPolicy";


export const Footer = () => {
  return (
    <footer className="flex  sm:pt-20 px-6 max-w-7xl relative mx-auto ">
      <div className="flex relative justify-center gap-8 sm:gap-12 md:gap-16 items-center flex-col mx-auto w-full">
        <Phool
          Line1="Based out of Dubai "
          Line2="Designing Worldwide"
          src="union.svg"
        />
        <PricingResCon />
        <Newsletter />
        <Slay />
        <div className="flex sm:pt-20 w-full items-end">
          <PrivacyandPolicy />
        </div>
      </div>
    </footer>
  );
};
