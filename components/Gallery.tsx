"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/lib/properties";
import { useLang, tr } from "@/lib/i18n";
import { useT } from "@/lib/translations";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

export default function Gallery() {
  const t = useT();
  const { lang } = useLang();
  const [index, setIndex] = useState<number | null>(null);
  const srcs = galleryImages.map((g) => g.src);

  return (
    <section id="gallery" className="relative bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <Reveal className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="eyebrow">{t.gallery.eyebrow}</span>
            <span className="h-px w-12 bg-gold" />
          </Reveal>
          <Reveal>
            <h2 className="font-display text-4xl font-light leading-tight text-cream sm:text-5xl md:text-6xl">
              {t.gallery.titlePre}
              <span className="text-gold-gradient italic">{t.gallery.titleEm}</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-5 max-w-xl text-stone">
              {t.gallery.paragraph}
            </p>
          </Reveal>
        </div>

        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src} delay={(i % 4) * 70} className="break-inside-avoid">
              <button
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-sm"
                aria-label={`${t.gallery.enlarge} : ${tr(img.label, lang)}`}
              >
                <Image
                  src={img.src}
                  alt={tr(img.label, lang)}
                  width={500}
                  height={650}
                  className="h-auto w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-onyx/0 transition-colors duration-500 group-hover:bg-onyx/35" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex items-center gap-2 text-sm font-medium tracking-wide text-cream">
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-gold/50 text-gold">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                    </span>
                    {tr(img.label, lang)}
                  </span>
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 transition group-hover:ring-gold/30" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox images={srcs} index={index} onClose={() => setIndex(null)} onNavigate={setIndex} />
    </section>
  );
}
