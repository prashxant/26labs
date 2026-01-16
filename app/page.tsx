import Image from "next/image";


export default function Home() {
  return (
    <div
      className="relative flex w-screen h-screen justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/26labsBg.svg')" }}
    >
      <Hero />
    </div>
  );
}




const Hero = () => {
  return (
    <div className="flex flex-col mx-auto">
      <Image
        className="mx-auto mb-5"
        loading="lazy"
        alt="logo"
        sizes="10"
        width={200}
        height={200}
        src="/logo.svg"
      />
      <h1 className="text-xl sm:text-3xl text-shadow-xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight">
        Good things take time
      </h1>
      <p className="pl-1 text-gray-500 text-center tracking-tighter font-semibold">
        we are working on
        <span className="cursor-pointer px-1 text-rose-700/50">
          26labs.livessss
        </span>
      </p>
    </div>
  );
};
