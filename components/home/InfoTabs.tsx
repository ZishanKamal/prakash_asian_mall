"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Building,
  PieChart,
  ShieldCheck,
  FileCheck2,
  Landmark,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { investReasons, propertyDocuments } from "@/lib/content";

const reasonIcons = [TrendingUp, Building, PieChart, ShieldCheck];

const tabs = [
  { id: "invest", label: "Why Invest in Commercial Space" },
  { id: "documents", label: "Important Property Documents" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function InfoTabs() {
  const [active, setActive] = useState<TabId>("invest");

  return (
    <section className="relative overflow-hidden bg-brown py-24 text-cream sm:py-32">
      <div className="absolute inset-0 bg-parchment-texture opacity-[0.04]" aria-hidden />
      <Container className="relative">
        <SectionHeading
          eyebrow="A Sound Investment"
          title="Own a piece of heritage — and a smart asset"
          description="Commercial real estate is one of the most resilient, income-generating asset classes. Here's why Prakash Asian Mall makes sense."
          tone="light"
        />

        {/* Tab switcher */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-cream/15 bg-ink/20 p-1.5 backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
              >
                {active === tab.id && (
                  <motion.span
                    layoutId="info-tab"
                    className="absolute inset-0 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 340, damping: 30 }}
                  />
                )}
                <span
                  className={
                    active === tab.id
                      ? "relative text-ink"
                      : "relative text-cream/75 hover:text-cream"
                  }
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 min-h-[22rem]">
          <AnimatePresence mode="wait">
            {active === "invest" ? (
              <motion.div
                key="invest"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
              >
                {investReasons.map((reason, i) => {
                  const Icon = reasonIcons[i];
                  return (
                    <div
                      key={reason.title}
                      className="rounded-2xl border border-cream/12 bg-cream/5 p-6 backdrop-blur-sm transition-colors hover:border-gold/40"
                    >
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-light">
                        <Icon className="h-6 w-6" />
                      </span>
                      {reason.stat && (
                        <p className="mt-4 font-display text-3xl text-gold-light">
                          {reason.stat}
                        </p>
                      )}
                      <h3 className="mt-1 font-display text-lg text-cream">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream/70">
                        {reason.description}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="documents"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-8 lg:grid-cols-[1.3fr_1fr]"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {propertyDocuments.map((doc) => (
                    <div
                      key={doc}
                      className="flex items-center gap-3 rounded-xl border border-cream/12 bg-cream/5 px-5 py-4 backdrop-blur-sm"
                    >
                      <FileCheck2 className="h-5 w-5 shrink-0 text-gold-light" />
                      <span className="text-sm text-cream/90">{doc}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/20 to-maroon/20 p-8">
                  <Landmark className="h-10 w-10 text-gold-light" />
                  <h3 className="mt-4 font-display text-2xl text-cream">
                    Pre-Approved Bank Loans
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/80">
                    Financing is made simple — Prakash Asian Mall is pre-approved by
                    leading banks, so your purchase is backed by clear title and ready
                    documentation.
                  </p>
                  <Link
                    href="/invest"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-light transition-colors hover:text-cream"
                  >
                    View all documents <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
