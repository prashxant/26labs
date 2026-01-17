import { GrowthPlan } from "@/components/sections/GrowthPlan";
import { Sliding } from "@/components/sections/Sliding";
import { Descripton, Typography } from "@/components/shared/Typography";

//spacing is needed
export const Foooter = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Typography
        variant="h2"
        className=""
        line1="Fueling Growth With"
        line2=""
        popUp="Smart Technology"
      />
      <Descripton
        className="max-w-md "
        description="We partner with industry-leading platforms to help you
        automate, scale, and simplify your business operations - so
        you can focus on what matters most: growth."
      />
      <Sliding />
      <Descripton
        className="max-w-xl "
        description="By combining thoughtful design, smart AI-driven targeting, and modern technology, we ensure your site speaks to the right people at the right time. Every interaction is crafted to build trust, engagement, and clarity. With us, your website doesn't just exist—it performs, connects, and grows your brand."
      />
      <GrowthPlan />
    </div>
  );
};
