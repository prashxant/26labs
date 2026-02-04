import React from 'react'
import { Socials } from './Socials'
import { LetsConnect } from './LetsConnetc'

export const Slay = () => {
  return (
    <div className="w-full  ">
      <div className="flex justify-between  items-center">
        <div className="relative">
          <LetsConnect />
        </div>
        <div className="">salex@26labs.live</div>
        <div className="">
          <Socials />
        </div>
      </div>
    </div>
  );
}
