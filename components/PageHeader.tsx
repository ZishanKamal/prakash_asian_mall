import { Container } from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumb: { name: string; path: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-brown pt-32 pb-16 text-cream sm:pt-40 sm:pb-20">
      <div className="absolute inset-0 bg-parchment-texture opacity-[0.05]" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-px keyline opacity-70"
        aria-hidden
      />
      <Container className="relative text-center">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center justify-center gap-1.5 text-xs text-cream/60"
        >
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.path} className="inline-flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3" />}
              {i === breadcrumb.length - 1 ? (
                <span className="text-gold-light">{crumb.name}</span>
              ) : (
                <Link
                  href={crumb.path}
                  className="transition-colors hover:text-gold-light"
                >
                  {crumb.name}
                </Link>
              )}
            </span>
          ))}
        </nav>

        {eyebrow && (
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
            {eyebrow}
          </span>
        )}
        <h1 className="mx-auto max-w-3xl font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <Ornament className="mt-6" tone="cream" />
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
