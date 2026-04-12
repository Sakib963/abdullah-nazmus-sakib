import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Services />
      {/* More sections added step by step */}
    </main>
  );
}
