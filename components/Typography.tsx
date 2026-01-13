import { cn } from "@/lib/utils";

export type TypographyProps = {
  variant: TypographyVariant
  className: string;
  description: string;
  line1: string;
  line2?: string;
  popUp: string;
};

type TypographyVariant = "h1" | "h2" | "h3";

const variants = {
  h1: "text-[68.66px] font-bold  flex flex-col justify-center items-center",
  h2: "text-[43.95px] font-bold  flex flex-col justify-center items-center",
  h3: "text-[28.13px] font-bold  flex flex-col justify-center items-center",
};

const highlightStyles = {
  h1: "text-white bg-orange1 mx-2 p-1",
  h2: "text-orange2 mx-2 p-1",
  h3: "text-orange2  mx-2 p-1 ",
};

export const Typography = (
  {
    variant,
    className,
    line1,
    line2,
     popUp
  }
    :Omit<TypographyProps,"description">) =>{

  return (
    <div className={cn(variants[variant], className)}>
      <p>{line1}</p>
      <p>
         {line2}
          {popUp && (
            <span className={highlightStyles[variant]}>
              {popUp}
            </span>
          )}
      </p>
    </div>
  );
}

export const Discripton = ({
  className,
  description,
}: Pick<TypographyProps, "className" | "description">) => {
  return <div className={cn("", className)}>{description}</div>;
};
