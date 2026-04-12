const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub",   href: "#" },
  { label: "Dribbble", href: "#" },
];

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">

        {/* Logo + tagline */}
        <div className="flex items-center gap-4">
          <svg className="w-9 h-9" viewBox="0 0 40 40" aria-hidden="true">
            <defs>
              <linearGradient id="footerLogoGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#c7b9f5" />
                <stop offset="100%" stopColor="#c9e8ee" />
              </linearGradient>
            </defs>
            <path
              d="M12 30L20 10L28 30M15 24H25"
              fill="none"
              stroke="url(#footerLogoGrad)"
              strokeLinecap="round"
              strokeWidth="2.5"
            />
          </svg>
          <div>
            <span className="text-base font-bold text-white tracking-widest block font-headline">AS</span>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-0.5 font-label">
              Digital Sovereign © {new Date().getFullYear()}
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="flex gap-6">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-on-surface-variant hover:text-white transition-all text-xs uppercase tracking-widest font-bold font-label"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-3 px-4 py-2 glass-panel rounded-full border-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(199,185,245,1)]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant font-label">
            System Online
          </span>
        </div>

      </div>
    </footer>
  );
}
