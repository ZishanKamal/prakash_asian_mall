import { Maximize2, MapPin, Tag, TrendingUp } from "lucide-react";
import type { Shop } from "@/lib/shops";
import { formatINR, cn } from "@/lib/utils";
import { primaryPhoneDigits } from "@/lib/site";

export function ShopCard({ shop }: { shop: Shop }) {
  const available = shop.status === "available";
  const enquiryHref = `https://wa.me/${primaryPhoneDigits}?text=${encodeURIComponent(
    `Hello, I'm interested in shop ${shop.id} (${shop.floorLabel}, ${shop.area} sq.ft) at Prakash Asian Mall. Please share details.`,
  )}`;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-brown/12 bg-white shadow-[0_2px_20px_-12px_rgba(75,53,36,0.3)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(75,53,36,0.45)]">
      {/* Header band */}
      <div className="relative flex items-center justify-between border-b border-brown/10 bg-parchment/50 px-5 py-4">
        <div>
          <span className="flex items-center gap-2">
            <span className="font-display text-2xl text-maroon">{shop.id}</span>
            {shop.isPremium && (
              <span className="rounded-full bg-gold-light/90 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-ink">
                Premium
              </span>
            )}
          </span>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            {shop.floorLabel}
          </p>
        </div>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
            available
              ? "bg-gold/15 text-gold-dark"
              : "bg-maroon/10 text-maroon",
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              available ? "bg-gold animate-pulse" : "bg-maroon",
            )}
          />
          {available ? "Available" : "Leased"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <dl className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-brown">
            <Maximize2 className="h-4 w-4 text-gold-dark" />
            <div>
              <dt className="sr-only">Carpet area</dt>
              <dd className="font-medium">{shop.area} sq.ft</dd>
            </div>
          </div>
          <div className="flex items-center gap-2 text-brown">
            <MapPin className="h-4 w-4 text-gold-dark" />
            <div>
              <dt className="sr-only">Facing</dt>
              <dd className="font-medium">{shop.facing}</dd>
            </div>
          </div>
        </dl>

        <div className="mt-4 flex items-start gap-2 text-sm text-muted">
          <Tag className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
          <span>
            {available ? "Ideal for" : "Occupied by"}:{" "}
            <span className="text-brown">{shop.suitedFor}</span>
          </span>
        </div>

        {shop.indicativeRent && (
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-parchment/60 px-3 py-2.5 text-sm">
            <TrendingUp className="h-4 w-4 text-gold-dark" />
            <span className="text-muted">
              {available ? "Indicative rent" : "Rental income"}
            </span>
            <span className="ml-auto font-display text-lg text-maroon">
              {formatINR(shop.indicativeRent)}
              <span className="text-xs font-sans text-muted">/mo*</span>
            </span>
          </div>
        )}

        <div className="mt-auto pt-5">
          {available ? (
            <a
              href={enquiryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-maroon text-sm font-medium text-cream transition-all hover:bg-maroon-dark"
            >
              Enquire about {shop.id}
            </a>
          ) : (
            <div className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-brown/15 text-sm font-medium text-muted">
              Currently leased
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
