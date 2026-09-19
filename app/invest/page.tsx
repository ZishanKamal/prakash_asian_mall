import type { Metadata } from "next";
import {
  TrendingUp,
  Building,
  PieChart,
  ShieldCheck,
  FileCheck2,
  Landmark,
  BadgeCheck,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { YieldCalculator } from "@/components/invest/YieldCalculator";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { BookingCTA } from "@/components/home/BookingCTA";
import { investReasons, propertyDocuments } from "@/lib/content";

export const metadata: Metadata = {
  title: "Invest — Why Commercial Space & Property Documents",
  description:
    "Why invest in commercial space at Prakash Asian Mall: 6–10% rental yields, capital appreciation, diversification and low volatility. Clear title with all property documents and pre-approved bank loans.",
  alternates: { canonical: "/invest" },
};

const reasonIcons = [TrendingUp, Building, PieChart, ShieldCheck];

export default function InvestPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Invest", path: "/invest" },
        ]}
      />
      <PageHeader
        eyebrow="Why Invest"
        title="A heritage address. A smart investment."
        description="Commercial real estate is one of the most resilient, income-generating asset classes — and Prakash Asian Mall offers it with clear title and ready documentation."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Invest", path: "/invest" },
        ]}
      />

      {/* Reasons */}
      <section className="bg-cream py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The Case for Commercial"
            title="Four reasons investors choose commercial space"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {investReasons.map((reason, i) => {
              const Icon = reasonIcons[i];
              return (
                <Reveal
                  key={reason.title}
                  delay={i}
                  as="article"
                  className="rounded-2xl border border-brown/12 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_50px_-30px_rgba(75,53,36,0.5)]"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-parchment text-gold-dark">
                    <Icon className="h-6 w-6" />
                  </span>
                  {reason.stat && (
                    <p className="mt-4 font-display text-3xl text-maroon">
                      {reason.stat}
                    </p>
                  )}
                  <h3 className="mt-1 font-display text-lg text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {reason.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Calculator */}
      <section className="bg-parchment-texture py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Run the Numbers"
            title="Estimate your rental returns"
            description="Move the sliders to see how a commercial shop at Prakash Asian Mall could perform."
          />
          <Reveal className="mx-auto mt-14 max-w-4xl">
            <YieldCalculator />
          </Reveal>
        </Container>
      </section>

      {/* Documents */}
      <section className="bg-cream py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Peace of Mind"
                title="Clear title. Complete documentation."
                description="Every important property document is in place — so you invest with total confidence."
                className="max-w-xl"
              />
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {propertyDocuments.map((doc, i) => (
                  <Reveal
                    key={doc}
                    delay={i % 2}
                    className="flex items-center gap-3 rounded-xl border border-brown/12 bg-parchment/40 px-5 py-4"
                  >
                    <FileCheck2 className="h-5 w-5 shrink-0 text-gold-dark" />
                    <span className="text-sm font-medium text-brown">{doc}</span>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={1} className="flex">
              <div className="flex w-full flex-col justify-center rounded-[2rem] border border-gold/30 bg-gradient-to-br from-brown to-ink p-9 text-cream">
                <Landmark className="h-12 w-12 text-gold-light" />
                <h3 className="mt-5 font-display text-2xl">Pre-Approved Bank Loans</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/80">
                  Financing your shop is effortless. Prakash Asian Mall is pre-approved
                  by leading banks — with clear title and ready documentation, your loan
                  process is fast and hassle-free.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Backed by clear, marketable title",
                    "Loans pre-approved by leading banks",
                    "Ready occupancy & completion certificates",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <BadgeCheck className="h-4 w-4 shrink-0 text-gold-light" />
                      <span className="text-cream/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
