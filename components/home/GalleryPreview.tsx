import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export function GalleryPreview() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="A Closer Look"
          title="Where heritage meets grandeur"
          description="Explore the elevations, atrium and concourses that make Prakash Asian Mall Gulbarga's most distinctive retail address."
        />
        <div className="mt-14">
          <GalleryGrid limit={4} />
        </div>
        <Reveal className="mt-12 flex justify-center">
          <Button href="/gallery" variant="primary">
            View full gallery <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
