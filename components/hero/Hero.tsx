import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-28 pb-16 overflow-hidden relative"
    >
      {/* Background blob */}
      <div className="section-bg-blob bg-primary w-[500px] h-[500px] -top-[10%] -left-[5%]" />
      <div className="section-bg-blob bg-secondary w-[300px] h-[300px] bottom-[10%] right-[5%]" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}
