"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { useT } from "@/lib/translations";

export default function Testimonials() {
  const tx = useT();
  const testimonials = tx.testimonials.items;
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal className="mb-10 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gold" />
          <span className="eyebrow">{tx.testimonials.eyebrow}</span>
          <span className="h-px w-12 bg-gold" />
        </Reveal>

        <span className="mx-auto block font-display text-7xl leading-none text-gold/30">“</span>

        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="px-2"
            >
              <p className="font-display text-2xl font-light leading-relaxed text-cream sm:text-3xl md:text-4xl">
                {t.quote}
              </p>
              <footer className="mt-8">
                <p className="font-display text-xl text-gold-gradient">{t.name}</p>
                <p className="mt-1 text-sm tracking-wide text-stone">{t.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Témoignage ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-400 ${
                idx === i ? "w-8 bg-gold" : "w-2 bg-gold/30 hover:bg-gold/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
