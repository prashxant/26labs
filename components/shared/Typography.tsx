import { cn } from "@/lib/utils";

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
  h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[75px]",
  h2: "text-2xl md:text-4xl lg:text-[43.95px]",
  h3: "text-xl  md:text-2xl lg:text-[28.13px]",
};

const baseStyles =
  "font-bold flex flex-col gap-1 sm:gap-2 items-center text-center";

const highlightStyles = {
  h1: "text-white px-1 sm:px-2 py-0.5 sm:py-1 mx-0.5 sm:mx-1 bg-[#FFAA72] ",
  h2: "text-orange2 mx-1 md:mx-2 p-1",
  h3: "text-orange2 mx-1 md:mx-2 p-1",
};

export const Typography = ({
  variant,
  className,
  line1,
  line2,
  popUp,
}: Omit<TypographyProps, "description">) => {
  return (
    <div className={cn(baseStyles, variants[variant], className)}>
      <p>{line1}</p>
      <p>
        {line2}
        {popUp && <span className={highlightStyles[variant]}>{popUp}</span>}
      </p>
    </div>
  );
};

export const Descripton = ({ className, description }: DiscriptionProps) => {
  return (
    <div
      className={cn(
        "mx-auto text-center my-6 md:my-8 lg:my-10 tracking-tight font-normal text-shadow-2xs text-sm md:text-base",
        className
      )}
    >
      {description}
    </div>
  );
};
