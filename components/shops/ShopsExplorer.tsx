"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { shops, floors, type FloorId } from "@/lib/shops";
import { ShopCard } from "@/components/shops/ShopCard";
import { cn } from "@/lib/utils";

type StatusFilter = "all" | "available" | "leased";
type FloorFilter = "all" | FloorId;

const statusOptions: { id: StatusFilter; label: string }[] = [
  { id: "all", label: "All Shops" },
  { id: "available", label: "Available for Booking" },
  { id: "leased", label: "Leased · Rental Revenue" },
];

export function ShopsExplorer() {
  const [status, setStatus] = useState<StatusFilter>("all");
  const [floor, setFloor] = useState<FloorFilter>("all");

  const filtered = useMemo(
    () =>
      shops.filter(
        (s) =>
          (status === "all" || s.status === status) &&
          (floor === "all" || s.floor === floor),
      ),
    [status, floor],
  );

  const floorOptions: { id: FloorFilter; label: string }[] = [
    { id: "all", label: "All Floors" },
    ...floors.map((f) => ({ id: f.id as FloorFilter, label: f.label })),
  ];

  return (
    <div>
      {/* Status segmented control */}
      <div className="flex flex-col gap-4">
        <div className="inline-flex flex-wrap gap-1.5 self-start rounded-full border border-brown/12 bg-parchment/50 p-1.5">
          {statusOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setStatus(opt.id)}
              className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
            >
              {status === opt.id && (
                <motion.span
                  layoutId="shop-status"
                  className="absolute inset-0 rounded-full bg-maroon"
                  transition={{ type: "spring", stiffness: 340, damping: 30 }}
                />
              )}
              <span
                className={
                  status === opt.id
                    ? "relative text-cream"
                    : "relative text-brown hover:text-maroon"
                }
              >
                {opt.label}
              </span>
            </button>
          ))}
        </div>

        {/* Floor filter */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
            <SlidersHorizontal className="h-3.5 w-3.5" /> Floor
          </span>
          {floorOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFloor(opt.id)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm transition-all",
                floor === opt.id
                  ? "bg-gold text-ink"
                  : "border border-brown/15 text-brown hover:border-gold/50",
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-muted">
        Showing <span className="font-semibold text-brown">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "unit" : "units"}
      </p>

      <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((shop) => (
            <motion.div
              key={shop.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <ShopCard shop={shop} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-dashed border-brown/20 py-16 text-center">
          <p className="text-muted">
            No shops match this selection. Try a different floor or status.
          </p>
        </div>
      )}
    </div>
  );
}
