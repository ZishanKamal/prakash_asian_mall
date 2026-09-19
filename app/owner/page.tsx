import type { Metadata } from "next";
import Image from "next/image";
import { Trophy, Briefcase, Flag, Landmark } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ownerContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Know the Owner — Vishal Vinod Tiwari",
  description:
    "Meet Vishal Vinod Tiwari — owner of Prakash Asian Mall, Senior Director at Teleperformance, motorsport athlete and founder of BoxBox Motorsport Café, carrying forward a fourth-generation family legacy in Kalaburagi.",
  alternates: { canonical: "/owner" },
};

const pillarIcons = [Briefcase, Flag, Trophy, Landmark];

export default function OwnerPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: ownerContent.name,
    jobTitle: "Owner, Prakash Asian Mall",
    worksFor: { "@type": "Organization", name: siteConfig.name },
    description: ownerContent.paragraphs[0],
    image: `${siteConfig.url}/owner.png`,
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Owner", path: "/owner" },
        ]}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <PageHeader
        eyebrow="Know the Owner"
        title="A legacy of leadership & passion"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Owner", path: "/owner" },
        ]}
      />

      <section className="bg-cream py-24 sm:py-28">
        <Container>
          <div className="mx-auto max-w-5xl">
            {/* Floated portrait — the lg:w-[...] value controls the image size (~0.85x); text wraps around it */}
            <figure className="mx-auto mb-8 w-full max-w-xs lg:float-left lg:mx-0 lg:mr-10 lg:mb-4 lg:w-[38%]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/25 shadow-[0_30px_80px_-40px_rgba(75,53,36,0.6)]">
                <Image
                  src="/owner.png"
                  alt={ownerContent.name}
                  fill
                  sizes="(max-width: 1024px) 80vw, 38vw"
                  className="object-cover"
                  priority
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-6 pt-16">
                  <p className="font-display text-2xl text-cream">
                    {ownerContent.name}
                  </p>
                  <p className="mt-1 text-sm text-gold-light">
                    {ownerContent.roleLine}
                  </p>
                </figcaption>
              </div>
            </figure>

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
              {ownerContent.roleLine}
            </span>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              {ownerContent.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-maroon">
              {ownerContent.titles}
            </p>
            <Ornament className="mt-6 justify-start" />

            <div className="mt-8 space-y-5 text-muted">
              {ownerContent.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="clear-both grid grid-cols-2 gap-4 pt-12 sm:grid-cols-4">
              {ownerContent.pillars.map((pillar, i) => {
                const Icon = pillarIcons[i];
                return (
                  <div
                    key={pillar}
                    className="rounded-2xl border border-brown/12 bg-parchment/40 p-5 text-center"
                  >
                    <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-gold-dark">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-sm font-medium text-brown">{pillar}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
