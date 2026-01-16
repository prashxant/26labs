//  import { Container } from "@/components/Container";
// import { Foooter } from "@/components/Foooter";
// import { Footer } from "@/components/Footer";
// import { Hero } from "@/components/Hero";
// import { MainFooter } from "@/components/MainFooter";
// import { MainFooter2 } from "@/components/MainFooter2";
// import { Navbar } from "@/components/Navbar";
// import { Newsletter } from "@/components/Newsletter";
//  import { Second } from "@/components/Second";

import { Card } from "@/components/cards/Card";
import { Container } from "@/components/shared/Container";
import { GrowthPlan } from "@/components/sections/GrowthPlan";
import { Hero } from "@/components/sections/Hero";
import { Third } from "@/components/sections/Third";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Container>
        <Hero />
        <Link className="size-5 ml-10" href="/resources">
          a
        </Link>
        <Link className="size-5" href="/pricing">
          b
        </Link>
        <Card />
        <Third />
        <GrowthPlan />
      </Container>
    </div>
  );
}
