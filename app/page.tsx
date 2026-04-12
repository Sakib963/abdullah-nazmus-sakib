import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Technologies } from "@/components/technologies";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Blogs } from "@/components/blogs";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="relative z-10">
        <Hero />
        <About />
        <Technologies />
        <Skills />
        <Projects />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
