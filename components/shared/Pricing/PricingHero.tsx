import { Descripton, Typography } from "../Typography"



export const PricingHero = () => {
  return (
    <div className="h-screen justify-center flex flex-col items-center">
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
