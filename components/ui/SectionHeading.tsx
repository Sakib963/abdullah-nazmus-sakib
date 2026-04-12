interface SectionHeadingProps {
  pre?: string;
  accent: string;
  post?: string;
  accentClassName?: string;
  subtitle?: string;
  dividerColor?: string;   // e.g. "from-primary" — omit to hide divider
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  pre,
  accent,
  post,
  accentClassName = "text-primary",
  subtitle,
  dividerColor,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-headline">
        {pre && <>{pre} </>}
        <span className={accentClassName}>{accent}</span>
        {post && <> {post}</>}
      </h2>
      {subtitle && (
        <p className="text-on-surface-variant text-sm max-w-md mx-auto font-body mt-2">
          {subtitle}
        </p>
      )}
      {dividerColor && (
        <div
          className={`w-16 h-0.5 bg-gradient-to-r ${dividerColor} to-transparent rounded-full mt-3 ${
            centered ? "mx-auto" : ""
          }`}
        />
      )}
    </div>
  );
}
