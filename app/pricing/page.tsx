import { Descripton, Typography } from '@/components/shared/Typography'


function page() {
  return (
    <div className="flex  flex-col justify-center items-center">
      <Typography
        variant="h2"
        className=""
        line1="Everything you need in"
        line2=""
        popUp="one membership."
      />
      <Descripton
        className="max-w-xl"
        description="Lorem ipsum dolor sit amet consectetur. Sagittis faucibus ac amet orci felis tincidunt nec. In aliquam amet venenatis enim suspendisse. Integer nibh diam maecenas risus neque vulputate quam eget. Ac lorem ultricies gravida cras ultrices."
      />

      <div className="relative max-w-7xl">
        <div className="bg-[#8CA9FF] mask-x-from-90% mask-x-to-100% mask-y-from-90% mask-y-to-100%  absolute inset-0 w-full h-50"></div>
        <Typography
          variant="h2"
          className="text-white relative z-10 p-10 text-shadow-[0_2px_0px_rgba(255,133,53,1)]"
          line1="Get personalized growth plan"
          line2=""
          popUp=""
        />

      </div>
    </div>
  );
}

export default page
