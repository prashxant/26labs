
import { Third } from "./Third";
import { Typography } from "./Typography"


export const Second = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Typography
        variant="h2"
        className="mb-20 "
        line1="Everything You Need"
        line2="to Launch Your"
        popUp="Own Website"
      />
      <Third/>
    </div>
  );
}



