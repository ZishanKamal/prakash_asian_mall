import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { BookingCTA } from "@/components/home/BookingCTA";

export const metadata: Metadata = {
  title: "Gallery — Walkthrough, Photos & Elevations",
  description:
    "A visual tour of Prakash Asian Mall — a video walkthrough, real photographs and renderings of its heritage elevation, grand entrances, central atrium and retail concourses.",
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
        description="A video walkthrough, photographs and renderings of Prakash Asian Mall — where classical heritage meets modern retail grandeur."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />

      {/* Walkthrough video */}
      <section className="bg-parchment-texture py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Walkthrough"
            title="Take the video tour"
            description="Step inside Prakash Asian Mall — from the grand entrance to the atrium and terraces."
          />
          <Reveal className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-gold/25 shadow-[0_30px_80px_-45px_rgba(75,53,36,0.6)]">
            <video
              controls
              preload="none"
              poster="/gallery/real-3.jpg"
              className="aspect-video w-full bg-ink"
            >
              <source src="/gallery/walkthrough.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <GalleryGrid />
          <p className="mt-8 text-center text-xs text-muted">
            Photographs show the completed development; renderings are artistic
            representations and may differ from the final development.
          </p>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
