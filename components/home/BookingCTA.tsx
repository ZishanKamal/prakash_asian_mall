import Image from "next/image";
import { Download, Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Ornament } from "@/components/ui/Ornament";
import { Button } from "@/components/ui/Button";
import { siteConfig, primaryPhoneDigits } from "@/lib/site";

export function BookingCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/gallery/gallery-3.png"
          alt="Central atrium of Prakash Asian Mall"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-maroon-dark/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
      </div>

      <Container className="relative py-24 text-center sm:py-32">
        <Reveal className="mx-auto max-w-3xl">
          <Ornament className="mb-6" tone="cream" />
          <h2 className="font-display text-3xl leading-tight text-cream sm:text-5xl">
            Own a piece of heritage.
            <br />
            <span className="font-serif italic text-gold-light">
              Own a piece of Gulbarga.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-cream/85">
            Bookings are now open at Gulbarga&apos;s most prestigious commercial address.
            Download the brochure or speak with our team to reserve your shop today.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={siteConfig.brochurePath}
              variant="secondary"
              size="lg"
              external
              download
            >
              <Download className="h-4 w-4" /> Download Brochure
            </Button>
            <Button
              href={`tel:+${primaryPhoneDigits}`}
              variant="outline"
              size="lg"
              className="border-cream/50 text-cream hover:bg-cream hover:text-ink"
            >
              <Phone className="h-4 w-4" /> {siteConfig.contact.phones[0]}
            </Button>
          </div>
          <div className="mt-8">
            <Button
              href="/contact"
              variant="ghost"
              className="text-cream/80 hover:text-gold-light"
            >
              Book a site visit <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
