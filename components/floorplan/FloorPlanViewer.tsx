"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ZoomIn,
  ZoomOut,
  Maximize,
  Move,
  X,
  ArrowRight,
  CircleSlash,
  CheckCircle2,
  Car,
} from "lucide-react";
import {
  floors,
  basementFloor,
  availableUnits,
  type AvailableUnitDetail,
} from "@/lib/shops";
import { primaryPhoneDigits } from "@/lib/site";
import { cn } from "@/lib/utils";

const allFloors = [basementFloor, ...floors];
const MIN = 1;
const MAX = 4;

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

export function FloorPlanViewer() {
  const [activeId, setActiveId] = useState<string>("upper-ground");
  const [selected, setSelected] = useState<AvailableUnitDetail | null>(null);
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef(1);
  const dragging = useRef<{ x: number; y: number; tx: number; ty: number } | null>(
    null,
  );
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinch = useRef<{ dist: number; startScale: number } | null>(null);

  const active = allFloors.find((f) => f.id === activeId)!;
  const floorUnits = availableUnits.filter((u) => u.floor === activeId);
  const hasAvail = floorUnits.length > 0;
  const isBasement = active.id === "basement-parking";
  const zoomImage = (active as { zoomImage?: string }).zoomImage;
  const canZoom = Boolean(zoomImage);
  const displayImage =
    canZoom && scale > 1 && zoomImage ? zoomImage : active.image;

  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  const reset = useCallback(() => {
    setScale(1);
    setTx(0);
    setTy(0);
  }, []);

  const bounds = useCallback((s: number) => {
    const el = containerRef.current;
    const w = el?.clientWidth ?? 0;
    const h = el?.clientHeight ?? 0;
    return { maxX: ((s - 1) * w) / 2, maxY: ((s - 1) * h) / 2 };
  }, []);

  const zoomTo = useCallback(
    (nextScale: number, fx = 0, fy = 0) => {
      const s2 = clamp(nextScale, MIN, MAX);
      setTx((prevTx) => {
        const nx = fx - ((fx - prevTx) / scaleRef.current) * s2;
        const { maxX } = bounds(s2);
        return clamp(nx, -maxX, maxX);
      });
      setTy((prevTy) => {
        const ny = fy - ((fy - prevTy) / scaleRef.current) * s2;
        const { maxY } = bounds(s2);
        return clamp(ny, -maxY, maxY);
      });
      setScale(s2);
    },
    [bounds],
  );

  // Native, non-passive wheel listener so preventDefault works without console errors.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !canZoom) return;
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || Math.abs(e.deltaY) < 1) return;
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const fx = e.clientX - rect.left - rect.width / 2;
      const fy = e.clientY - rect.top - rect.height / 2;
      zoomTo(scaleRef.current * (1 - e.deltaY * 0.0016), fx, fy);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [zoomTo, canZoom]);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size >= 2) {
      const [a, b] = Array.from(pointers.current.values());
      pinch.current = {
        dist: Math.hypot(a.x - b.x, a.y - b.y),
        startScale: scaleRef.current,
      };
      dragging.current = null;
    } else if (scale > 1) {
      dragging.current = { x: e.clientX, y: e.clientY, tx, ty };
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // Two fingers -> pinch zoom toward the midpoint.
    if (pointers.current.size >= 2 && pinch.current) {
      const [a, b] = Array.from(pointers.current.values());
      const newDist = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinch.current.dist > 0) {
        const el = containerRef.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          const midX = (a.x + b.x) / 2 - rect.left - rect.width / 2;
          const midY = (a.y + b.y) / 2 - rect.top - rect.height / 2;
          zoomTo(
            (pinch.current.startScale * newDist) / pinch.current.dist,
            midX,
            midY,
          );
        }
      }
      return;
    }

    // One finger -> pan (only when zoomed in).
    if (dragging.current) {
      const dx = e.clientX - dragging.current.x;
      const dy = e.clientY - dragging.current.y;
      const { maxX, maxY } = bounds(scale);
      setTx(clamp(dragging.current.tx + dx, -maxX, maxX));
      setTy(clamp(dragging.current.ty + dy, -maxY, maxY));
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinch.current = null;
    if (pointers.current.size === 1 && scale > 1) {
      const p = Array.from(pointers.current.values())[0];
      dragging.current = { x: p.x, y: p.y, tx, ty };
    } else if (pointers.current.size === 0) {
      dragging.current = null;
    }
  };

  const switchFloor = (id: string) => {
    setActiveId(id);
    setSelected(null);
    reset();
  };

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const enquiryHref = selected
    ? `https://wa.me/${primaryPhoneDigits}?text=${encodeURIComponent(
        `Hello, I'm interested in shop ${selected.no} (${selected.floorLabel}, ${selected.area} sq.ft) at Prakash Asian Mall. Please share details.`,
      )}`
    : "#";

  return (
    <>
      {/* Floor tabs */}
      <div className="flex flex-wrap gap-2">
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

      {/* Prominent availability status banner */}
      <div
        className={cn(
          "mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border px-5 py-4",
          hasAvail
            ? "border-gold/40 bg-gold/10"
            : isBasement
              ? "border-brown/15 bg-parchment/50"
              : "border-maroon/25 bg-maroon/5",
        )}
      >
        <div className="flex items-center gap-3">
          {hasAvail ? (
            <CheckCircle2 className="h-6 w-6 shrink-0 text-gold-dark" />
          ) : isBasement ? (
            <Car className="h-6 w-6 shrink-0 text-brown" />
          ) : (
            <CircleSlash className="h-6 w-6 shrink-0 text-maroon" />
          )}
          <div>
            <p className="font-display text-lg text-ink">{active.label}</p>
            <p className="text-sm text-muted">
              {hasAvail
                ? `${floorUnits.length} shop${floorUnits.length > 1 ? "s" : ""} available for booking — tap one below for details.`
                : isBasement
                  ? "Secure car parking, stores and services."
                  : "Every unit on this level is currently Not Available."}
            </p>
          </div>
        </div>
        {!isBasement && (
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider",
              hasAvail ? "bg-gold text-ink" : "bg-maroon text-cream",
            )}
          >
            {hasAvail ? `${floorUnits.length} Available` : "Not Available"}
          </span>
        )}
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        {/* Viewer */}
        <div>
          <div
            ref={containerRef}
            onPointerDown={canZoom ? onPointerDown : undefined}
            onPointerMove={canZoom ? onPointerMove : undefined}
            onPointerUp={canZoom ? onPointerUp : undefined}
            onPointerCancel={canZoom ? onPointerUp : undefined}
            onDoubleClick={
              canZoom ? () => (scale > 1 ? reset() : zoomTo(2)) : undefined
            }
            className={cn(
              "relative aspect-square w-full select-none overflow-hidden rounded-2xl border border-brown/15 bg-white",
              canZoom && "touch-none",
              canZoom
                ? scale > 1
                  ? "cursor-grab active:cursor-grabbing"
                  : "cursor-zoom-in"
                : "cursor-default",
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={displayImage}
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
                  src={displayImage}
                  alt={`${active.label} floor plan — Prakash Asian Mall`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="pointer-events-none object-contain p-4"
                  priority={active.id === "upper-ground"}
                />
              </motion.div>
            </AnimatePresence>

            {canZoom && (
              <>
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

                <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1.5 text-xs font-medium text-cream backdrop-blur-sm">
                  {scale > 1 ? (
                    <>
                      <Move className="h-3.5 w-3.5" /> Drag to pan · scroll to zoom
                    </>
                  ) : (
                    <>
                      <ZoomIn className="h-3.5 w-3.5 text-gold-light" /> Zoom in to see
                      unit details
                    </>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="mt-3">
            <p className="text-sm text-muted">{active.blurb}</p>
            {canZoom && (
              <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark">
                <ZoomIn className="h-4 w-4" /> Zoom in to see individual unit numbers
                and details.
              </p>
            )}
          </div>
        </div>

        {/* Availability panel */}
        <div>
          <div className="rounded-2xl border border-brown/12 bg-parchment/40 p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl text-ink">
                {isBasement ? "This Level" : "Availability"}
              </h3>
              {!isBasement && (
                <div className="flex items-center gap-3 text-xs">
                  <span className="inline-flex items-center gap-1.5 text-gold-dark">
                    <span className="h-2.5 w-2.5 rounded-full bg-gold" /> Available
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-maroon">
                    <span className="h-2.5 w-2.5 rounded-full bg-brown/40" /> Not
                    Available
                  </span>
                </div>
              )}
            </div>

            {hasAvail ? (
              <>
                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {floorUnits.map((unit) => (
                    <li key={unit.no}>
                      <button
                        onClick={() => setSelected(unit)}
                        className="group flex w-full items-center justify-between gap-3 rounded-xl border border-gold/40 bg-white px-4 py-3.5 text-left transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_14px_30px_-18px_rgba(184,134,59,0.8)]"
                      >
                        <div>
                          <span className="flex items-center gap-2">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                            <span className="font-display text-lg text-maroon">
                              {unit.no}
                            </span>
                          </span>
                          <p className="mt-0.5 text-xs text-muted">{unit.area} sq.ft</p>
                        </div>
                        <ArrowRight className="h-4 w-4 shrink-0 text-gold-dark transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-start gap-2 rounded-xl border border-brown/12 bg-white/70 px-4 py-3">
                  <CircleSlash className="mt-0.5 h-4 w-4 shrink-0 text-maroon" />
                  <p className="text-sm text-muted">
                    <span className="font-medium text-brown">Not Available:</span> all
                    other units on this floor are currently sold or occupied.
                  </p>
                </div>
              </>
            ) : isBasement ? (
              <div className="mt-5 rounded-xl border border-brown/12 bg-white px-4 py-8 text-center">
                <Car className="mx-auto h-8 w-8 text-brown/60" />
                <p className="mt-3 font-display text-lg text-ink">
                  Parking & Services
                </p>
                <p className="mt-1 text-sm text-muted">
                  This level is dedicated to secure car parking, stores and services
                  supporting the retail floors above.
                </p>
              </div>
            ) : (
              <div className="mt-5 rounded-xl border border-maroon/20 bg-maroon/5 px-4 py-8 text-center">
                <CircleSlash className="mx-auto h-8 w-8 text-maroon" />
                <p className="mt-3 font-display text-lg text-maroon">Not Available</p>
                <p className="mt-1 text-sm text-muted">
                  There are no units available for booking on this level — every unit
                  here is currently Not Available.
                </p>
              </div>
            )}
          </div>

          {!isBasement && (
            <p className="mt-4 text-xs text-muted">
              Shops are sold separately. Pricing is available on request.
            </p>
          )}
        </div>
      </div>

      {/* Unit details popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-gold/25 bg-cream shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between border-b border-brown/10 bg-parchment/60 px-6 py-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                    {selected.floorLabel} · Available
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-maroon">
                    Shop {selected.no}
                  </h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-brown transition-colors hover:bg-parchment"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6">
                <p className="text-sm text-muted">{selected.note}</p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-brown/10 bg-white px-4 py-3">
                    <p className="text-xs text-muted">Carpet area</p>
                    <p className="mt-0.5 font-display text-xl text-ink">
                      {selected.area} sq.ft
                    </p>
                  </div>
                  <div className="rounded-xl border border-brown/10 bg-white px-4 py-3">
                    <p className="text-xs text-muted">Price</p>
                    <p className="mt-0.5 font-display text-xl text-maroon">On Request</p>
                  </div>
                </div>

                <a
                  href={enquiryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-maroon text-sm font-medium text-cream transition-all hover:bg-maroon-dark"
                >
                  Enquire about Shop {selected.no} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
