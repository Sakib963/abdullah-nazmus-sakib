"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedBlob, ScrollReveal, SectionHeading } from "@/components/ui";
import { reflections } from "./reflectionData";
import ReflectionCard from "./ReflectionCard";

const INTERVAL_MS = 4200;
const DESKTOP_COUNT = 3;

const cardVariants = {
  enter: { opacity: 0, x: 56, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: -56,
    scale: 0.97,
    transition: { duration: 0.45, ease: [0.55, 0, 0.78, 0] },
  },
};

export default function Reflections() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = reflections.length;

  const advance = useCallback(
    () => setActive((a) => (a + 1) % total),
    [total]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, advance]);

  const desktopItems = Array.from({ length: DESKTOP_COUNT }, (_, i) =>
    reflections[(active + i) % total]
  );

  return (
    <section
      id="Reflections"
      className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden"
    >
      <AnimatedBlob
        color="bg-secondary"
        size="w-[360px] h-[360px]"
        position="top-[8%] -left-[7%]"
        duration={12}
        delay={1}
      />
      <AnimatedBlob
        color="bg-primary"
        size="w-[260px] h-[260px]"
        position="bottom-[5%] -right-[5%]"
        duration={10}
        delay={2}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <ScrollReveal direction="up">
          <SectionHeading
            pre="Working With"
            accent="Sakib"
            accentClassName="text-secondary text-glow"
            subtitle="A few words from people I've built things with."
            dividerColor="from-secondary"
          />
        </ScrollReveal>

        <div className="mt-14">
          {/* ── Desktop: 3 cards rotating ── */}
          <div
            className="hidden md:block"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="grid grid-cols-3 gap-5 overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                {desktopItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    variants={cardVariants}
                    initial="enter"
                    animate="visible"
                    exit="exit"
                    className="h-full"
                  >
                    <ReflectionCard {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Mobile: 1 card rotating ── */}
          <div
            className="md:hidden overflow-hidden"
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={reflections[active].id}
                variants={cardVariants}
                initial="enter"
                animate="visible"
                exit="exit"
              >
                <ReflectionCard {...reflections[active]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Navigation dots ── */}
          <div
            className="flex justify-center items-center gap-2 mt-8"
            role="tablist"
            aria-label="Reflection navigation"
          >
            {reflections.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`View reflection ${i + 1}`}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ease-out ${
                  i === active
                    ? "w-5 h-[5px] bg-secondary"
                    : "w-[5px] h-[5px] bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
