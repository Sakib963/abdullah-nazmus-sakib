import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Technologies } from "@/components/technologies";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Skills />
      <Projects />
      {/* More sections added step by step */}
    </main>
  );
}
