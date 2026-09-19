"use client";

import { useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import { formatINR } from "@/lib/utils";

export function YieldCalculator() {
  const [investment, setInvestment] = useState(5000000);
  const [monthlyRent, setMonthlyRent] = useState(35000);

  const annualRent = monthlyRent * 12;
  const grossYield = investment > 0 ? (annualRent / investment) * 100 : 0;
  const inBand = grossYield >= 6 && grossYield <= 10;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-gold/25 bg-white shadow-[0_30px_80px_-45px_rgba(75,53,36,0.6)]">
      <div className="flex items-center gap-3 border-b border-brown/10 bg-parchment/50 px-7 py-5">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-maroon text-cream">
          <Calculator className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display text-xl text-ink">Rental Yield Calculator</h3>
          <p className="text-xs text-muted">Estimate your returns in seconds</p>
        </div>
      </div>

      <div className="grid gap-8 p-7 sm:grid-cols-2">
        <div className="space-y-7">
          <label className="block">
            <span className="text-sm font-medium text-brown">
              Investment amount
            </span>
            <span className="mt-1 block font-display text-2xl text-maroon">
              {formatINR(investment)}
            </span>
            <input
              type="range"
              min={2000000}
              max={20000000}
              step={100000}
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="mt-3 w-full accent-gold"
              aria-label="Investment amount"
            />
            <span className="mt-1 flex justify-between text-xs text-muted">
              <span>₹20 L</span>
              <span>₹2 Cr</span>
            </span>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-brown">
              Expected monthly rent
            </span>
            <span className="mt-1 block font-display text-2xl text-maroon">
              {formatINR(monthlyRent)}
            </span>
            <input
              type="range"
              min={15000}
              max={150000}
              step={1000}
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(Number(e.target.value))}
              className="mt-3 w-full accent-gold"
              aria-label="Expected monthly rent"
            />
            <span className="mt-1 flex justify-between text-xs text-muted">
              <span>₹15 K</span>
              <span>₹1.5 L</span>
            </span>
          </label>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-maroon to-maroon-dark p-7 text-cream">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-light">
            <TrendingUp className="h-4 w-4" /> Gross rental yield
          </span>
          <p className="mt-2 font-display text-5xl">{grossYield.toFixed(1)}%</p>
          <p className="mt-1 text-sm text-cream/70">
            {inBand
              ? "Right within the typical 6–10% commercial band."
              : grossYield > 10
                ? "Above the typical commercial band — strong potential."
                : "Adjust the figures to explore the 6–10% band."}
          </p>
          <dl className="mt-6 space-y-2 border-t border-cream/15 pt-5 text-sm">
            <div className="flex justify-between">
              <dt className="text-cream/70">Annual rental income</dt>
              <dd className="font-medium">{formatINR(annualRent)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-cream/70">Monthly income</dt>
              <dd className="font-medium">{formatINR(monthlyRent)}</dd>
            </div>
          </dl>
        </div>
      </div>
      <p className="px-7 pb-6 text-xs text-muted">
        Illustrative only. Actual returns depend on unit, tenant and market
        conditions. Not financial advice.
      </p>
    </div>
  );
}
