import { FooterSvg } from "@/components/icons/footerSvg";
import { Phool } from "../Phool";
import { Socials } from "@/components/shared/Footer Section/Socials";


export const Footer = () => {
  return (
    <footer className="flex relative w-full  mx-auto py-8 gap-18 flex-col justify-center items-center ">
      <FooterSvg className="absolute inset-0 -z-10 " />
      <Phool
        Line1="Based out of Dubai "
        Line2="Designing Worldwide"
        src="union.svg"
      />
      <div className="">Pricing Resource Contact</div>
      <div className="">Newsletter</div>
      <div className=""> Lersconntect</div>
      <Socials />

    </footer>
  );
};
