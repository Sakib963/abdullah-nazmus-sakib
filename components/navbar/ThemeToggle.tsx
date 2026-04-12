"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-14 h-7 rounded-full glass-panel flex items-center px-1 cursor-pointer overflow-hidden"
    >
      {/* Track fill */}
      <motion.div
        animate={{ x: isDark ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="absolute inset-0 rounded-full"
        style={{
          background: isDark
            ? "rgba(199,185,245,0.15)"
            : "rgba(155,142,199,0.2)",
        }}
      />

      {/* Thumb */}
      <motion.div
        animate={{ x: isDark ? 0 : 28 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="relative z-10 w-5 h-5 rounded-full flex items-center justify-center"
        style={{
          background: isDark ? "#c7b9f5" : "#9B8EC7",
          boxShadow: isDark
            ? "0 0 8px rgba(199,185,245,0.6)"
            : "0 0 8px rgba(155,142,199,0.4)",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="material-symbols-outlined text-[12px] text-background leading-none"
            style={{ color: isDark ? "#0f0c1c" : "#F2EAE0" }}
          >
            {isDark ? "dark_mode" : "light_mode"}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}
