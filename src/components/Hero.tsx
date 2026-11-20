"use client";

import { motion } from "framer-motion";
import { hero, site } from "@/data/content";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-name" className="relative px-5 pb-10 pt-36 text-center sm:px-8 sm:pt-44">
      {/* soft background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[420px] max-w-3xl rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--tint), transparent)" }}
      />

      <motion.p
        {...fadeUp(0)}
        className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-ink shadow-sm"
      >
        <span className="relative flex h-2.5 w-2.5" aria-hidden>
          <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        {hero.badge}
      </motion.p>

      <motion.h1
        {...fadeUp(0.1)}
        id="hero-name"
        className="mt-7 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-7xl md:text-8xl"
      >
        {site.firstName} <em className="font-serif italic text-rose">{site.lastName}</em>
      </motion.h1>

      <motion.p {...fadeUp(0.2)} className="mt-6 text-base text-muted sm:text-lg">
        {hero.subline}
      </motion.p>
    </section>
  );
}
