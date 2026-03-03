"use client";
import { HeroSvg } from "@/components/icons/HeroSvg";
import { Descripton, Typography } from "../Typography";
import { Email } from "./Email";
import { Arrow } from "@/components/icons/Arrow";
import { motion, useReducedMotion } from "motion/react";
export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative h-[60vh] sm:h-screen mt-20  w-full ">
      <HeroSvg aria-hidden="true" />
      <div className="absolute inset-0 z-10 flex h-full pt-20 flex-col justify-center items-center text-center">
        <Typography
          className=""
          variant="h1"
          line1="One Problem One Service"
          line2="One"
          popUp="Audience"
        />
        <div className="relative ">
          <Descripton
            className="font-family-roboto px-6 sm:px-0 sm:text-[20px] max-w-2xl"
            description="Delivering warm opportunities and optimizing your visibility process to ensure
          nothing stands between you and your revenue goals."
          />
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion ? { duration: 0 } : { duration: 0.8 }
            }
            viewport={{ once: true }}
            className=""
          >
            <Arrow
              className="absolute hidden sm:block sm:mt-3 left-0 rotate-25 -translate-y-10"
              aria-hidden="true"
            />
          </motion.div>
        </div>
        <Email />
      </div>
    </div>
  );
};
