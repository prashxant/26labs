"use client"

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const words = ["Fastest", "Smartest", "Better"];

export default function HeroTextAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl font-semibold text-neutral-300 flex gap-6">
      <span className="relative w-50 h-15 flex items-end overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="absolute right-0"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>


      <span className="bg-linear-to-t  items-center font-bold text-[64px]  text-center from-neutral-800 to-neutral-200 bg-clip-text text-transparent ">
        Growing
      </span>
    </h1>
  );
}
