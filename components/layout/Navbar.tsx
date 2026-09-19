"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Download } from "lucide-react";
import { navLinks, siteConfig, primaryPhoneDigits } from "@/lib/site";
import { Wordmark } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Solid = opaque cream navbar (scrolled or mobile menu open); otherwise transparent over a dark header.
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-gold/15 bg-cream/90 backdrop-blur-md shadow-[0_8px_30px_-20px_rgba(75,53,36,0.6)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      {!solid && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/55 via-ink/25 to-transparent"
        />
      )}
      <Container className="relative flex h-18 items-center justify-between py-3">
        <Wordmark tone={solid ? "dark" : "light"} className="shrink-0" />

        <nav className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors",
                  solid
                    ? active
                      ? "text-maroon"
                      : "text-brown/80 hover:text-maroon"
                    : active
                      ? "text-cream"
                      : "text-cream/85 hover:text-white",
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 xl:flex">
          <a
            href={`tel:+${primaryPhoneDigits}`}
            className={cn(
              "inline-flex items-center gap-2 text-sm font-medium transition-colors",
              solid
                ? "text-brown hover:text-maroon"
                : "text-cream/90 hover:text-white",
            )}
          >
            <Phone className="h-4 w-4" />
            <span className="sr-only">Call {siteConfig.contact.phones[0]}</span>
          </a>
          <a
            href={siteConfig.brochurePath}
            download
            className="inline-flex h-10 items-center gap-2 rounded-full bg-maroon px-5 text-sm font-medium text-cream transition-all hover:-translate-y-0.5 hover:bg-maroon-dark"
          >
            <Download className="h-4 w-4" />
            Brochure
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors xl:hidden",
            solid
              ? "text-brown hover:bg-parchment"
              : "text-cream hover:bg-white/10",
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-gold/15 bg-cream xl:hidden"
          >
            <Container className="flex flex-col gap-1 py-5">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      active
                        ? "bg-parchment text-maroon"
                        : "text-brown hover:bg-parchment/60",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-3 flex flex-col gap-3">
                <a
                  href={`tel:+${primaryPhoneDigits}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gold/50 text-brown"
                >
                  <Phone className="h-4 w-4" /> {siteConfig.contact.phones[0]}
                </a>
                <a
                  href={siteConfig.brochurePath}
                  download
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-maroon text-cream"
                >
                  <Download className="h-4 w-4" /> Download Brochure
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
