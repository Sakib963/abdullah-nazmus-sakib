"use client";

import { motion } from "framer-motion";
import { SectionHeading, AnimatedBlob } from "@/components/ui";
import { techs } from "@/components/technologies/techData";
import {
  SiJavascript, SiTypescript, SiPython,
  SiAngular, SiReact, SiNextdotjs, SiNuxt, SiTailwindcss,
  SiNodedotjs, SiExpress, SiSocketdotio,
  SiPostgresql, SiMongodb, SiRedis, SiFirebase,
  SiGit, SiDocker, SiVercel,
  SiPostman, SiCypress, SiFigma,
} from "react-icons/si";
import type { IconType } from "react-icons";

// ── Icon registry ─────────────────────────────────────────────────────────────
const SI_MAP: Record<string, IconType> = {
  SiJavascript, SiTypescript, SiPython,
  SiAngular, SiReact, SiNextdotjs, SiNuxt, SiTailwindcss,
  SiNodedotjs, SiExpress, SiSocketdotio,
  SiPostgresql, SiMongodb, SiRedis, SiFirebase,
  SiGit, SiDocker, SiVercel,
  SiPostman, SiCypress, SiFigma,
};

function TechIcon({ siIcon, abbr, color, size = 16 }: { siIcon?: string; abbr: string; color: string; size?: number }) {
  const Icon = siIcon ? SI_MAP[siIcon] : null;
  if (Icon) return <Icon size={size} style={{ color }} />;
  return <span className="text-[10px] font-bold font-headline" style={{ color }}>{abbr}</span>;
}

// ── Skill tiers ───────────────────────────────────────────────────────────────
const DAILY = [
  { name: "Angular",    color: "#DD0031", siIcon: "SiAngular",    note: "Primary framework at work. RxJS, signals, lazy modules — been in this daily for 2+ years." },
  { name: "TypeScript", color: "#3178C6", siIcon: "SiTypescript", note: "Write nothing without types these days. Plain JS feels wrong now." },
  { name: "Node.js",    color: "#339933", siIcon: "SiNodedotjs",  note: "Backend runtime of choice. Async patterns, REST APIs, event-driven stuff." },
  { name: "PostgreSQL", color: "#4169E1", siIcon: "SiPostgresql", note: "First database I reach for. Schema design, indexing, complex queries." },
  { name: "Hapi.js",    color: "#EF8C2A", siIcon: undefined,      note: "What we use at Celloscope. Solid plugin system, good for structured API work.", abbr: "Hp" },
];

const REGULAR = [
  // CSS-variable colors adapt automatically: dark in light mode, light in dark mode
  { name: "Next.js",    color: "rgb(var(--color-on-surface))",         siIcon: "SiNextdotjs",  note: "Personal and client projects. App router, SSR, image handling." },
  { name: "React",      color: "#0E7490",                              siIcon: "SiReact",      note: "Comfortable with hooks, context and component patterns." },
  { name: "Express",    color: "rgb(var(--color-on-surface-variant))", siIcon: "SiExpress",    note: "Lightweight APIs and middleware chains. Know it well." },
  { name: "JavaScript", color: "#7A5E00",                              siIcon: "SiJavascript", note: "Where it all started. Still write it, just with TypeScript on top." },
  { name: "Oracle",     color: "#F80000",                              siIcon: undefined,      note: "Used extensively at Celloscope. SQL, stored procedures, views.", abbr: "Or" },
  { name: "Firebase",   color: "#B45309",                              siIcon: "SiFirebase",   note: "Auth and Firestore for rapid prototypes and smaller projects." },
  { name: "Cypress",    color: "#17D19B",                              siIcon: "SiCypress",    note: "E2E testing. Writing tests that actually catch real bugs." },
  { name: "MongoDB",    color: "#47A248",                              siIcon: "SiMongodb",    note: "Document modelling and aggregation pipelines when relational is overkill." },
];

const PRINCIPLES = [
  "Structure first. Messy foundations always come back to bite.",
  "I like understanding how all the pieces connect. Even when I'm deep in one layer, I want to know why it exists.",
  "Nothing is done on the first pass. I review, refine, and improve until it actually feels right.",
  "Useful beats impressive. I pick tools that work in production, not ones that look good in a readme.",
];

const DAILY_NAMES   = new Set(DAILY.map(s => s.name));
const REGULAR_NAMES = new Set(REGULAR.map(s => s.name));
const TOOLBOX = techs.filter(t => !DAILY_NAMES.has(t.name) && !REGULAR_NAMES.has(t.name));

// ── Helpers ───────────────────────────────────────────────────────────────────
const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
});

function FreqLabel({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[10px] font-label font-bold uppercase tracking-[0.2em] flex-shrink-0" style={{ color }}>
        {label}
      </span>
      <div className="flex-1 h-px opacity-25" style={{ background: `linear-gradient(to right, ${color}, transparent)` }} />
    </div>
  );
}

