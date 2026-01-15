
 import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MainFooter } from "@/components/MainFooter";
import { MainFooter2 } from "@/components/MainFooter2";
import { Newsletter } from "@/components/Newsletter";
 import { Second } from "@/components/Second";




export default function Home() {
  return (
    <div>
      <Container>
        <Hero />
        <Second />
      </Container>
      <Footer />
      <Newsletter />
      <Container>
        <MainFooter />
      </Container>
      <MainFooter2 />
    </div>
  );
}




  // <div>
  //   <Container>
  //     <Hero />
  //     <Second />
  //   </Container>
  // </div>;
