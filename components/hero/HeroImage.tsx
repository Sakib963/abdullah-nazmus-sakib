"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// ── Card height shared between both cards ──────────────────────────────────────
const CARD_H = 360; // px — change here to resize both

// ── Snippets — cycle one by one ───────────────────────────────────────────────
const SNIPPETS: Array<Array<{ text: string; col: string }>> = [
  [
    { text: "// how I work",              col: "#4b5563" },
    { text: "",                           col: "" },
    { text: "function build(idea) {",     col: "#c7b9f5" },
    { text: "  return idea",              col: "#e8e8e8" },
    { text: "    .understand()",          col: "#c9e8ee" },
    { text: "    .design()",              col: "#c9e8ee" },
    { text: "    .implement()",           col: "#7bcf7b" },
    { text: "    .test()",                col: "#6ab0f5" },
    { text: "    .ship();",               col: "#ff6b8a" },
    { text: "}",                          col: "#c7b9f5" },
    { text: "",                           col: "" },
    { text: "// always iterating →",      col: "#4b5563" },
  ],
  [
    { text: "// what I value",            col: "#4b5563" },
    { text: "",                           col: "" },
    { text: "const principles = {",       col: "#c7b9f5" },
    { text: '  code:    "clean",',        col: "#7bcf7b" },
    { text: '  apis:    "fast",',         col: "#c9e8ee" },
    { text: '  ui:      "precise",',      col: "#6ab0f5" },
    { text: '  commits: "meaningful",',   col: "#ff6b8a" },
    { text: '  ego:     "none",',         col: "#c7b9f5" },
    { text: "};",                         col: "#c7b9f5" },
    { text: "",                           col: "" },
    { text: "// no shortcuts.",           col: "#4b5563" },
  ],
  [
    { text: "// daily loop",              col: "#4b5563" },
    { text: "",                           col: "" },
    { text: "while (alive) {",            col: "#c7b9f5" },
    { text: "  drinkCoffee();",           col: "#c9e8ee" },
    { text: "  learnSomething();",        col: "#7bcf7b" },
    { text: "  writeCode();",             col: "#6ab0f5" },
    { text: "  fixSomeBugs();",           col: "#ff6b8a" },
    { text: "  ship();",                  col: "#c7b9f5" },
    { text: "  sleep(); // rarely",       col: "#4b5563" },
    { text: "}",                          col: "#c7b9f5" },
    { text: "",                           col: "" },
    { text: "// repeat ∞",               col: "#4b5563" },
  ],
  [
    { text: "// problem solving",         col: "#4b5563" },
    { text: "",                           col: "" },
    { text: "const solve = (bug) =>",     col: "#c7b9f5" },
    { text: "  read(stackTrace)",         col: "#e8e8e8" },
    { text: "    ?? google(error)",       col: "#c9e8ee" },
    { text: "    ?? think(harder)",       col: "#7bcf7b" },
    { text: "    ?? askTheRubberDuck()",  col: "#6ab0f5" },
    { text: "    ?? fix();",              col: "#ff6b8a" },
    { text: "",                           col: "" },
    { text: "// it always gets fixed.",   col: "#4b5563" },
  ],
];


