
import { HeroTxt } from '@/components/plus/hero/HeroTxt';
import { NotBackedByYC } from '@/components/plus/hero/NotBackedYC';
import React from 'react'

function page() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black">
      <NotBackedByYC />
      <HeroTxt />
    </div>
  );
}






export default page
