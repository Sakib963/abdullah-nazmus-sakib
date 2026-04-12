import { Hero } from "@/components/hero";
import { About } from "@/components/about";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      {/* More sections added step by step */}
    </main>
  );
}
