import { Phool } from "@/components/ui/Phool";
import { PricingResCon } from "./PricingResCon";
import { Newsletter } from "./Newsletter";
import { Slay } from "./Slay";
import { PrivacyandPolicy } from "./PrivacyandPolicy";
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer className="flex sm:pt-20 px-6 max-w-7xl relative mx-auto ">
      <div className="flex relative justify-center gap-8 sm:gap-12 md:gap-16 items-center flex-col mx-auto w-full">
        <Phool
          Line1="Based out of Dubai "
          Line2="Designing Worldwide"
          src="union.svg"
        />
        <PricingResCon />
        <Newsletter />

        <Slay />

        <div className="relative w-full mt-8">
          <div className="md:hidden flex justify-center pb-5">
            <Socials Parent="" className="" />
          </div>

          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <Socials Parent="" className="" />
          </div>

          <div className="w-full flex items-center">
            <PrivacyandPolicy />
          </div>
        </div>
      </div>
    </footer>
  );
};
