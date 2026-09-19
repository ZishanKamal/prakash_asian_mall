import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import logo from "@/public/brand/logo.png";

/** Typographic wordmark for Prakash Asian Mall. */
export function Wordmark({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const prakash = tone === "light" ? "text-cream" : "text-maroon";
  const asian = tone === "light" ? "text-gold-light" : "text-gold-dark";
  const sub = tone === "light" ? "text-cream/70" : "text-muted";
  return (
    <Link
      href="/"
      aria-label="Prakash Asian Mall — home"
      className={cn("group flex items-center gap-2.5 leading-none", className)}
    >
      <Image
        src={logo}
        alt="Prakash Asian Mall logo"
        priority
        className="h-9 w-auto sm:h-10"
      />
      <span className="flex flex-col">
        <span className="flex items-baseline gap-1.5 font-display text-lg font-semibold tracking-tight whitespace-nowrap sm:text-2xl">
          <span className={prakash}>Prakash</span>
          <span className={asian}>Asian Mall</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[0.58rem] font-medium uppercase tracking-[0.34em]",
            sub,
          )}
        >
          Fort Road · Gulbarga
        </span>
      </span>
    </Link>
  );
}
