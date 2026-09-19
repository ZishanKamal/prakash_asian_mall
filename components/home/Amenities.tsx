import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { amenities } from "@/lib/content";

export function Amenities() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="World-Class Specifications"
          title="Every detail, thoughtfully engineered"
          description="Fueled by excellence and shaped by quality — a classical elevation on the outside, cutting-edge infrastructure within."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity, i) => {
            const Icon = amenity.icon;
            return (
              <Reveal
                key={amenity.title}
                delay={i % 3}
                as="article"
                className="group relative overflow-hidden rounded-2xl border border-brown/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_50px_-30px_rgba(75,53,36,0.5)]"
              >
                <span className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gold/5 transition-transform duration-500 group-hover:scale-150" />
                <span className="relative inline-flex h-13 w-13 items-center justify-center rounded-xl bg-parchment text-gold-dark transition-colors duration-500 group-hover:bg-maroon group-hover:text-cream">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 font-display text-xl text-ink">
                  {amenity.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
                  {amenity.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
