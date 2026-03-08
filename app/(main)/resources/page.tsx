import { HeroSvg } from "@/components/icons/HeroSvg";
import { Resources } from "@/components/resources/resources/Resources";

function page() {
  return (
    <div className="p-2 overflow-hidden relative">
      <div className=" absolute -z-1000">
        <HeroSvg />
      </div>
      <Resources />
    </div>
  );
}

export default page;
