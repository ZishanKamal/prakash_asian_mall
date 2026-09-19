import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ShopCard } from "@/components/shops/ShopCard";
import { shops, shopStats } from "@/lib/shops";

export function FeaturedShops() {
  const featured = shops
    .filter((s) => s.status === "available")
    .sort((a, b) => Number(b.isPremium) - Number(a.isPremium))
    .slice(0, 3);

  return (
    <section className="bg-parchment-texture py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Now Open for Booking"
            title="Featured available shops"
            description={`${shopStats.available} of ${shopStats.totalUnits} showcased units are ready to book across three retail floors.`}
            className="sm:max-w-xl"
          />
          <Reveal>
            <Button href="/shops" variant="outline">
              View all shops <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((shop, i) => (
            <Reveal key={shop.id} delay={i}>
              <ShopCard shop={shop} />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          *Indicative figures shown to illustrate rental potential. Pricing available on
          request.
        </p>
      </Container>
    </section>
  );
}
