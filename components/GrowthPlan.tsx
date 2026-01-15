import React from "react";
import { Descripton, Typography } from "./Typography";

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

        <div className="flex font-bold text-[28.5px]  justify-center gap-15 text-sm ">
          <span className="text-[#27C840]">Discover</span>
          <span className="text-[#FEBC2F]">Define</span>
          <span className="text-[#FF5F57]">Derive</span>
          <span className="text-[#0088FF]">Deliver</span>
        </div>

        <div className="flex justify-center items-center gap-3 pt-4">
          <span className="text-sm text-gray-500">Consultancy Fees</span>
          <span className="px-3 py-1 rounded-md bg-blue-500 text-white text-sm font-semibold">
            149$
          </span>
        </div>

        <div className="space-y-2">
          <button className="px-6 py-2 rounded-md bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition">
            Book your slot now
          </button>
          <p className="text-xs text-gray-500">
            Bookings are filling fast. Book now at an offer price.
          </p>
        </div>
      </div>

      {/* LOCATION */}
      <div className="flex justify-center items-center gap-4 text-sm text-gray-600">
        <span>Based in Dubai</span>
        <span className="text-orange-500 text-xl">✳</span>
        <span>Designing Worldwide</span>
      </div>

      {/* FOOTER LINKS */}
      <div className="grid grid-cols-3 gap-12 text-sm text-left max-w-4xl mx-auto">
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

      {/* NEWSLETTER */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">
          We give you more. A monthly <br />
          <span className="text-orange-500">Newsletter</span> to keep you
          updated.
        </h3>

        <div className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 w-64 rounded-md border border-gray-300 text-sm focus:outline-none"
          />
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md">
            →
          </button>
        </div>

        <p className="text-xs text-gray-500 max-w-md mx-auto">
          Be the first to receive ideas, trends, and strategies that help your
          brand grow smarter and stand out.
        </p>
      </div>

      {/* CONNECT */}
      <div className="space-y-4">
        <h2 className="text-5xl font-extrabold leading-none">
          Let’s <br /> Connect
        </h2>

        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          Say goodbye to outdated enterprise software and welcome the smoother
          one. We lead you from design to product innovation to shape your path
          from idea to success.
        </p>

        <div className="flex justify-center gap-6 text-gray-500 text-xl">
          <span>in</span>
          <span>X</span>
          <span>▶</span>
          <span>◎</span>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-xs text-gray-500 pt-10">
        © 2026 26labs. All Rights Reserved.
        <div className="flex justify-center gap-4 mt-2">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </section>
  );
};

/* ---------- Reusable Footer Column ---------- */
const FooterColumn = ({ title, items }: { title: string; items: string[] }) => (
  <div className="space-y-2">
    <h4 className="font-semibold">{title}</h4>
    <ul className="space-y-1 text-gray-600">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);
