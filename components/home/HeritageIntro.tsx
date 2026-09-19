import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Ornament } from "@/components/ui/Ornament";
import { Button } from "@/components/ui/Button";
import { heritageHighlights } from "@/lib/content";

export function HeritageIntro() {
  return (
    <section className="relative overflow-hidden bg-parchment-texture py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/25 shadow-[0_30px_80px_-40px_rgba(75,53,36,0.6)]">
              <Image
                src="/home/legacy.png"
                alt="Prakash Asian Mall — rear elevation and central atrium renderings"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-gold/30 bg-cream px-6 py-5 shadow-xl sm:block">
              <p className="font-display text-3xl text-maroon">75 Years</p>
              <p className="text-sm text-muted">of Tiwari family legacy</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
                A Legacy Carved in Stone
              </span>
              <Ornament className="mb-6 justify-start" />
              <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.8rem]">
                Where Gulbarga&apos;s architectural past meets its future
              </h2>
            </Reveal>

            <Reveal delay={1}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Almost a stone&apos;s throw from the historic Gulbarga Fort stood the
                beloved Prakash Talkies for 75 years — the flagship of the Tiwari
                family. Today, that legacy rises again as Prakash Asian Mall: an
                elevation inspired by the fort, wrapped around state-of-the-art
                modern retail.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {heritageHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-brown">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15">
                      <Check className="h-3.5 w-3.5 text-gold-dark" />
                    </span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="/about" variant="primary">
                  Discover the Story <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/gallery" variant="outline">
                  View Gallery
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
