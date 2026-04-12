import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Technologies } from "@/components/technologies";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
