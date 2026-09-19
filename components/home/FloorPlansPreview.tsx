import Image from "next/image";
import { ArrowRight, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { floors, basementFloor } from "@/lib/shops";

export function FloorPlansPreview() {
  const items = [basementFloor, ...floors];
  return (
    <section className="bg-parchment-texture py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Plan Your Space"
          title="Four thoughtfully designed levels"
          description="From basement parking to sun-lit terraces — explore every floor and find the unit that fits your business."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((floor, i) => (
            <Reveal
              key={floor.id}
              delay={i}
              as="article"
              className="group overflow-hidden rounded-2xl border border-brown/12 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(75,53,36,0.5)]"
            >
              <div className="relative aspect-square overflow-hidden bg-parchment/40 p-4">
                <Image
                  src={floor.image}
                  alt={`${floor.label} floor plan`}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-brown/10 p-5">
                <div className="flex items-center gap-2 text-gold-dark">
                  <Layers className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                    Level {i + 1}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-xl text-ink">{floor.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {floor.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button href="/floor-plans" variant="primary">
            Explore interactive floor plans <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
