"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { useT } from "@/lib/translations";

const phones = ["+253 77 10 09 09", "+253 21 51 33 33", "+253 77 21 07 41", "+253 21 25 13 43"];

export default function Contact() {
  const t = useT();
  const [sent, setSent] = useState(false);
  // On stocke le centre d'intérêt par index pour qu'il reste cohérent
  // quand l'utilisateur change de langue.
  const [form, setForm] = useState({ name: "", phone: "", interest: 0, message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const c = t.contact;
    const text = encodeURIComponent(
      `${c.waGreeting}\n\n${c.waName} : ${form.name}\n${c.waPhone} : ${form.phone}\n${c.waInterest} : ${c.interestOptions[form.interest]}\n\n${form.message}`
    );
    window.open(`https://wa.me/25377100909?text=${text}`, "_blank");
    setSent(true);
  };

  const updateText = (k: "name" | "phone" | "message") => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="relative bg-ink py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2">
        {/* Left — info */}
        <div>
          <Reveal className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="eyebrow">{t.contact.eyebrow}</span>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-4xl font-light leading-tight text-cream sm:text-5xl md:text-6xl">
              {t.contact.titlePre}
              <span className="text-gold-gradient italic">{t.contact.titleEm}</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/75">
              {t.contact.paragraph}
            </p>
          </Reveal>

          <Reveal delay={200} className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/30 text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11Z" /><circle cx="12" cy="10" r="2.4" /></svg>
              </span>
              <div>
                <p className="font-display text-lg text-cream">{t.contact.addressLabel}</p>
                <p className="text-stone">{t.contact.addressValue}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/30 text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" /></svg>
              </span>
              <div>
                <p className="font-display text-lg text-cream">{t.contact.phoneLabel}</p>
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  {phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="text-stone transition hover:text-gold">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/25377100909"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1a11 11 0 0 1-4.2-2.6 8.3 8.3 0 0 1-1.7-2.3c-.2-.4 0-.6.2-.8l.5-.6c.2-.2.2-.4.4-.6 0-.2 0-.4-.1-.6l-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5 0-.7.3-.3.3-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 5 4.3 1.8.8 2.5.8 3.4.7.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.1-1.3-.1-.1-.2-.2-.4-.3Z" /></svg>
              {t.contact.whatsappBtn}
            </a>
          </Reveal>
        </div>

        {/* Right — form */}
        <Reveal delay={150}>
          <form
            onSubmit={onSubmit}
            className="card-glow rounded-sm border border-gold/15 bg-charcoal p-7 sm:p-9"
          >
            <h3 className="font-display text-2xl text-cream">{t.contact.formTitle}</h3>
            <p className="mt-1 text-sm text-stone">{t.contact.formSubtitle}</p>

            <div className="mt-7 space-y-5">
              <Field label={t.contact.fieldName}>
                <input required value={form.name} onChange={updateText("name")} placeholder={t.contact.fieldNamePh} className="ph-input" />
              </Field>
              <Field label={t.contact.fieldPhone}>
                <input required value={form.phone} onChange={updateText("phone")} placeholder={t.contact.fieldPhonePh} className="ph-input" />
              </Field>
              <Field label={t.contact.fieldInterest}>
                <select
                  value={form.interest}
                  onChange={(e) => setForm((f) => ({ ...f, interest: Number(e.target.value) }))}
                  className="ph-input"
                >
                  {t.contact.interestOptions.map((opt, idx) => (
                    <option key={idx} value={idx}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t.contact.fieldMessage}>
                <textarea value={form.message} onChange={updateText("message")} rows={4} placeholder={t.contact.fieldMessagePh} className="ph-input resize-none" />
              </Field>
            </div>

            <button type="submit" className="btn-gold mt-7 w-full rounded-full py-4 text-sm font-semibold tracking-wide">
              {t.contact.submit}
            </button>
            {sent && (
              <p className="mt-4 text-center text-sm text-gold">
                {t.contact.sent}
              </p>
            )}
          </form>
        </Reveal>
      </div>

      {/* Map */}
      <Reveal delay={100} className="mx-auto mt-16 max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-sm border border-gold/15">
          <iframe
            title={t.contact.mapTitle}
            src="https://www.google.com/maps?q=Djibouti%20Heron&output=embed"
            className="h-[360px] w-full grayscale-[0.3] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>

      <style jsx global>{`
        .ph-input {
          width: 100%;
          background: var(--color-onyx);
          border: 1px solid color-mix(in srgb, var(--color-gold) 18%, transparent);
          border-radius: 4px;
          padding: 0.85rem 1rem;
          color: var(--color-cream);
          font-size: 0.95rem;
          transition: border-color 0.3s, box-shadow 0.3s;
          outline: none;
        }
        .ph-input::placeholder { color: color-mix(in srgb, var(--color-stone) 80%, transparent); }
        .ph-input:focus {
          border-color: var(--color-gold);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-gold) 12%, transparent);
        }
        select.ph-input option { background: var(--color-charcoal); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-stone">{label}</span>
      {children}
    </label>
  );
}
