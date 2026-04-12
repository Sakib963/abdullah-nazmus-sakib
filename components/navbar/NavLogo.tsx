export default function NavLogo() {
  return (
    <a href="#Home" className="flex items-center gap-2 group cursor-pointer">
      <svg
        className="w-10 h-10 drop-shadow-[0_0_8px_rgba(199,185,245,0.5)]"
        viewBox="0 0 40 40"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#c7b9f5" />
            <stop offset="100%" stopColor="#c9e8ee" />
          </linearGradient>
        </defs>
        <path
          d="M12 30L20 10L28 30M15 24H25"
          fill="none"
          stroke="url(#logoGrad)"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <path
          d="M12 34C10 34 8 32 8 30C8 28 10 26 12 26C14 26 16 28 16 30"
          fill="none"
          stroke="url(#logoGrad)"
          strokeWidth="1.5"
        />
        <circle cx="20" cy="20" fill="none" r="18" stroke="white" strokeOpacity="0.05" />
      </svg>
      <span className="font-bold text-lg tracking-widest text-white group-hover:text-glow transition-all font-headline">
        AS
      </span>
    </a>
  );
}
