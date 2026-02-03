import { HeroSvg } from "@/components/icons/HeroSvg";
import { Descripton, Typography } from "../Typography"



export const PricingHero = () => {
  return (
    <div className="h-screen relative justify-center flex flex-col items-center">
      <div className="absolute -z-100">
        <HeroSvg/>
      </div>

      <Typography
        variant="h2"
        className=""
        line1="Everything you need in"
        line2=""
        popUp="one membership"
      />
      <Descripton
        className="max-w-2xl"
        description="Transparent pricing with no hidden costs—pay only for what you need.
          Flexible plans designed to scale as your SaaS grows.
           Premium quality development at startup-friendly prices."
      />
    </div>
  );
}
