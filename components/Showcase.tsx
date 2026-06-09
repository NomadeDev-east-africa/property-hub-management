"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import { useT } from "@/lib/translations";

export default function Showcase() {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-[-12%]">
        <Image
          src="/images/flyer-villa.jpg"
          alt="Villa Wadan City — Sky Construction"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/90 via-onyx/70 to-onyx/40" />
      <div className="noise absolute inset-0" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 sm:px-8">
        <div className="max-w-xl">
          <Reveal className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="eyebrow">{t.showcase.eyebrow}</span>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-4xl font-light leading-[1.1] text-cream sm:text-5xl md:text-6xl">
              {t.showcase.titlePre}
              <span className="text-gold-gradient italic">{t.showcase.titleEm}</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-lg leading-relaxed text-cream/80">
              {t.showcase.paragraph}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="btn-gold rounded-full px-8 py-4 text-sm font-semibold tracking-wide">
                {t.showcase.ctaPrimary}
              </a>
              <a href="#properties" className="btn-ghost rounded-full px-8 py-4 text-sm font-semibold tracking-wide">
                {t.showcase.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
