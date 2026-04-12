"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { services } from "./serviceData";
import ServiceCard from "./ServiceCard";

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

      {/* Background blob */}
      <div className="section-bg-blob bg-primary w-[350px] h-[350px] top-[10%] -right-[5%]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3 font-headline">
            Core <span className="text-primary">Ecosystem</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
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
