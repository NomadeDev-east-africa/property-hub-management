"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useT } from "@/lib/translations";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease } },
};

export default function Hero() {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="/images/building.jpg"
          alt="Résidence Property Hub Management à Djibouti"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/80 via-onyx/40 to-onyx" />
      <div className="absolute inset-0 bg-gradient-to-r from-onyx/85 via-transparent to-transparent" />
      <div className="noise absolute inset-0" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 pt-28 pb-20 sm:px-8 sm:pt-24"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div variants={item} className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="eyebrow">{t.hero.eyebrow}</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-light leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {t.hero.titleLine1}
            <br />
            <span className="text-gold-gradient italic">{t.hero.titleLine2}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-cream/75"
          >
            {t.hero.paragraph}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#properties" className="btn-gold rounded-full px-8 py-4 text-sm font-semibold tracking-wide">
              {t.hero.ctaPrimary}
            </a>
            <a href="#contact" className="btn-ghost rounded-full px-8 py-4 text-sm font-semibold tracking-wide">
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[0.65rem] tracking-[0.4em] text-cream/50">{t.hero.scroll}</span>
        <span className="relative grid h-10 w-6 justify-center rounded-full border border-cream/30 pt-2">
          <span
            className="h-2 w-1 rounded-full bg-gold"
            style={{ animation: "scroll-hint 2s ease-in-out infinite" }}
          />
        </span>
      </div>
    </section>
  );
}
