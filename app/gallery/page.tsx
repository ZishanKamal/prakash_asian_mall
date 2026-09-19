import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { BookingCTA } from "@/components/home/BookingCTA";

export const metadata: Metadata = {
  title: "Gallery — Elevations, Atrium & Interiors",
  description:
    "A visual tour of Prakash Asian Mall — its heritage fort-inspired elevation, grand entrances, central atrium, retail concourses and landscaped terraces.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />
      <PageHeader
        eyebrow="Gallery"
        title="A visual tour of the landmark"
        description="Artistic renderings of Prakash Asian Mall — where classical heritage meets modern retail grandeur."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />

      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <GalleryGrid />
          <p className="mt-8 text-center text-xs text-muted">
            Images are artistic representations and may differ from the final
            development.
          </p>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
