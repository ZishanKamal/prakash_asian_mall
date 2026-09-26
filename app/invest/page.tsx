import type { Metadata } from "next";
import {
  TrendingUp,
  Building,
  PieChart,
  ShieldCheck,
  FileCheck2,
  Landmark,
  BadgeCheck,
  Store,
  CalendarCheck,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
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
        description={
          <>
            Commercial real estate is one of the most resilient, income-generating
            asset classes — and Prakash Asian Mall offers it with{" "}
            <strong className="text-lg font-semibold text-gold-light sm:text-xl">
              clear titles and complete documentation
            </strong>
            .
          </>
        }
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

      {/* Anchor tenant — already income-generating */}
      {/* To name the tenant, replace "an established anchor tenant" below (e.g. "Harsha"). */}
      <section className="relative overflow-hidden bg-brown py-24 text-cream sm:py-28">
        <div className="absolute inset-0 bg-parchment-texture opacity-[0.05]" aria-hidden />
        <Container className="relative">
          <Reveal className="mx-auto max-w-4xl rounded-[2.2rem] border border-gold/30 bg-gradient-to-br from-maroon/40 to-ink/50 p-8 text-center backdrop-blur-sm sm:p-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ink/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
              <BadgeCheck className="h-4 w-4" /> Income From Day One
            </span>
            <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
              These shops are already earning
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/85">
              The units available now are already leased to and generating rental
              income from{" "}
              <strong className="font-semibold text-gold-light">
                an established anchor tenant
              </strong>{" "}
              — a leading consumer-durables retailer, in business since 1983, offering
              high-quality electronics, appliances and home goods. You&apos;re not just
              buying a shop; you&apos;re acquiring a ready, income-generating asset with a
              proven, footfall-driving brand already in place.
            </p>
            <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  icon: CalendarCheck,
                  stat: "Since 1983",
                  label: "Established anchor brand",
                },
                {
                  icon: Store,
                  stat: "Consumer Durables",
                  label: "Electronics · appliances · home goods",
                },
                {
                  icon: TrendingUp,
                  stat: "Day-One Income",
                  label: "Rent already flowing",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.stat}
                    className="rounded-2xl border border-cream/12 bg-cream/5 p-6"
                  >
                    <Icon className="mx-auto h-7 w-7 text-gold-light" />
                    <dt className="mt-3 font-display text-xl text-cream">{item.stat}</dt>
                    <dd className="mt-1 text-xs text-cream/70">{item.label}</dd>
                  </div>
                );
              })}
            </dl>
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
