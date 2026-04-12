"use client";

import { useState } from "react";
import NavLogo from "./NavLogo";
import { navLinks, contactLink } from "./navLinks";
import { useActiveSection } from "./useActiveSection";

interface NavbarProps {
  onThemeToggle: () => void;
  isDark: boolean;
}

export default function Navbar({ onThemeToggle, isDark }: NavbarProps) {
  const active = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] w-full px-4 max-w-5xl">
      <nav className="glass-panel rounded-full px-6 py-3 flex items-center justify-between border-white/[0.1] text-sm font-headline">
        <NavLogo />

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all group ${
                  isActive
                    ? "bg-white/5 text-primary"
                    : "text-on-surface-variant hover:bg-white/5 hover:text-primary"
                }`}
              >
                <span className="material-symbols-outlined text-[20px] group-hover:text-glow">
                  {link.icon}
                </span>
                <span className="uppercase tracking-tighter text-[11px] font-semibold">
                  {link.label}
                </span>
              </a>
            );
          })}

          {/* Contact CTA */}
          <a
            href={contactLink.href}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all group ml-4"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:text-glow">
              {contactLink.icon}
            </span>
            <span className="uppercase tracking-tighter text-[11px] font-semibold">
              {contactLink.label}
            </span>
          </a>
        </div>

        <div className="flex items-center gap-2">
          {/* Theme toggle (wired in Step 8) */}
          <button
            onClick={onThemeToggle}
            className="p-2 rounded-full text-indigo-300 hover:bg-white/5 transition-all"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-full text-on-surface-variant hover:bg-white/5 transition-all"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-2 glass-panel rounded-2xl px-4 py-4 flex flex-col gap-1">
          {[...navLinks, contactLink].map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-white/5 text-primary"
                    : "text-on-surface-variant hover:bg-white/5 hover:text-primary"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {link.icon}
                </span>
                <span className="uppercase tracking-tighter text-[11px] font-semibold">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
