import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Container >
       <Hero/>
      </Container>
    </div>
  );
}
