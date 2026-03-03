
import { Phool } from "../Phool";
import { Descripton, Typography } from "../Typography";
import { Design } from "./Design";

export const Resources = () => {
  return (
    <main className="mx-auto ">
      <div className="flex h-[50vh] sm:h-screen justify-center items-center">
        <HeroSection />
      </div>
      <div className="max-w-4xl  mx-auto">
        <Phool
          Line1="Design for Utility"
          Line2="Design better Experience"
          src="union.svg"
        />
      </div>
      <Design />
    </main>
  );
};

const HeroSection = () => {
  return (
    <section className="pt-40 mx-auto max-w-6xl pb-8 flex justify-center">
      <div className="flex flex-col items-center text-center gap-6  px-4">
        <Typography
          variant="h2"
          className="tracking-wider"
          line1="Everything You Need"
          line2="to Launch Your"
          popUp="Own Website" />

        <Descripton
          className="max-w-lg sm:text-[20px]"
          description="Introducing our full on tech stack which we will be using for your project. Live from discovery to delivery" />
      </div>
    </section>
  );
};
