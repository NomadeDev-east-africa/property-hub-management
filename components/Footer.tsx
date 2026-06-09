"use client";

import Image from "next/image";
import { useT } from "@/lib/translations";

export default function Footer() {
  const t = useT();
  const cols = [
    { title: t.footer.explore, links: t.footer.exploreLinks },
    { title: t.footer.servicesTitle, links: t.footer.servicesLinks },
  ];
  return (
    <footer className="relative border-t border-gold/15 bg-onyx pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-gold/30">
                <Image src="/images/logo.jpg" alt="Property Hub Management" fill className="object-cover" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl tracking-[0.15em] text-cream">PROPERTY HUB</span>
                <span className="text-[0.6rem] tracking-[0.45em] text-gold">MANAGEMENT</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs leading-relaxed text-stone">
              {t.footer.tagline}
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-stone transition hover:text-cream">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">{t.footer.contactTitle}</h4>
            <address className="space-y-3 not-italic text-stone">
              <p>Horizon Residence, Héron<br />Djibouti</p>
              <a href="tel:+25377100909" className="block transition hover:text-cream">+253 77 10 09 09</a>
              <a href="tel:+25321513333" className="block transition hover:text-cream">+253 21 51 33 33</a>
              <a
                href="https://wa.me/25377100909"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-gold transition hover:text-gold-light"
              >
                WhatsApp →
              </a>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gold/10 py-7 text-sm text-stone sm:flex-row">
          <p>© {new Date().getFullYear()} Property Hub Management. {t.footer.rights}</p>
          <p className="flex items-center gap-2">
            {t.footer.partner}
            <span className="text-cream/70">Sky Construction · Wadan City</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
