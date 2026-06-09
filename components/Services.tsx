"use client";

import Reveal from "./Reveal";
import { useT } from "@/lib/translations";

const icons = [
  <path key="0" d="M3 21V9l9-6 9 6v12h-6v-7H9v7H3Z" />,
  <path key="1" d="M4 21V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16M4 21h16M9 21v-6h6v6M8 8h.01M16 8h.01M8 12h.01M16 12h.01" />,
  <path key="2" d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M9 11h.01M15 11h.01" />,
  <path key="3" d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  <path key="4" d="M12 2a5 5 0 0 0-5 5v3l-2 4h14l-2-4V7a5 5 0 0 0-5-5ZM9 18a3 3 0 0 0 6 0" />,
  <path key="5" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />,
];

export default function Services() {
  const t = useT();
  const services = t.services.items.map(([title, desc], i) => ({ title, desc, icon: icons[i] }));
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <Reveal className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="eyebrow">{t.services.eyebrow}</span>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-4xl font-light leading-tight text-cream sm:text-5xl md:text-6xl">
              {t.services.titlePre}
              <span className="text-gold-gradient italic">{t.services.titleEm}</span>
              {t.services.titlePost}
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-sm border border-gold/15 bg-gold/15 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <div className="group relative h-full bg-charcoal p-8 transition-colors duration-500 hover:bg-graphite">
                <span className="mb-6 grid h-14 w-14 place-items-center rounded-full border border-gold/30 text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-onyx">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </span>
                <h3 className="font-display text-2xl text-cream">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-stone">{s.desc}</p>
                <span className="mt-6 inline-block text-3xl font-light text-gold/20 transition-colors duration-500 group-hover:text-gold/50">
                  0{i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
