
import ServicesGrid from '@/components/cards/Card';
import { Descripton, Typography } from '@/components/shared/Typography'
import Image from 'next/image';
import React from 'react'

function page() {
  return (
    <div>
      <Typography
        variant="h2"
        className="my-10"
        line1="Everything You Need "
        line2="to Launch Your "
        popUp="Own Website."
      />

      <Descripton
        className="max-w-xl"
        description="Introducing our full on tech stack which we will be using for your project Live from discovery to delivery.  "
      />
      <ServicesGrid />

      <div className="flex flex-col md:flex-row my-8 md:my-12 lg:my-15 justify-center items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-600">
        <span>Design for Utility </span>
        <Image
          width={64}
          height={64}
          src="/union.svg"
          alt="lgog"
          className="md:w-20 md:h-20 lg:w-26 lg:h-26"
        />
        <span>Design better Experience </span>
      </div>
      <Typography
        variant="h2"
        className=""
        line1=""
        line2=""
        popUp="Design Resources."
      />

      <ServicesGrid />

      <div className="flex flex-col md:flex-row my-8 md:my-12 lg:my-15 justify-center items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-600">
        <span>Develop for Society </span>
        <Image
          width={64}
          height={64}
          src="/Image pack/phool.svg"
          alt="lgog"
          className="md:w-20 md:h-20  lg:w-26 lg:h-26 rotate-37"
        />
        <span>Develop better Humanity </span>
      </div>
      <Typography
        variant="h2"
        className=""
        line1=""
        line2=""
        popUp="Devlopment Resource"
      />
      <ServicesGrid />
      <Typography
        variant="h2"
        className=""
        line1=""
        line2=""
        popUp="Manage Work"
      />
    </div>
  );
}

export default page
