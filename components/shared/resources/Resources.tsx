import { HeroSvg } from "@/components/icons/HeroSvg";
import { Phool } from "../Phool";
import ProcessGrid from "../Toolkit/Cards";
import { Descripton, Typography } from "../Typography";
import { Design } from "./Design";

export const Resources = () => {
  return (
    <main className="">

      <HeroSection />
      <ProcessGrid />
      <Phool
        Line1="Design for Utility"
        Line2="Design better Experience"
        src="union.svg" />
      <Design />

    </main>
  );
};

const HeroSection = () => {
  return (
    <section className="pt-40 pb-8 flex justify-center">
      <div className="flex flex-col items-center text-center gap-6 max-w-3xl px-4">
        <Typography
          variant="h2"
          className="tracking-wider"
          line1="Everything You Need"
          line2="to Launch Your"
          popUp="Own Website."
        />
        <Descripton
          className="max-w-lg"
          description="Introducing our full on tech stack which we will be using for your project. Live from discovery to delivery."
        />
      </div>
    </section>
  );
};
