import React from "react";
import { Typography } from "../Typography";
import ProcessGrid from "./Cards";

function ToolkitPage() {
  return (
    <div className="flex z-1 justify-center flex-col gap-6 md:gap-12 items-center mt-8 md:mt-12">
      <div className="text-3xl text-center max-w-7xl font-semibold">
        Our Toolkit
      </div>
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

export default ToolkitPage;
