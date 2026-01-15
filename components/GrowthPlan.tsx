import React from "react";
import { Descripton, Typography } from "./Typography";
import Image from "next/image";


export const GrowthPlan = () => {
  return (
    <section className="w-full space-y-24 text-center">
      <div className="space-y-6">
        <Typography
          variant="h2"
          className="text-orange2"
          line1="Get personalized"
          popUp="growth plan"
        />

        <Descripton
          className="max-w-lg my-10"
          description="We'll identify your biggest revenue bottlenecks and map out a proven outbound strategy to fix them - based on what's working for our other clients."
        />

        <div className="flex font-bold text-[28.5px]  justify-center gap-32 text-sm ">
          <span className="text-[#27C840]">Discover</span>
          <span className="text-[#FEBC2F]">Define</span>
          <span className="text-[#FF5F57]">Derive</span>
          <span className="text-[#0088FF]">Deliver</span>
        </div>

        <div className="flex justify-center items-center gap-16 pt-4">
          <span className="text-sm text-[#8CA9FF]">Consultancy Fees</span>
          <button
            className="
            text-mainBg
            bg-blue2
            h-9.5
            w-29
            px-2
            rounded-[5px]
            ring-1 ring-blue3
            shadow-[inset_0_0_3px_0.5px_rgba(0,136,255,1)]
          "
          >
            Claim it
          </button>
        </div>

        <div className="space-y-2">
          <button className="px-6 my-10 py-2 rounded-md bg-orange2 text-white text-sm shadow-sm font-medium hover:bg-orange-500 transition">
            Book your slot now
          </button>
          <p className="text-xs text-center  my-5 text-[#8CA9FF]">
            Bookings are filling fast. Book now at an offer price.
          </p>
        </div>
      </div>

      {/* LOCATION */}
      <div className="flex pl-5 justify-center items-center gap-4 text-sm text-gray-600">
        <span>Based in Dubai</span>
        <Image width={104} height={104} src="/union.svg" alt="lgog" />
        <span>Designing Worldwide</span>
      </div>

      <div className="grid grid-cols-3 gap-12 text-sm text-center max-w-4xl mx-auto">
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
    </section>
  );
};


const FooterColumn = ({ title, items }: { title: string; items: string[] }) => (
  <div className="space-y-2 ">
    <h4 className="font-semibold text-[32px]">{title}</h4>
    <ul className="space-y-1">
      {items.map((item) => (
        <li className="font-extralight py-3 text-gray-500 text-2xl tracking-tighter" key={item}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

