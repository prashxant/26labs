import LocalTime from '@/components/LocalTime'
import React from 'react'

function page() {
  return (
    <div className="h-screen w-full text-9xl flex text-shadow-sm  flex-col gap-10 justify-center items-center">
      <p className="text-orange1 ">Comming Soon...</p>
      <LocalTime />
    </div>
  );
}

export default page
