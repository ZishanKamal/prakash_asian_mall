import Link from "next/link";
import { Phone, Mail, MapPin, Download, ExternalLink } from "lucide-react";
import { navLinks, siteConfig, primaryPhoneDigits } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/Logo";
import { Ornament } from "@/components/ui/Ornament";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-brown text-cream/80">
      <div className="absolute inset-x-0 top-0 h-px keyline" aria-hidden />
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Wordmark tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
              A landmark heritage commercial destination on Fort Road, Gulbarga.
              Own a piece of heritage — premium retail shops now open for booking.
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-gold-light">
              {siteConfig.partnership}
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg text-cream">Explore</h3>
            <Ornament className="mt-3 mb-5 justify-start" tone="cream" />
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-cream">Get in Touch</h3>
            <Ornament className="mt-3 mb-5 justify-start" tone="cream" />
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                <span>{siteConfig.contact.mallAddress}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                <span className="flex flex-col">
                  {siteConfig.contact.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="transition-colors hover:text-gold-light"
                    >
                      {p}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            <a
              href={siteConfig.brochurePath}
              download
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-gold px-5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-gold-light"
            >
              <Download className="h-4 w-4" /> Download Brochure
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-8 text-xs text-cream/55 sm:flex-row">
          <p>© {year} Prakash Asian Mall. All rights reserved.</p>
          <a
            href={`tel:+${primaryPhoneDigits}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-light"
          >
            Bookings open now <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <p className="mt-6 text-[0.7rem] leading-relaxed text-cream/40">
          Disclaimer: This website is purely conceptual and does not constitute a legal
          offering. The promoters reserve the right to add, alter or modify any terms,
          specifications, amenities, consultants or plans indicated herein. Images are
          artistic representations. Conditions apply.
        </p>
      </Container>
    </footer>
  );
}
