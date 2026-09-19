import { cn } from "@/lib/utils";

/** A small ornamental divider echoing the brochure's decorative flourishes. */
export function Ornament({
  className,
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "cream";
}) {
  const line = tone === "gold" ? "via-gold/60" : "via-cream/50";
  const diamond = tone === "gold" ? "text-gold" : "text-cream";
  return (
    <div
      className={cn("flex items-center justify-center gap-3", className)}
      aria-hidden="true"
    >
      <span className={cn("h-px w-12 bg-gradient-to-r from-transparent to-current opacity-60", diamond)} />
      <svg width="46" height="10" viewBox="0 0 46 10" className={diamond} fill="none">
        <path d="M23 0L27 5L23 10L19 5L23 0Z" fill="currentColor" />
        <path d="M0 5H17M29 5H46" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <circle cx="17" cy="5" r="1.4" fill="currentColor" />
        <circle cx="29" cy="5" r="1.4" fill="currentColor" />
      </svg>
      <span className={cn("h-px w-12 bg-gradient-to-l from-transparent to-current opacity-60", diamond)} />
      <span className="sr-only" />
      <span className={cn("hidden", line)} />
    </div>
  );
}
