"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";

type TypographyProps = {
  variant: TypographyVariant;
  className: string;
  description: string;
  line1: string;
  line2?: string;
  popUp: string;
};

type DiscriptionProps = {
  className: string;
  description: string;
};

type TypographyVariant = "h1" | "h2" | "h3";

const variants = {
  h1: "text-[40px] sm:text-[45px] md:text-[55px] text-shadow lg:text-6xl xl:text-[75px] ",
  h2: "text-[35px] sm:text-[40px] md:text-[46px]",
  h3: "text-[20px] sm:text-xl md:text-2xl lg:text-[29px]",
};

const highlightStyles = {
  h1: "text-white mx-2 text-[px] inline-flex leading-none  px-2 bg-[#FFAA72]",
  h2: "text-orange2 mx-1 md:mx-2 lg:mx-3 p-1 md:p-1.5 lg:p-2",
  h3: "text-orange2 mx-1 md:mx-2 p-1 md:p-1.5",
};

export const Typography = ({
  variant,
  className,
  line1,
  line2,
  popUp,
}: Omit<TypographyProps, "description">) => {
  const shouldReduceMotion = useReducedMotion();
  const HeadingTag = variant as React.ElementType;

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8 }}
      viewport={{ once: true }}
      className={cn(
        "font-bold flex flex-col items-center text-center leading-tight",
        variants[variant],
        className
      )}
    >
      <HeadingTag className="m-0 leading-tight text-wrap balance">
        {line1}
      </HeadingTag>

      <HeadingTag className="m-0 leading-tight mt-2 text-wrap balance">
        {line2}
        {popUp && <span className={highlightStyles[variant]}>{popUp}</span>}
      </HeadingTag>
    </motion.div>
  );
};

export const Descripton = ({ className, description }: DiscriptionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8 }}
      viewport={{ once: true }}
      className={cn(
        "mx-auto text-center font-family-roboto max-w-2xl my-4 sm:my-6 md:my-8 lg:my-8 tracking-tight font-normal text-[15px] md:text-base lg:text-[20px] leading-normal",
        className
      )}
    >
      {description}
    </motion.div>
  );
};
