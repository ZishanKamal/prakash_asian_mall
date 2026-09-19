# Prakash Asian Mall — Website

Marketing & sales website for **Prakash Asian Mall**, a heritage commercial shopping
complex on Fort Road, Gulbarga (Kalaburagi), Karnataka. Built to showcase the mall and
sell/lease its commercial shops to investors.

Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**.
Fully static, SEO-friendly, mobile-first and ready for Vercel or Netlify.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, amenities, why-invest & document tabs, featured shops, floor plans, gallery |
| `/about` | Heritage story, About Gulbarga, About Asian Builders |
| `/owner` | Know the owner — Vishal Vinod Tiwari |
| `/floor-plans` | Interactive, zoomable floor plans (4 levels) with shop details |
| `/shops` | Filterable shops — available for booking & leased (rental revenue) |
| `/gallery` | Architectural renderings with lightbox |
| `/invest` | Why invest, rental-yield calculator, property documents, pre-approved loans |
| `/contact` | Contact details, Google Map, enquiry form |

## Where to edit content

- **Site details, contact, nav** — `lib/site.ts`
- **Amenities, about text, owner bio, invest reasons, documents** — `lib/content.ts`
- **Shop inventory (available/leased, sizes, rents)** — `lib/shops.ts`
- **Gallery captions** — `lib/gallery.ts`
- **Brand colors & fonts** — `app/globals.css` + `app/layout.tsx`
- **Images / brochure** — `public/` (gallery, layouts, owner.png, brand/cover.png,
  prakash-asian-mall-brochure.pdf)

Enquiries (contact form, shop "Enquire" buttons, floating button) open **WhatsApp** with a
pre-filled message to the primary number — no backend or API keys required. To route to
email/CRM instead, replace the WhatsApp deep links in
`components/contact/ContactForm.tsx` and `components/shops/ShopCard.tsx`.

## Before going live

1. Set the real domain in `siteConfig.url` (`lib/site.ts`) — used by metadata, sitemap,
   robots and JSON-LD.
2. Confirm the map coordinates / `mapsQuery` in `lib/site.ts`.
3. Replace placeholder shop pricing/rental figures with real data in `lib/shops.ts`.

## Deploy

**Vercel:** import the repo — framework auto-detected, no config needed.

**Netlify:** connect the repo (Netlify auto-detects Next.js via its Next runtime). Build
command `npm run build`.

## SEO

Per-page metadata & Open Graph, `ShoppingCenter` + `BreadcrumbList` + `Person` JSON-LD,
`app/sitemap.ts`, `app/robots.ts`, semantic headings and static prerendering of all routes.
