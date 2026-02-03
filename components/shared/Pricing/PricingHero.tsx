import { Descripton, Typography } from "../Typography"
import { GrowthPel } from "./GrowthPel";


export const PricingHero = () => {
  return (
    <div className="h-screen justify-center flex flex-col items-center">
      <div className="">

        <Typography
          variant="h2"
          className=""
          line1="Everything you need in"
          line2=""
          popUp="one membership"
        />
        <Descripton
          className="max-w-2xl"
          description="Lorem ipsum dolor sit amet consectetur. Sagittis faucibus ac amet orci felis tincidunt nec. In aliquam amet venenatis enim suspendisse. Integer nibh diam maecenas risus neque vulputate quam eget. Ac lorem ultricies gravida cras ultrices."
        />
      </div>
      <GrowthPel />
    </div>
  );
}
