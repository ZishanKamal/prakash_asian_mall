import { cn } from "@/lib/utils";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={cn(
        "flex flex-col",
        isCenter ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em]",
            tone === "light" ? "text-gold-light" : "text-gold-dark",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.9rem]",
          tone === "light" ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {isCenter && <Ornament className="mt-5" tone={tone === "light" ? "cream" : "gold"} />}
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-cream/80" : "text-muted",
            isCenter && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
