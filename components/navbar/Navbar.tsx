"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import NavLogo from "./NavLogo";
import { navLinks, contactLink } from "./navLinks";
import { useActiveSection } from "./useActiveSection";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onThemeToggle: () => void;
  isDark: boolean;
}

function getSectionId(href: string): string {
  return href.includes("#") ? href.split("#")[1] : "";
}

/** On home page use bare #hash to avoid double-hash bug; on other pages use /path#hash */
function resolveHref(href: string, isHome: boolean): string {
  if (!href.includes("#")) return href;
  const hash = href.split("#")[1];
  return isHome ? `#${hash}` : href;
}

export default function Navbar({ onThemeToggle, isDark }: NavbarProps) {
  const active = useActiveSection();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function isActive(link: typeof navLinks[0]): boolean {
    if (!isHome) {
      // On sub-pages: highlight Blog when on /blogs, nothing else
      return link.isPage ? pathname === link.href : false;
    }
    const sectionId = getSectionId(link.href);
    return sectionId ? active === sectionId : false;
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-0 right-0 z-[60] px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <nav
          className={`glass-panel rounded-full px-5 py-2.5 flex items-center justify-between text-sm font-headline transition-all duration-300 ${
            scrolled ? "shadow-[0_8px_40px_rgba(0,0,0,0.4)]" : ""
          }`}
          style={{ backdropFilter: "blur(56px)", WebkitBackdropFilter: "blur(56px)" }}
        >
          {/* Logo */}
          <NavLogo />

          {/* Desktop nav links + Contact */}
          <div className="hidden md:flex items-center gap-0.5">
            {[...navLinks, contactLink].map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.href}
                  href={resolveHref(link.href, isHome)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full transition-all group text-[11px] font-semibold uppercase tracking-tight whitespace-nowrap ${
                    active
                      ? "bg-white/5 text-primary"
                      : "text-on-surface-variant hover:bg-white/5 hover:text-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px] group-hover:text-glow leading-none">
                    {link.icon}
                  </span>
                  <span className="hidden lg:inline">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right: Theme toggle + Mobile burger */}
          <div className="flex items-center gap-2">
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
              style={{ backdropFilter: "blur(56px)", WebkitBackdropFilter: "blur(56px)" }}
            >
              {[...navLinks, contactLink].map((link) => {
                const active = isActive(link);
                return (
                  <Link
                    key={link.href}
                    href={resolveHref(link.href, isHome)}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-[11px] font-semibold uppercase tracking-tight ${
                      active
                        ? "bg-white/5 text-primary"
                        : "text-on-surface-variant hover:bg-white/5 hover:text-primary"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {link.icon}
                    </span>
                    {link.label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
