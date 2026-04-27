import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { SkillsV2 as Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Reflections } from "@/components/reflections";
import { Blogs } from "@/components/blogs";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Blogs />
        <Reflections />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
