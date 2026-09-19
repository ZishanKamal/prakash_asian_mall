"use client";

import { useState } from "react";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { primaryPhoneDigits, siteConfig } from "@/lib/site";

const interests = [
  "Available shop enquiry",
  "Investment & rental returns",
  "Site visit booking",
  "Brochure request",
  "Other",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: interests[0],
    message: "",
  });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `New enquiry — Prakash Asian Mall`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Interest: ${form.interest}`,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${primaryPhoneDigits}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2rem] border border-gold/25 bg-white p-12 text-center shadow-[0_30px_80px_-45px_rgba(75,53,36,0.6)]">
        <CheckCircle2 className="h-14 w-14 text-gold-dark" />
        <h3 className="mt-5 font-display text-2xl text-ink">Thank you!</h3>
        <p className="mt-2 max-w-sm text-muted">
          Your enquiry has been prepared in WhatsApp. If it didn&apos;t open, reach us
          directly at{" "}
          <a
            href={`tel:+${primaryPhoneDigits}`}
            className="font-medium text-maroon underline"
          >
            {siteConfig.contact.phones[0]}
          </a>
          .
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-gold-dark hover:text-maroon"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-brown/12 bg-white p-7 shadow-[0_30px_80px_-50px_rgba(75,53,36,0.6)] sm:p-9"
    >
      <h3 className="font-display text-2xl text-ink">Send us an enquiry</h3>
      <p className="mt-1 text-sm text-muted">
        Fill in your details and we&apos;ll get right back to you.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required>
          <input
            required
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className="form-input"
          />
        </Field>
        <Field label="Phone number" required>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+91 …"
            className="form-input"
          />
        </Field>
        <Field label="Email">
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className="form-input"
          />
        </Field>
        <Field label="I'm interested in">
          <select value={form.interest} onChange={update("interest")} className="form-input">
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message">
          <textarea
            value={form.message}
            onChange={update("message")}
            rows={4}
            placeholder="Tell us what you're looking for — floor, size, budget…"
            className="form-input resize-none"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-maroon text-sm font-medium text-cream transition-all hover:-translate-y-0.5 hover:bg-maroon-dark sm:w-auto sm:px-8"
      >
        <Send className="h-4 w-4" /> Send Enquiry
      </button>
      <p className="mt-4 flex items-center gap-1.5 text-xs text-muted">
        <MessageCircle className="h-3.5 w-3.5" /> Submitting opens WhatsApp with your
        details pre-filled — no data is stored on this site.
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-brown">
        {label}
        {required && <span className="text-maroon"> *</span>}
      </span>
      {children}
    </label>
  );
}
