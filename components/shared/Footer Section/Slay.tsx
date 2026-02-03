import React from 'react'
import { Socials } from './Socials'
import { LetsConnect } from './LetsConnetc'
import { UFO } from '@/components/icons/UFO'

export const Slay = () => {
  return (
    <div className="">
      <div className="flex  justify-between items-center">
        <div className="relative">
          <LetsConnect />
          <UFO
            className="
              w-full
              absolute
              2xl: -translate-x-6
              2xl:-translate-y-6
              -z-10
            "
          />
        </div>
        <div className="">salex@26labs.live</div>
        <div className="">
          <Socials />
        </div>
      </div>
    </div>
  );
}
