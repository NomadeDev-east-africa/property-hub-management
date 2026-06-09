"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface LightboxProps {
  images: string[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;

  const prev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const next = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, prev, next]);

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-onyx/95 backdrop-blur-md p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="absolute top-5 right-5 z-10 grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-cream transition hover:border-gold hover:text-gold"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Précédent"
            className="absolute left-3 sm:left-8 z-10 grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-cream transition hover:border-gold hover:text-gold"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Suivant"
            className="absolute right-3 sm:right-8 z-10 grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-cream transition hover:border-gold hover:text-gold"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <motion.div
            key={index}
            className="relative h-[78vh] w-full max-w-5xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt=""
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </motion.div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm tracking-[0.3em] text-stone">
            {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
