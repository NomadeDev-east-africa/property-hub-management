"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useT } from "@/lib/translations";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const values = [120, 98, 10, 24];

function Counter({ stat, start }: { stat: Stat; start: boolean }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf: number;
    const duration = 1800;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * stat.value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, stat.value]);

  return (
    <span className="font-display text-5xl font-light text-gold-gradient sm:text-6xl">
      {val}
      {stat.suffix}
    </span>
  );
}

export default function Stats() {
  const t = useT();
  const stats: Stat[] = t.stats.items.map((it, i) => ({
    value: values[i],
    suffix: it.suffix,
    label: it.label,
  }));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative border-y border-gold/10 bg-ink py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className="flex flex-col items-center text-center">
            <Counter stat={s} start={inView} />
            <span className="mt-3 max-w-[12rem] text-sm leading-snug text-stone">{s.label}</span>
            {i < stats.length - 1 && (
              <span className="absolute hidden h-12 w-px bg-gold/15 lg:block" style={{ left: `${(i + 1) * 25}%`, marginTop: "1rem" }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
