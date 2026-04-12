"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { sideNavLinks } from "./navLinks";
import { useActiveSection } from "./useActiveSection";

export default function SideNav() {
  const active = useActiveSection();
  const pathname = usePathname();

  // Side nav only makes sense on the home page — all links are section anchors
  if (pathname !== "/") return null;

  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-4 py-6 px-3 glass-panel rounded-full border-white/5 hidden lg:flex">
      {sideNavLinks.map((link) => {
        const sectionId = link.href.includes("#") ? link.href.split("#")[1] : "";
        const isActive = sectionId ? active === sectionId : false;
        return (
          <Link
            key={link.href}
            href={link.href.includes("#") ? `#${link.href.split("#")[1]}` : link.href}
            aria-label={link.label}
            className={`p-2 rounded-full transition-all ${
              isActive
                ? "text-primary drop-shadow-[0_0_8px_rgba(199,185,245,0.4)] scale-110 bg-white/5"
                : "text-on-surface-variant hover:text-primary hover:bg-white/5"
            }`}
          >
            <span className="material-symbols-outlined">{link.icon}</span>
          </Link>
        );
      })}
    </aside>
  );
}
