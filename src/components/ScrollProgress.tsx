"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin bar at the very top; the rose-to-gold gradient is revealed as you scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
      style={{ scaleX, background: "linear-gradient(90deg, var(--rose), var(--gold))" }}
    />
  );
}
