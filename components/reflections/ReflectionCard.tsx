import Image from "next/image";
import type { Reflection } from "./reflectionData";

export default function ReflectionCard({
  comment,
  name,
  designation,
  company,
  photo,
  initials,
  avatarBg,
  avatarText,
}: Reflection) {
  return (
    <div className="glass-panel rounded-2xl p-6 flex flex-col gap-5 h-full relative overflow-hidden group glass-card-hover">
      {/* Decorative quote mark */}
      <span
        aria-hidden="true"
        className="absolute -top-1 right-4 text-[88px] font-serif leading-none text-on-surface opacity-[0.06] select-none pointer-events-none"
      >
        &ldquo;
      </span>

      {/* Comment */}
      <p className="text-on-surface-variant text-sm leading-relaxed font-body flex-1 relative z-10">
        &ldquo;{comment}&rdquo;
      </p>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-white/8 to-transparent" />

      {/* Author */}
      <div className="flex items-center gap-3">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover ring-1 ring-white/10 shrink-0"
          />
        ) : (
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-headline shrink-0 glass-panel ${avatarBg} ${avatarText}`}
          >
            {initials}
          </div>
        )}
        <div>
          <p className="text-on-surface text-sm font-bold font-headline leading-tight">
            {name}
          </p>
          <p className="text-on-surface-variant text-[11px] font-body mt-0.5">
            {designation}
            <span className="opacity-40 mx-1">&middot;</span>
            {company}
          </p>
        </div>
      </div>
    </div>
  );
}