// ── Live-typing terminal ───────────────────────────────────────────────────────
function Terminal() {
  const [snippet, setSnippet] = useState(0);
  const [lines,   setLines]   = useState(0);
  const [chars,   setChars]   = useState(0);

  const active = SNIPPETS[snippet];

  useEffect(() => {
    const line = active[lines] ?? active[active.length - 1];
    if (chars < line.text.length) {
      const t = setTimeout(() => setChars(c => c + 1), 22 + Math.random() * 22);
      return () => clearTimeout(t);
    }
    const isLast = lines >= active.length - 1;
    const t = setTimeout(() => {
      if (isLast) {
        // pause, then move to next snippet
        setTimeout(() => {
          setSnippet(s => (s + 1) % SNIPPETS.length);
          setLines(0);
          setChars(0);
        }, 2400);
      } else {
        setLines(l => l + 1);
        setChars(0);
      }
    }, 65);
    return () => clearTimeout(t);
  }, [lines, chars, snippet, active]);

  const currentLine = Math.min(lines, active.length - 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        height: CARD_H,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        background: "rgba(6,6,16,0.85)",
        border: "1px solid rgba(199,185,245,0.15)",
        boxShadow: "0 8px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
      className="rounded-2xl overflow-hidden flex-1 min-w-0 flex flex-col"
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3 flex-shrink-0"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
      >
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
        <span className="ml-auto text-[10px] font-mono text-white/25 tracking-widest">build.ts</span>
      </div>

      {/* Code body — overflow-hidden locks height */}
      <div className="p-5 font-mono text-[12.5px] leading-[2] flex-1 overflow-hidden">
        {active.slice(0, lines).map((l, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-white/15 select-none text-right flex-shrink-0 w-3">{i + 1}</span>
            <span style={{ color: l.col || "transparent" }}>{l.text || "\u00A0"}</span>
          </div>
        ))}
        {lines < active.length && (
          <div className="flex gap-3">
            <span className="text-white/15 select-none text-right flex-shrink-0 w-3">{currentLine + 1}</span>
            <span style={{ color: active[currentLine].col }}>
              {active[currentLine].text.slice(0, chars)}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[6px] h-[13px] bg-current align-middle ml-px"
              />
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── Photo card ─────────────────────────────────────────────────────────────────
function PhotoCard() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      style={{
        height: CARD_H,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(199,185,245,0.2)",
        boxShadow:
          "0 0 70px rgba(199,185,245,0.12), 0 28px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
      className="rounded-3xl p-4 flex flex-col gap-3 w-[210px] flex-shrink-0"
    >
      {/* Photo — flex-1 fills remaining height */}
      <div className="relative rounded-2xl overflow-hidden flex-1">
        <Image
          src="/abdullah_nazmus_sakib.png"
          alt="Abdullah Nazmus Sakib"
          fill
          sizes="200px"
          className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
          priority
        />

        {/* Scan sweep */}
        <motion.div
          animate={{ top: ["-4%", "106%"] }}
          transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 2.5, ease: "linear" }}
          className="absolute left-0 right-0 h-[3px] pointer-events-none"
          style={{
            background: "linear-gradient(to right, transparent 10%, rgba(201,232,238,0.9) 50%, transparent 90%)",
            boxShadow: "0 0 14px 4px rgba(201,232,238,0.5)",
          }}
        />

        {/* HUD corners */}
        {([
          "top-2.5 left-2.5 border-t-2 border-l-2",
          "top-2.5 right-2.5 border-t-2 border-r-2",
          "bottom-2.5 left-2.5 border-b-2 border-l-2",
          "bottom-2.5 right-2.5 border-b-2 border-r-2",
        ] as const).map((cls, i) => (
          <div key={i} className={`absolute w-5 h-5 ${cls} border-secondary/75`} />
        ))}

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(6,6,16,0.65), transparent)" }}
        />
      </div>

      {/* Identity */}
      <div className="px-1 flex-shrink-0">
        <p className="text-[12px] font-bold font-headline text-on-surface leading-snug">Abdullah Nazmus Sakib</p>
        <p className="text-[10px] font-label text-secondary mt-0.5 tracking-wide">Full Stack Engineer</p>
      </div>

      {/* Stats */}
      <div
        className="flex items-center justify-between px-1 pt-2.5 pb-0.5 flex-shrink-0"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="text-center">
          <p className="text-sm font-bold font-headline text-primary leading-none">2+</p>
          <p className="text-[8px] text-on-surface-variant font-label uppercase tracking-wider mt-1">Yrs</p>
        </div>
        <div className="w-px h-5 bg-white/10" />
        <div className="text-center">
          <p className="text-sm font-bold font-headline text-primary leading-none">20+</p>
          <p className="text-[8px] text-on-surface-variant font-label uppercase tracking-wider mt-1">Projects</p>
        </div>
        <div className="w-px h-5 bg-white/10" />
        <div className="text-center">
          <motion.p
            animate={{ opacity: [1, 0.15, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-sm text-emerald-400 font-bold leading-none"
          >●</motion.p>
          <p className="text-[8px] text-on-surface-variant font-label uppercase tracking-wider mt-1">Live</p>
        </div>
      </div>
    </motion.div>
  );
}

// ── Root ───────────────────────────────────────────────────────────────────────
export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex justify-center lg:justify-end"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 55% 50%, rgba(199,185,245,0.1) 0%, transparent 65%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative flex items-start gap-4 w-full max-w-[520px]">
        <PhotoCard />
        <Terminal />
      </div>
    </motion.div>
  );
}
