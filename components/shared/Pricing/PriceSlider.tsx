"use client";

import { motion } from "motion/react";
import { useState } from "react";

const cards = [
  { title: "Starter", price: "$249" },
  { title: "Standard", price: "$399" },
  { title: "Premium", price: "$549" },
  { title: "Enterprise", price: "Custom" },
];

export const PriceSlider = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative mx-auto w-full max-w-7xl overflow-hidden">
      {/* Track */}
      <motion.div
        className="flex gap-6  px-4 md:px-0"
        animate={{
          x: `-${index * 85}%`,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="
              w-[85%] shrink-0
              sm:w-[60%]
              md:w-1/3
              lg:w-1/4
            "
          >
            {/* Pricing card */}
            <div className="h-full rounded-[32px] border-2 border-blue-200 p-8 text-left">
              <h3 className="text-xl font-bold">{card.title}</h3>

              <ul className="mt-6 space-y-3 text-sm">
                <li>✔ High quality landing page</li>
                <li>✔ Fast and classic design</li>
                <li>✔ 24-hour support</li>
                <li>✔ React / Next.js / Tailwind</li>
              </ul>

              <p className="mt-8 text-lg">
                for{" "}
                <span className="text-3xl font-bold text-blue-600">
                  {card.price}
                </span>{" "}
                /project
              </p>

              <button className="mt-6 w-full rounded-lg border-2 border-blue-300 py-2 font-semibold">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Mobile dots */}
      <div className="mt-6 flex justify-center gap-2 md:hidden">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              index === i ? "bg-black w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
