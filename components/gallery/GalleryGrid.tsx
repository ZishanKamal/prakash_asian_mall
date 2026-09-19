"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryImages } from "@/lib/gallery";
import { cn } from "@/lib/utils";

/** Layout weighting to build an editorial masonry-style grid. */
const spans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "",
  "sm:col-span-2",
  "",
];

export function GalleryGrid({ limit }: { limit?: number }) {
  const images = limit ? galleryImages.slice(0, limit) : galleryImages;
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  return (
    <>
      <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, i) => (
          <button
            key={image.src}
            onClick={() => setIndex(i)}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-brown/12 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
              !limit && spans[i % spans.length],
            )}
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <div>
                <h3 className="font-display text-lg text-cream">{image.title}</h3>
                <p className="mt-0.5 line-clamp-1 text-xs text-cream/75">
                  {image.caption}
                </p>
              </div>
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream/20 text-cream backdrop-blur-sm transition-colors group-hover:bg-gold group-hover:text-ink">
                <ZoomIn className="h-4 w-4" />
              </span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/25"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/25 sm:left-8"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/25 sm:right-8"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.figure
              key={images[index].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative flex max-h-[85vh] w-full max-w-5xl flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src={images[index].src}
                  alt={images[index].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-4 text-center">
                <h3 className="font-display text-xl text-cream">
                  {images[index].title}
                </h3>
                <p className="mt-1 text-sm text-cream/70">{images[index].caption}</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
