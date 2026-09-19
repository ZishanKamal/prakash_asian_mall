import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { FloorPlanViewer } from "@/components/floorplan/FloorPlanViewer";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { BookingCTA } from "@/components/home/BookingCTA";
import { shopStats } from "@/lib/shops";

export const metadata: Metadata = {
  title: "Floor Plans — Interactive Layout & Shop Details",
  description:
    "Explore interactive, zoomable floor plans of Prakash Asian Mall across four levels — Basement Parking, Lower Ground, Upper Ground and First Floor — with shop sizes and availability.",
  alternates: { canonical: "/floor-plans" },
};

export default function FloorPlansPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Floor Plans", path: "/floor-plans" },
        ]}
      />
      <PageHeader
        eyebrow="Layout & Floor Plans"
        title="Explore every level, down to the unit"
        description="Zoom into each floor plan to view shop numbers, sizes and availability. The mall spans four thoughtfully planned levels on a triangular footprint."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Floor Plans", path: "/floor-plans" },
        ]}
      />

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <FloorPlanViewer />

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-brown/12 bg-parchment/40 p-6 text-center">
              <p className="font-display text-3xl text-maroon">
                {shopStats.floors} + 1
              </p>
              <p className="mt-1 text-sm text-muted">
                Retail floors plus basement parking
              </p>
            </div>
            <div className="rounded-2xl border border-brown/12 bg-parchment/40 p-6 text-center">
              <p className="font-display text-3xl text-maroon">
                {shopStats.landAreaSqft.toLocaleString("en-IN")}
              </p>
              <p className="mt-1 text-sm text-muted">Sq. ft of prime land</p>
            </div>
            <div className="rounded-2xl border border-brown/12 bg-parchment/40 p-6 text-center">
              <p className="font-display text-3xl text-maroon">
                {shopStats.available}
              </p>
              <p className="mt-1 text-sm text-muted">
                Showcased units available to book
              </p>
            </div>
          </div>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
