import Image from "next/image";



export default function Home() {
  return (
    <Image
      src="/26labs.svg"
      alt="background"
      fill
      className="object-cover max-md:object-top w-full h-full absolute -z-10 opacity-90"
      priority
    />
  );
}
