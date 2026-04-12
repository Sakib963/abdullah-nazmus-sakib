"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { services } from "./serviceData";
import ServiceCard from "./ServiceCard";
import { SectionHeading, AnimatedBlob } from "@/components/ui";

export default function Services() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<React.RefObject<HTMLDivElement | null>>>(
    services.map(() => ({ current: null }))
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Cards stagger
      cardRefs.current.forEach((ref, i) => {
        if (!ref.current) return;
        gsap.from(ref.current, {
          opacity: 0,
          y: 44,
          duration: 0.65,
          delay: i * 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="Services" className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Soft grid overlay */}
      <div className="absolute inset-0 soft-grid opacity-30 pointer-events-none" />

      <AnimatedBlob color="bg-primary" position="top-[10%] -right-[5%]" duration={10} delay={0.5} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="mb-16">
          <SectionHeading
            pre="Core"
            accent="Ecosystem"
            accentClassName="text-primary"
            subtitle="End-to-end capabilities — from pixel-perfect UI to cloud-native infrastructure."
            dividerColor="from-primary"
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              {...service}
              cardRef={cardRefs.current[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
