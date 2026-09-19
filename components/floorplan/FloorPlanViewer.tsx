"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, ZoomOut, Maximize, Move } from "lucide-react";
import { floors, basementFloor, shops, type FloorId } from "@/lib/shops";
import { cn } from "@/lib/utils";

const allFloors = [basementFloor, ...floors];
const MIN = 1;
const MAX = 4;

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

export function FloorPlanViewer() {
  const [activeId, setActiveId] = useState<string>("upper-ground");
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef<{ x: number; y: number; tx: number; ty: number } | null>(
    null,
  );

  const active = allFloors.find((f) => f.id === activeId)!;
  const floorShops = shops.filter((s) => s.floor === (activeId as FloorId));

  const reset = useCallback(() => {
    setScale(1);
    setTx(0);
    setTy(0);
  }, []);

  const bounds = useCallback(
    (s: number) => {
      const el = containerRef.current;
      const w = el?.clientWidth ?? 0;
      const h = el?.clientHeight ?? 0;
      return { maxX: ((s - 1) * w) / 2, maxY: ((s - 1) * h) / 2 };
    },
    [],
  );

  const zoomTo = useCallback(
    (nextScale: number, fx = 0, fy = 0) => {
      const s2 = clamp(nextScale, MIN, MAX);
      setTx((prevTx) => {
        const nx = fx - ((fx - prevTx) / scale) * s2;
        const { maxX } = bounds(s2);
        return clamp(nx, -maxX, maxX);
      });
      setTy((prevTy) => {
        const ny = fy - ((fy - prevTy) / scale) * s2;
        const { maxY } = bounds(s2);
        return clamp(ny, -maxY, maxY);
      });
      setScale(s2);
    },
    [scale, bounds],
  );

  const onWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || Math.abs(e.deltaY) < 1) return;
    e.preventDefault();
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const fx = e.clientX - rect.left - rect.width / 2;
    const fy = e.clientY - rect.top - rect.height / 2;
    zoomTo(scale * (1 - e.deltaY * 0.0016), fx, fy);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (scale <= 1) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragging.current = { x: e.clientX, y: e.clientY, tx, ty };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - dragging.current.x;
    const dy = e.clientY - dragging.current.y;
    const { maxX, maxY } = bounds(scale);
    setTx(clamp(dragging.current.tx + dx, -maxX, maxX));
    setTy(clamp(dragging.current.ty + dy, -maxY, maxY));
  };

  const onPointerUp = () => {
    dragging.current = null;
  };

  const switchFloor = (id: string) => {
    setActiveId(id);
    reset();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
      {/* Viewer */}
      <div>
        {/* Floor tabs */}
        <div className="mb-4 flex flex-wrap gap-2">
          {allFloors.map((floor) => (
            <button
              key={floor.id}
              onClick={() => switchFloor(floor.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                activeId === floor.id
                  ? "bg-maroon text-cream shadow-[0_8px_20px_-10px_rgba(122,31,43,0.8)]"
                  : "border border-brown/15 bg-white text-brown hover:border-gold/50",
              )}
            >
              {floor.label}
            </button>
          ))}
        </div>

        <div
          ref={containerRef}
          onWheel={onWheel}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          onDoubleClick={() => (scale > 1 ? reset() : zoomTo(2))}
          className={cn(
            "relative aspect-square w-full touch-none select-none overflow-hidden rounded-2xl border border-brown/15 bg-white",
            scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in",
          )}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 will-change-transform"
              style={{
                transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
              }}
            >
              <Image
                src={active.image}
                alt={`${active.label} floor plan — Prakash Asian Mall`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="pointer-events-none object-contain p-4"
                priority={active.id === "upper-ground"}
              />
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-1.5 rounded-full border border-brown/12 bg-cream/90 p-1.5 shadow-lg backdrop-blur-sm">
            <button
              onClick={() => zoomTo(scale + 0.6)}
              aria-label="Zoom in"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-brown transition-colors hover:bg-parchment"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
            <button
              onClick={() => zoomTo(scale - 0.6)}
              aria-label="Zoom out"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-brown transition-colors hover:bg-parchment"
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            <button
              onClick={reset}
              aria-label="Reset view"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-brown transition-colors hover:bg-parchment"
            >
              <Maximize className="h-4 w-4" />
            </button>
          </div>

          <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1.5 text-xs text-cream backdrop-blur-sm">
            <Move className="h-3 w-3" /> Scroll / pinch to zoom · drag to pan
          </div>
        </div>

        <p className="mt-3 text-sm text-muted">{active.blurb}</p>
      </div>

      {/* Shop list */}
      <div>
        <div className="rounded-2xl border border-brown/12 bg-parchment/40 p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl text-ink">{active.label}</h3>
            <div className="flex items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 text-gold-dark">
                <span className="h-2 w-2 rounded-full bg-gold" /> Available
              </span>
              <span className="inline-flex items-center gap-1.5 text-maroon">
                <span className="h-2 w-2 rounded-full bg-maroon" /> Leased
              </span>
            </div>
          </div>

          {floorShops.length > 0 ? (
            <ul className="mt-5 max-h-[26rem] space-y-2 overflow-y-auto pr-1">
              {floorShops.map((shop) => (
                <li
                  key={shop.id}
                  className="flex items-center justify-between rounded-xl border border-brown/10 bg-white px-4 py-3"
                >
                  <div>
                    <span className="flex items-center gap-2">
                      <span className="font-display text-lg text-maroon">
                        {shop.id}
                      </span>
                      <span
                        className={cn(
                          "h-2 w-2 rounded-full",
                          shop.status === "available" ? "bg-gold" : "bg-maroon",
                        )}
                      />
                    </span>
                    <p className="text-xs text-muted">
                      {shop.area} sq.ft · {shop.facing}
                    </p>
                  </div>
                  <span className="text-right text-xs text-muted">
                    {shop.suitedFor}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 text-sm text-muted">
              This level is dedicated to secure car parking, stores and services —
              supporting the retail floors above.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
