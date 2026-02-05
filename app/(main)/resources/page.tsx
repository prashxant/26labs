import { HeroSvg } from "@/components/icons/HeroSvg";
import { Resources } from "@/components/shared/resources/Resources";

function page() {
  return (
    <div
      className="p-5 overflow-hidden relative">
      <div className=" absolute -z-900">
        <HeroSvg />
      </div>
      <Resources />
    </div>
  );
}

export default page;
