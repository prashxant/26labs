import { FooterSvg } from "@/components/icons/footerSvg";
import { Phool } from "../Phool";
import { Socials } from "@/components/shared/Footer Section/Socials";
import { FootFooter } from "./FootFooter";
import { PricingResCon } from "./PricingResCon";
import { Newsletter } from "./Newsletter";
import { LetsConnect } from "@/components/shared/Footer Section/LetsConnetc";



export const Footer = () => {
  return (
    <footer className="flex relative mx-auto py-8  ">
      <FooterSvg className="absolute inset-0 -z-10 " />
      <div className="flex justify-center gap-16  items-center flex-col mx-auto">
        <Phool
          Line1="Based out of Dubai "
          Line2="Designing Worldwide"
          src="union.svg"
        />
        <PricingResCon />
        <Newsletter />
        <LetsConnect />
        <Socials />
        <FootFooter />
      </div>
    </footer>
  );
};
