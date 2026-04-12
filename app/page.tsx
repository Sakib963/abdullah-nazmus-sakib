import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Technologies } from "@/components/technologies";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Services />
      <Technologies />
      {/* More sections added step by step */}
    </main>
  );
}
