import { Hero } from "@/components/Hero";




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
