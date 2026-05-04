"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

// ── Types ─────────────────────────────────────────────────────────────────────
interface Burst {
  id: number;
  x: number;
  y: number;
  type: "left" | "right";
}

// ── Config ────────────────────────────────────────────────────────────────────
const SPRING = { stiffness: 140, damping: 18, mass: 0.6 };
const PARTICLE_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

// Dark mode: light pastels visible on dark bg
const DARK = {
  left:  { solid: "rgba(199,185,245,", glow: "rgba(199,185,245," },
  right: { solid: "rgba(201,232,238,", glow: "rgba(201,232,238," },
  dot:   "rgba(199,185,245,1)",
  dotGlow: "0 0 6px rgba(199,185,245,0.9), 0 0 14px rgba(199,185,245,0.5)",
  ringBorder: "rgba(199,185,245,0.28)",
  ringBg:     "rgba(199,185,245,0.04)",
  ringShadow: "0 0 10px rgba(199,185,245,0.12), inset 0 0 10px rgba(199,185,245,0.05)",
  spot:       "rgba(199,185,245,0.7)",
  spotGlow:   "0 0 6px rgba(199,185,245,0.8)",
};

// Light mode: deep primary/secondary visible on lavender bg
const LIGHT = {
  left:  { solid: "rgba(88,70,160,",  glow: "rgba(88,70,160,"  },
  right: { solid: "rgba(25,105,116,", glow: "rgba(25,105,116," },
  dot:   "rgba(88,70,160,1)",
  dotGlow: "0 0 6px rgba(88,70,160,0.7), 0 0 14px rgba(88,70,160,0.35)",
  ringBorder: "rgba(88,70,160,0.35)",
  ringBg:     "rgba(88,70,160,0.06)",
  ringShadow: "0 0 10px rgba(88,70,160,0.1), inset 0 0 10px rgba(88,70,160,0.05)",
  spot:       "rgba(88,70,160,0.8)",
  spotGlow:   "0 0 6px rgba(88,70,160,0.7)",
};

// ── Main component ────────────────────────────────────────────────────────────
export default function MouseEffect() {
  const [bursts, setBursts]   = useState<Burst[]>([]);
  const [visible, setVisible] = useState(false);
  const [isDark, setIsDark]   = useState(true);
  const idRef = useRef(0);

  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);
  const ringX  = useSpring(mouseX, SPRING);
  const ringY  = useSpring(mouseY, SPRING);

  // Track theme changes
  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.body.style.cursor = "none";

    function onMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    }

    function onDown(e: MouseEvent) {
      if (e.button === 2) return;
      const id = ++idRef.current;
      setBursts(prev => [...prev, { id, x: e.clientX, y: e.clientY, type: "left" }]);
      setTimeout(() => setBursts(prev => prev.filter(b => b.id !== id)), 900);
    }

    function onContext(e: MouseEvent) {
      if (process.env.NODE_ENV === "production") e.preventDefault();
      const id = ++idRef.current;
      setBursts(prev => [...prev, { id, x: e.clientX, y: e.clientY, type: "right" }]);
      setTimeout(() => setBursts(prev => prev.filter(b => b.id !== id)), 900);
    }

    function onLeave() { setVisible(false); }
    function onEnter() { setVisible(true);  }

    window.addEventListener("mousemove",   onMove);
    window.addEventListener("mousedown",   onDown);
    window.addEventListener("contextmenu", onContext);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove",   onMove);
      window.removeEventListener("mousedown",   onDown);
      window.removeEventListener("contextmenu", onContext);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  const theme = isDark ? DARK : LIGHT;

  return (
    <>
      <style>{`@media (pointer: fine) and (prefers-reduced-motion: no-preference) { html, body { cursor: none; } a, button, input, textarea, select, [role="button"], label { cursor: none; } }`}</style>

      <AnimatePresence>
        {visible && (
          <>
            {/* ── Inner precision dot ── */}
            <motion.div
              key="dot"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={{
                position: "fixed", top: 0, left: 0,
                x: mouseX, y: mouseY,
                translateX: "-50%", translateY: "-50%",
                width: 5, height: 5,
                borderRadius: "50%",
                background: theme.dot,
                boxShadow: theme.dotGlow,
                zIndex: 99999,
                pointerEvents: "none",
              }}
            />

            {/* ── Trailing glass ring ── */}
            <motion.div
              key="ring"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={{
                position: "fixed", top: 0, left: 0,
                x: ringX, y: ringY,
                translateX: "-50%", translateY: "-50%",
                width: 32, height: 32,
                borderRadius: "50%",
                border: `1px solid ${theme.ringBorder}`,
                background: theme.ringBg,
                backdropFilter: "blur(1px)",
                boxShadow: theme.ringShadow,
                zIndex: 99998,
                pointerEvents: "none",
              }}
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute", top: -2, left: "50%",
                  marginLeft: -2, width: 4, height: 4,
                  borderRadius: "50%",
                  background: theme.spot,
                  boxShadow: theme.spotGlow,
                  transformOrigin: "2px 18px",
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Click bursts ── */}
      <AnimatePresence>
        {bursts.map(burst => {
          const c = burst.type === "left" ? theme.left : theme.right;
          return (
            <div key={burst.id} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 99997 }}>

              {/* Full-viewport X/Y axis flash */}
              <motion.div
                style={{
                  position: "fixed", left: burst.x, top: 0, bottom: 0, width: 1,
                  translateX: "-50%",
                  background: `linear-gradient(to bottom, transparent 0%, ${c.solid}0.3) 20%, ${c.solid}0.3) 80%, transparent 100%)`,
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <motion.div
                style={{
                  position: "fixed", top: burst.y, left: 0, right: 0, height: 1,
                  translateY: "-50%",
                  background: `linear-gradient(to right, transparent 0%, ${c.solid}0.3) 20%, ${c.solid}0.3) 80%, transparent 100%)`,
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Outer expanding ring */}
              <motion.div
                style={{
                  position: "fixed",
                  left: burst.x, top: burst.y,
                  translateX: "-50%", translateY: "-50%",
                  width: 8, height: 8,
                  borderRadius: "50%",
                  border: `1px solid ${c.solid}0.7)`,
                  boxShadow: `0 0 8px ${c.glow}0.4)`,
                }}
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 7, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />

              {/* Inner fast ring */}
              <motion.div
                style={{
                  position: "fixed",
                  left: burst.x, top: burst.y,
                  translateX: "-50%", translateY: "-50%",
                  width: 6, height: 6,
                  borderRadius: "50%",
                  border: `1px solid ${c.solid}0.5)`,
                }}
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              {/* Radial particles */}
              {PARTICLE_ANGLES.map((angle, i) => {
                const rad  = (angle * Math.PI) / 180;
                const dist = i % 2 === 0 ? 38 : 26;
                return (
                  <motion.div
                    key={i}
                    style={{
                      position: "fixed",
                      left: burst.x, top: burst.y,
                      translateX: "-50%", translateY: "-50%",
                      width: i % 2 === 0 ? 3 : 2,
                      height: i % 2 === 0 ? 3 : 2,
                      borderRadius: "50%",
                      background: `${c.solid}0.9)`,
                      boxShadow: `0 0 5px ${c.glow}0.7)`,
                    }}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{
                      x: Math.cos(rad) * dist,
                      y: Math.sin(rad) * dist,
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                  />
                );
              })}
            </div>
          );
        })}
      </AnimatePresence>
    </>
  );
}
