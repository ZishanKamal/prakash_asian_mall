import type { Metadata } from "next";
import { Phone, Mail, MapPin, Globe, Clock, Navigation } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Book a Site Visit",
  description:
    "Contact Prakash Asian Mall on Fort Road, Gulbarga. Speak with Vishal Vinod Tiwari, Co-Proprietor, to book a site visit or enquire about available commercial shops.",
  alternates: { canonical: "/contact" },
};

const mapSrc = `https://www.google.com/maps?q=${siteConfig.location.mapsQuery}&output=embed`;
const directionsHref = `https://www.google.com/maps/search/?api=1&query=${siteConfig.location.mapsQuery}`;

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <PageHeader
        eyebrow="Contact Us"
        title="Let's find your space"
        description="Bookings are open now. Reach out to our team for availability, pricing and site visits."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className="bg-cream py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            {/* Details */}
            <div>
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
                  Get in touch
                </span>
                <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
                  {siteConfig.contact.contactPerson}
                </h2>
                <p className="mt-1 text-sm text-maroon">
                  {siteConfig.contact.contactRole}
                </p>
              </Reveal>

              <Reveal delay={1}>
                <ul className="mt-8 space-y-4">
                  <ContactRow icon={Phone} label="Call us">
                    <div className="flex flex-col">
                      {siteConfig.contact.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s/g, "")}`}
                          className="transition-colors hover:text-maroon"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </ContactRow>
                  <ContactRow icon={Mail} label="Email">
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="transition-colors hover:text-maroon"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </ContactRow>
                  <ContactRow icon={Globe} label="Website">
                    <span>{siteConfig.contact.website}</span>
                  </ContactRow>
                  <ContactRow icon={MapPin} label="Mall address">
                    <span>{siteConfig.contact.mallAddress}</span>
                  </ContactRow>
                  <ContactRow icon={Clock} label="Landmarks">
                    <span>
                      Near {siteConfig.location.landmarks.join(", ")}
                    </span>
                  </ContactRow>
                </ul>
              </Reveal>

              <Reveal delay={2}>
                <div className="mt-8 overflow-hidden rounded-2xl border border-brown/12">
                  <iframe
                    title="Prakash Asian Mall location map"
                    src={mapSrc}
                    width="100%"
                    height="280"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block w-full"
                  />
                  <a
                    href={directionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-parchment/60 py-3 text-sm font-medium text-brown transition-colors hover:bg-parchment"
                  >
                    <Navigation className="h-4 w-4" /> Get directions
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4 rounded-2xl border border-brown/10 bg-parchment/30 p-4">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-gold-dark">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          {label}
        </p>
        <div className="mt-0.5 text-brown">{children}</div>
      </div>
    </li>
  );
}
