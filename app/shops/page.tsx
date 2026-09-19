import type { Metadata } from "next";
import { TrendingUp, Store, Building2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { ShopsExplorer } from "@/components/shops/ShopsExplorer";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { BookingCTA } from "@/components/home/BookingCTA";
import { shopStats } from "@/lib/shops";

export const metadata: Metadata = {
  title: "Shops — Available for Booking & Rental Revenue",
  description:
    "Browse commercial shops at Prakash Asian Mall — filter available units by floor and size, or view leased units generating rental revenue. Average yields of 6–10%.",
  alternates: { canonical: "/shops" },
};

const highlights = [
  {
    icon: Store,
    value: shopStats.available,
    label: "Units available for immediate booking",
  },
  {
    icon: TrendingUp,
    value: `${shopStats.leased}`,
    label: "Units already leased & earning",
  },
  {
    icon: Building2,
    value: shopStats.floors,
    label: "Retail floors to choose from",
  },
];

export default function ShopsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Shops", path: "/shops" },
        ]}
      />
      <PageHeader
        eyebrow="Available Shops & Rental Revenue"
        title="Find your space at the mall"
        description="Reserve an available shop, or explore leased units to see the rental potential of a Prakash Asian Mall address."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Shops", path: "/shops" },
        ]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <div className="mb-12 grid gap-5 sm:grid-cols-3">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.label}
                  className="flex items-center gap-4 rounded-2xl border border-brown/12 bg-parchment/40 p-6"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-gold-dark">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-2xl text-maroon">{h.value}</p>
                    <p className="text-sm text-muted">{h.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <ShopsExplorer />

          <p className="mt-10 text-center text-xs text-muted">
            *Rental figures are indicative and provided to illustrate income potential.
            Unit availability and pricing are confirmed on enquiry. The showcased
            inventory is representative of the mall&apos;s unit mix.
          </p>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
