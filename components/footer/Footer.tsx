import Image from "next/image";
import { Newsletter } from "../Newsletter";
import { LetsConnect } from "./MainFooter";
import { Socials } from "./Socials";
import { Thanks } from "./Thanks";

export const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto max-w-4xl">
        <div className="flex my-15 justify-center  items-center gap-4 text-sm text-gray-600">
          <span>Based in Dubai</span>
          <Image width={104} height={104} src="/union.svg" alt="lgog" />
          <span>Designing Worldwide</span>
        </div>
        <div className="grid grid-cols-3 gap-12 my-10 text-sm text-center max-w-4xl mx-auto">
          <FooterColumn
            title="Pricing"
            items={["Basic", "Standard", "Premium", "Custom"]}
          />
          <FooterColumn
            title="Resource"
            items={["Design", "Development", "Maintenance", "Student program"]}
          />
          <FooterColumn
            title="Contact"
            items={["Blog", "About", "Careers", "Support"]}
          />
        </div>
        <Newsletter />
        <LetsConnect />
        <Socials />
      </div>
      <Thanks />
    </footer>
  );
};















const FooterColumn = ({ title, items }: { title: string; items: string[] }) => (
  <div className="space-y-2 ">
    <h4 className="font-semibold text-[32px]">{title}</h4>
    <ul className="space-y-1">
      {items.map((item) => (
        <li
          className="font-extralight py-3 text-gray-500 text-2xl tracking-tighter"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);
