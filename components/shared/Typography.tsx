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
  h1: "text-[36px] sm:text-[45px] md:text-[55px] text-shadow lg:text-6xl xl:text-[90px] ",
  h2: "text-[35px] sm:text-2xl  md:text-5xl xl:text-[75px]",
  h3: "text-lg sm:text-xl md:text-2xl lg:text-[28.13px]",
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
  return (
    <div
      className={cn(
        "font-bold flex flex-col items-center text-center leading-tight",
        variants[variant],
        className
      )}
    >
      <p className="m-0 leading-tight">{line1}</p>

      <p className="m-0 leading-tight mt-2">
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
        "mx-auto text-center font-family-roboto max-w-2xl my-4 sm:my-6 md:my-8 lg:my-8 tracking-tight font-normal text-[13px] sm:text-sm md:text-base lg:text-lg leading-relaxed",
        className
      )}  >
      {description}
    </div>
  );
};
