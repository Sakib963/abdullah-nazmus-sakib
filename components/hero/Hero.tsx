import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import { AnimatedBlob } from "@/components/ui";

export default function Hero() {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-28 pb-16 overflow-hidden relative"
    >
      <AnimatedBlob color="bg-primary" size="w-[500px] h-[500px]" position="-top-[10%] -left-[5%]" duration={12} />
      <AnimatedBlob color="bg-secondary" size="w-[300px] h-[300px]" position="bottom-[10%] right-[5%]" duration={9} delay={2} />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}
