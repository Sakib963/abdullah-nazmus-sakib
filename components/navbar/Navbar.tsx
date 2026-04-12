"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLogo from "./NavLogo";
import { navLinks, contactLink } from "./navLinks";
import { useActiveSection } from "./useActiveSection";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onThemeToggle: () => void;
  isDark: boolean;
}

export default function Navbar({ onThemeToggle, isDark }: NavbarProps) {
  const active = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      /* left-0 right-0 = full viewport width; inner div centers with max-w + mx-auto */
      className="fixed top-6 left-0 right-0 z-[60] px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <nav
          className={`glass-panel rounded-full px-5 py-2.5 flex items-center justify-between text-sm font-headline transition-all duration-300 ${
            scrolled ? "shadow-[0_8px_40px_rgba(0,0,0,0.4)]" : ""
          }`}
        >
          {/* Logo */}
          <NavLogo />

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full transition-all group text-[11px] font-semibold uppercase tracking-tight whitespace-nowrap ${
                    isActive
                      ? "bg-white/5 text-primary"
                      : "text-on-surface-variant hover:bg-white/5 hover:text-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px] group-hover:text-glow leading-none">
                    {link.icon}
                  </span>
                  <span className="hidden lg:inline">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right: Contact CTA + Theme toggle + Mobile burger */}
          <div className="flex items-center gap-2">
            <a
              href={contactLink.href}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all group text-[11px] font-semibold uppercase tracking-tight"
            >
              <span className="material-symbols-outlined text-[18px] group-hover:text-glow leading-none">
                {contactLink.icon}
              </span>
              <span className="hidden lg:inline">{contactLink.label}</span>
            </a>

            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-full text-on-surface-variant hover:bg-white/5 transition-all"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[20px]">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 glass-panel rounded-2xl px-3 py-3 flex flex-col gap-1"
            >
              {[...navLinks, contactLink].map((link) => {
                const isActive = active === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-[11px] font-semibold uppercase tracking-tight ${
                      isActive
                        ? "bg-white/5 text-primary"
                        : "text-on-surface-variant hover:bg-white/5 hover:text-primary"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {link.icon}
                    </span>
                    {link.label}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
