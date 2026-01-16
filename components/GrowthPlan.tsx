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




    </section>
  );
};


