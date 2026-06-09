"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { useT } from "@/lib/translations";

function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={clsx(
        "inline-flex items-center rounded-full border border-gold/30 p-0.5 text-xs font-semibold",
        className
      )}
      role="group"
      aria-label="Langue / Language"
    >
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={clsx(
            "rounded-full px-2.5 py-1 uppercase tracking-wider transition",
            lang === l ? "bg-gold text-onyx" : "text-cream/70 hover:text-cream"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const t = useT();
  const links = t.nav.links;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass border-b border-gold/10 py-3" : "py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-gold/30">
            <Image src="/images/logo.jpg" alt="Property Hub Management" fill className="object-cover" />
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-lg tracking-[0.15em] text-cream">PROPERTY HUB</span>
            <span className="text-[0.6rem] tracking-[0.45em] text-gold">MANAGEMENT</span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium tracking-wide text-cream/80 transition hover:text-cream"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-400 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LangToggle className="hidden sm:inline-flex" />
          <a
            href="#contact"
            className="btn-gold hidden rounded-full px-6 py-2.5 text-sm font-semibold sm:inline-flex"
          >
            {t.nav.cta}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 text-cream md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass overflow-hidden border-t border-gold/10 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-cream/85 tracking-wide"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-gold inline-flex flex-1 justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  {t.nav.cta}
                </a>
                <LangToggle className="ml-3" />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
