import React from 'react'
import { Typography } from '../Typography'
import ProcessGrid from './Cards'

function ToolkitPage() {
  return (
    <div className="flex z-1 justify-center flex-col gap-22 items-center">
      <div className="text-3xl text-center w-max-7xl  font-semibold">Our Toolkit</div>
      <Typography
        variant="h2"
        className="tracking-wider "
        line1="Everything You Need"
        line2="to Launch Your "
        popUp="Own Website."
      />
      <ProcessGrid />

    </div>
  );
}

export default ToolkitPage
