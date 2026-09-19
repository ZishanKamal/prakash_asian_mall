import type { Metadata } from "next";
import Image from "next/image";
import { Building2, GraduationCap, Landmark, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { BookingCTA } from "@/components/home/BookingCTA";
import { aboutContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — Heritage, Gulbarga & Asian Builders",
  description:
    "The story of Prakash Asian Mall — a 75-year Tiwari family legacy near Gulbarga Fort, the growth of Gulbarga as a Smart City, and the craftsmanship of Asian Builders.",
  alternates: { canonical: "/about" },
};

const gulbargaFacts = [
  { icon: GraduationCap, label: "Educational capital", value: "2 universities" },
  { icon: Landmark, label: "Governance", value: "Own High Court" },
  { icon: TrendingUp, label: "Growth", value: "Smart City" },
  { icon: Building2, label: "Retail", value: "Tier-2 frontrunner" },
];

const builderStats = [
  { value: "2003", label: "Established" },
  { value: "10+", label: "Successful projects" },
  { value: "1M+", label: "Sq. ft delivered" },
  { value: "95,000", label: "Sq. ft — this project" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <PageHeader
        eyebrow="Our Story"
        title="A landmark born of heritage"
        description="Celebrating the grandeur of Gulbarga's heritage — reimagined as a modern commercial destination."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      {/* Heritage */}
      <section className="bg-cream py-24 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
                The Tiwari Legacy
              </span>
              <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
                {aboutContent.heritage.title}
              </h2>
              <div className="mt-6 space-y-5 text-muted">
                {aboutContent.heritage.body.map((p) => (
                  <p key={p.slice(0, 24)} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={1} className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-gold/25 shadow-[0_30px_80px_-40px_rgba(75,53,36,0.6)]">
                <Image
                  src="/about/legacy.jpg"
                  alt="Prakash Asian Mall heritage elevation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Gulbarga */}
      <section className="bg-parchment-texture py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The City"
            title={aboutContent.gulbarga.title}
            description="One of Karnataka's fastest-growing cities — and a rising retail powerhouse."
          />
          <div className="mt-14 grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              {/* Placeholder — replace /public/about/gulbarga.jpg with your image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-gold/25 shadow-[0_30px_80px_-40px_rgba(75,53,36,0.6)]">
                <Image
                  src="/about/gulbarga.jpg"
                  alt="Gulbarga (Kalaburagi) — a fast-growing Smart City in Karnataka"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={1} className="space-y-5 text-muted">
              {aboutContent.gulbarga.body.map((p) => (
                <p key={p.slice(0, 24)} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {gulbargaFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-brown/12 bg-white p-6 text-center"
                  >
                    <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-parchment text-gold-dark">
                      <Icon className="h-6 w-6" />
                    </span>
                    <p className="mt-4 font-display text-xl text-maroon">
                      {fact.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                      {fact.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Builders */}
      <section className="bg-cream py-24 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-gold/25 shadow-[0_30px_80px_-40px_rgba(75,53,36,0.6)]">
                <Image
                  src="/gallery/gallery-5.png"
                  alt="Interior craftsmanship of Prakash Asian Mall by Asian Builders"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
                The Craftsmen
              </span>
              <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
                {aboutContent.builders.title}
              </h2>
              <div className="mt-6 space-y-5 text-muted">
                {aboutContent.builders.body.map((p) => (
                  <p key={p.slice(0, 24)} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {builderStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-2xl text-maroon">{stat.value}</dd>
                    <p className="mt-1 text-xs text-muted">{stat.label}</p>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