// ── Marquee ───────────────────────────────────────────────────────────────────
function Marquee() {
  const items = [...techs, ...techs];
  return (
    <div className="relative overflow-hidden py-1">
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--color-background), transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--color-background), transparent)" }} />

      <div className="flex gap-3 w-max" style={{ animation: "marquee 42s linear infinite" }}>
        {items.map((tech, i) => (
          <div
            key={i}
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${tech.color}28`,
            }}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl whitespace-nowrap flex-shrink-0"
          >
            <TechIcon siIcon={tech.siIcon} abbr={tech.abbr} color={tech.color} size={14} />
            <span className="text-[11px] font-label text-on-surface-variant">{tech.name}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

// ── Components ────────────────────────────────────────────────────────────────
function DailyRow({ name, color, siIcon, note, index, abbr = "??" }: { name: string; color: string; siIcon?: string; note: string; index: number; abbr?: string }) {
  return (
    <motion.div
      {...fadeUp(index)}
      style={{ borderLeft: `2px solid ${color}`, background: "var(--micro-card-bg)" }}
      className="flex items-start gap-4 pl-4 py-3 rounded-r-xl hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
    >
      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-[2px]">
        <TechIcon siIcon={siIcon} abbr={abbr} color={color} size={16} />
      </div>
      <div>
        <span className="text-[13px] font-bold font-headline text-on-surface">{name}</span>
        <p className="text-[11px] font-body text-on-surface-variant mt-0.5 leading-relaxed">{note}</p>
      </div>
    </motion.div>
  );
}

function RegularCard({ name, color, siIcon, note, index, abbr = "??" }: { name: string; color: string; siIcon?: string; note: string; index: number; abbr?: string }) {
  return (
    <motion.div
      {...fadeUp(index)}
      style={{ background: "var(--micro-card-bg)", border: "1px solid var(--micro-card-border)" }}
      className="rounded-xl px-4 py-3 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors"
    >
      <div className="flex items-center gap-2 mb-1.5">
        <TechIcon siIcon={siIcon} abbr={abbr} color={color} size={13} />
        <span className="text-[12px] font-bold font-headline" style={{ color }}>{name}</span>
      </div>
      <p className="text-[11px] font-body text-on-surface-variant leading-relaxed">{note}</p>
    </motion.div>
  );
}

function ToolboxPill({ name, color, siIcon, abbr, index }: { name: string; color: string; siIcon?: string; abbr: string; index: number }) {
  return (
    <motion.span
      {...fadeUp(index)}
      style={{ color, background: `${color}12`, border: `1px solid ${color}28` }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full whitespace-nowrap"
    >
      <TechIcon siIcon={siIcon} abbr={abbr} color={color} size={12} />
      <span className="text-[11px] font-label font-medium text-on-surface-variant">{name}</span>
    </motion.span>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function SkillsV2() {
  return (
    <section id="Skills" className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <AnimatedBlob color="bg-primary"  size="w-[300px] h-[300px]" position="top-[5%] -right-[4%]"  duration={11} delay={1} />
      <AnimatedBlob color="bg-tertiary" size="w-[250px] h-[250px]" position="bottom-[10%] -left-[4%]" duration={8}  delay={2} />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            pre="Skill"
            accent="Depth"
            accentClassName="text-tertiary"
            subtitle="What I actually reach for and how often. No progress bars, no made-up percentages."
            dividerColor="from-tertiary"
          />
        </motion.div>

        <Marquee />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Daily + Principles */}
          <div className="flex flex-col gap-10">
            <div>
              <FreqLabel label="Reach for daily" color="rgb(var(--color-primary))" />
              <div className="space-y-1">
                {DAILY.map((s, i) => <DailyRow key={s.name} {...s} index={i} />)}
              </div>
            </div>

            <div>
              <FreqLabel label="How I work" color="rgb(var(--color-primary))" />
              <div
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                className="rounded-xl divide-y divide-white/[0.05]"
              >
                {PRINCIPLES.map((text, i) => (
                  <motion.div key={i} {...fadeUp(i)} className="flex items-start gap-3 px-4 py-3">
                    <span className="text-tertiary text-[10px] font-bold font-mono mt-[3px] flex-shrink-0">0{i + 1}</span>
                    <span className="text-[12px] font-body text-on-surface-variant leading-relaxed">{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Regular + Toolbox */}
          <div className="space-y-10">
            <div>
              <FreqLabel label="Comfortable with" color="rgb(var(--color-secondary))" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {REGULAR.map((s, i) => <RegularCard key={s.name} {...s} index={i} />)}
              </div>
            </div>

            <div>
              <FreqLabel label="In the toolbox" color="rgb(var(--color-tertiary))" />
              <div className="flex flex-wrap gap-2">
                {TOOLBOX.map((t, i) => (
                  <ToolboxPill key={t.name} name={t.name} color={t.color} siIcon={t.siIcon} abbr={t.abbr} index={i} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
