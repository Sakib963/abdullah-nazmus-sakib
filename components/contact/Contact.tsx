"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import ContactForm from "./ContactForm";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="Contact" ref={sectionRef} className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="section-bg-blob bg-primary w-[350px] h-[350px] -top-16 -right-16" />
      <div className="section-bg-blob bg-secondary w-[200px] h-[200px] bottom-[5%] -left-[4%]" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div
          ref={cardRef}
          className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden border-white/10"
        >
          {/* Inner glow accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3 font-headline">
              Let&apos;s Craft the{" "}
              <span className="italic text-primary">Unseen</span>
            </h2>
            <p className="text-on-surface-variant text-sm md:text-base font-body max-w-md">
              Ready to transition from the ordinary to the ethereal? Initiate a
              connection below.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
