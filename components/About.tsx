"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import { useT } from "@/lib/translations";

export default function About() {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Visual */}
        <div ref={ref} className="relative">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
            <motion.div style={{ y }} className="absolute inset-[-10%]">
              <Image
                src="/images/furnished-living-1.jpg"
                alt="Intérieur élégant Property Hub Management"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </Reveal>

          {/* floating accent card */}
          <Reveal
            delay={250}
            className="card-glow glass absolute -bottom-8 -right-2 w-56 rounded-sm border border-gold/20 p-6 sm:-right-8"
          >
            <span className="font-display text-4xl text-gold-gradient">10+</span>
            <p className="mt-1 text-sm leading-snug text-cream/70">
              {t.about.cardText}
            </p>
          </Reveal>

          {/* gold frame */}
          <div className="absolute -left-5 -top-5 -z-10 h-32 w-32 border-l border-t border-gold/40" />
          <div className="absolute -bottom-5 left-1/3 -z-10 h-24 w-24 border-b border-l border-gold/20" />
        </div>

        {/* Text */}
        <div>
          <Reveal className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="eyebrow">{t.about.eyebrow}</span>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-4xl font-light leading-tight text-cream sm:text-5xl md:text-6xl">
              {t.about.titlePre}
              <span className="text-gold-gradient italic">{t.about.titleEm}</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-7 text-lg leading-relaxed text-cream/75">
              {t.about.paragraph1}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 leading-relaxed text-stone">
              {t.about.paragraph2}
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {t.about.features.map(([title, desc], i) => (
              <Reveal key={title} delay={120 + i * 80} className="border-l border-gold/25 pl-5">
                <h3 className="font-display text-xl text-cream">{title}</h3>
                <p className="mt-1 text-sm leading-snug text-stone">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
