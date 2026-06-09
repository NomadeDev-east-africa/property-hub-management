"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { properties, type Category } from "@/lib/properties";
import { useLang, tr } from "@/lib/i18n";
import { useT } from "@/lib/translations";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

function Spec({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <span className="flex items-center gap-1.5 text-sm text-cream/70">
      <span className="text-gold">{icon}</span>
      {value}
    </span>
  );
}

export default function Properties() {
  const t = useT();
  const { lang } = useLang();
  const filters = t.properties.filters.map((f) => ({
    key: f.key as Category | "all",
    label: f.label,
  }));
  const [active, setActive] = useState<Category | "all">("all");
  const [gallery, setGallery] = useState<string[]>([]);
  const [index, setIndex] = useState<number | null>(null);

  const list = active === "all" ? properties : properties.filter((p) => p.category === active);

  const openGallery = (images: string[]) => {
    setGallery(images);
    setIndex(0);
  };

  return (
    <section id="properties" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <span className="eyebrow">{t.properties.eyebrow}</span>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-4xl font-light leading-tight text-cream sm:text-5xl md:text-6xl">
                {t.properties.titlePre}
                <span className="text-gold-gradient italic">{t.properties.titleEm}</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  className={clsx(
                    "rounded-full border px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-400",
                    active === f.key
                      ? "border-gold bg-gold text-onyx"
                      : "border-gold/25 text-cream/70 hover:border-gold/60 hover:text-cream"
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group card-glow relative overflow-hidden rounded-sm border border-gold/15 bg-charcoal"
              >
                <button
                  onClick={() => openGallery(p.gallery)}
                  className="relative block aspect-[4/3] w-full overflow-hidden"
                  aria-label={`${t.properties.viewGallery} — ${tr(p.name, lang)}`}
                >
                  <Image
                    src={p.cover}
                    alt={tr(p.name, lang)}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-onyx/70 px-3 py-1 text-xs font-medium tracking-wide text-gold backdrop-blur">
                    {tr(p.categoryLabel, lang)}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full border border-gold/30 bg-onyx/60 px-3 py-1 text-xs tracking-wide text-cream/85 backdrop-blur">
                    {tr(p.status, lang)}
                  </span>
                  <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-gold px-3 py-1.5 text-xs font-semibold text-onyx opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {t.properties.viewGallery}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </button>

                <div className="p-6">
                  <p className="flex items-center gap-1.5 text-xs tracking-wide text-stone">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11Z" />
                      <circle cx="12" cy="10" r="2.4" />
                    </svg>
                    {tr(p.location, lang)}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-snug text-cream">{tr(p.name, lang)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone line-clamp-2">{tr(p.description, lang)}</p>

                  <div className="mt-5 flex items-center gap-5 border-t border-gold/10 pt-5">
                    <Spec
                      icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 12V7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5M3 12h18M3 12v6m18-6v6M6 12V9h5v3" /></svg>}
                      value={`${p.beds} ${t.properties.bedsSuffix}`}
                    />
                    <Spec
                      icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3ZM7 12V6a2 2 0 0 1 4 0" /></svg>}
                      value={`${p.baths} ${t.properties.bathsSuffix}`}
                    />
                    <Spec
                      icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 3h7v7H3zM14 14h7v7h-7zM21 3l-7 7M3 21l7-7" /></svg>}
                      value={`${p.surface} m²`}
                    />
                  </div>

                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <span className="font-display text-xl text-gold-gradient">{tr(p.price, lang)}</span>
                      <p className="text-[0.7rem] tracking-wide text-stone">{tr(p.priceNote, lang)}</p>
                    </div>
                    <a
                      href="#contact"
                      className="text-sm font-medium text-gold transition hover:text-gold-light"
                    >
                      {t.properties.ask}
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox images={gallery} index={index} onClose={() => setIndex(null)} onNavigate={setIndex} />
    </section>
  );
}
