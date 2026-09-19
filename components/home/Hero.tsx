"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

const heroStats = [
  { value: "95,000", unit: "sq. ft", label: "Landmark development" },
  { value: "3", unit: "floors", label: "Of premium retail" },
  { value: "6–10%", unit: "yield", label: "Average rental returns" },
  { value: "24×7", unit: "backup", label: "Power to every shop" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background render — dedicated hero image (swap /public/hero/hero-background.png to change) */}
      <div className="absolute inset-0">
        <Image
          src="/hero/hero-background.png"
          alt="Prakash Asian Mall — heritage fort-inspired architecture on Fort Road, Gulbarga"
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-brown/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </div>

      <Container className="relative z-10 pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-ink/30 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-light" />
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-cream/90">
              Fort Road · Gulbarga · Now Open for Booking
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.08 }}
            className="font-display text-4xl font-medium leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
          >
            Experience the{" "}
            <span className="font-serif italic text-gold-light">Heritage</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.18 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85 sm:text-xl"
          >
            Own a piece of heritage. Premium commercial shops at Gulbarga&apos;s
            grandest fort-inspired mall — where the Bahmani era meets state-of-the-art
            retail infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/shops" variant="secondary" size="lg">
              Explore Available Shops <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={siteConfig.brochurePath} variant="primary" size="lg" external download>
              <Download className="h-4 w-4" /> Download Brochure
            </Button>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
          className="mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream/15 bg-cream/10 backdrop-blur-md sm:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-ink/20 px-5 py-5">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="font-display text-2xl text-cream sm:text-3xl">
                  {stat.value}
                </span>
                <span className="ml-1 text-sm text-gold-light">{stat.unit}</span>
                <p className="mt-1 text-xs text-cream/60">{stat.label}</p>
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/70"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </section>
  );
}
