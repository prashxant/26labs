import Image from "next/image";
import { Newsletter } from "@/components/shared/Newsletter";
import { LetsConnect } from "@/components/layout/MainFooter";
import { Socials } from "@/components/layout/Socials";
import { Thanks } from "@/components/layout/Thanks";

export const Footer = () => {
  return (
    <footer className="px-4 md:px-8">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 my-6 md:my-10 text-sm text-center max-w-4xl mx-auto">
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
  <div className="space-y-1 md:space-y-2">
    <h4 className="font-semibold text-xl md:text-2xl lg:text-[32px]">
      {title}
    </h4>
    <ul className="space-y-1">
      {items.map((item) => (
        <li
          className="font-extralight py-2 md:py-3 text-gray-500 text-base md:text-xl lg:text-2xl tracking-tighter"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);
