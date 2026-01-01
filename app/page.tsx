import { Hero } from "@/components/Hero";
import Image from "next/image";



export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <Image
        src="/26labsBg.svg"
        alt="background"
        fill
        className="object-cover max-md:object-top w-full h-full absolute -z-10 opacity-90"
        priority
      />
      <Hero/>
    </div>
  );
}
