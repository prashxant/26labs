import { PlusLogo } from "@/components/icons/PlusLogo";
import { Socials } from "@/components/layout/footerSection/Socials";
import Link from "next/link";
import { FooterLinks } from "./FooterLinks";

export const PlusFooter = () => {
  return (
    <div className="p-16 pl-24 flex relative pr-18  text-white items-start">
      <div className="flex gap-60 w-109 flex-col justify-between items-start">
        <div className="">
          <Link href="/plus" className="">
            <PlusLogo />
          </Link>
          <p className="text-[16px] font-medium tracking-wider pt-4 pb-3 ">
            Largest marketplace for UI components.
          </p>
          <div className="flex justify-start">
            <Socials Parent="" className="text-white hover:text-[#FF6C0C]" />
          </div>
        </div>

        <div className="font-medium text-[13px]">
          <p className="text-[16px]">A unit of 26labs.Pvt</p>
          <p className="pt-4.25 pb-13">
            26labs is a web development studio focused on building modern,
            high-quality landing pages and web experiences. We create clean,
            conversion-focused interfaces and share free components with the
            internet to help developers, startups, and creators build faster and
            launch better products.
          </p>
          <p> © 2026 26labs Labs LLC. All Rights Reserved.</p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between gap-60.5">
        <FooterLinks />
        <p>26labs ui build with love.</p>
      </div>
    </div>
  );
};
