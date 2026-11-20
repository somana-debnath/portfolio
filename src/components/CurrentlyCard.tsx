"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { currently, type TextSegment } from "@/data/content";
import { RingIcon } from "./Icons";

const total = currently.segments.reduce((n, s) => n + s.text.length, 0);
const fullText = currently.segments.map((s) => s.text).join("");

/** Renders the first `count` characters across the segments, keeping italic runs italic. */
function renderSegments(segments: TextSegment[], count: number) {
  let left = count;
  return segments.map((seg, i) => {
    const text = seg.text.slice(0, Math.max(0, left));
    left -= seg.text.length;
    if (!text) return null;
    return seg.italic ? (
      <em key={i} className="font-serif italic text-rose-ink">
        {text}
      </em>
    ) : (
      <span key={i}>{text}</span>
    );
  });
}

export function CurrentlyCard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(total);
      return;
    }
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += 1;
      setCount(i);
      if (i < total) timer = setTimeout(tick, currently.msPerChar);
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);

  const done = count >= total;

  return (
    <section aria-label={currently.label} className="px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="mx-auto max-w-2xl rounded-2xl border border-line bg-tint px-6 py-6 text-left sm:px-8 sm:py-7"
      >
        <div className="flex items-center gap-2.5">
          <RingIcon size={22} />
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-ink">
            {currently.label}
          </h2>
        </div>

        {/* Full sentence for screen readers, available immediately */}
        <p className="sr-only">{fullText}</p>

        {/* Ghost copy reserves the final height; the typed copy sits on top */}
        <div aria-hidden className="mt-3 grid text-lg leading-relaxed text-ink sm:text-xl">
          <p className="invisible col-start-1 row-start-1">
            {renderSegments(currently.segments, total)}
            <span className="ml-0.5 inline-block w-[2px]" />
          </p>
          <p className="col-start-1 row-start-1">
            {renderSegments(currently.segments, count)}
            <span
              className={`${done ? "caret" : ""} ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.18em] rounded-full bg-rose`}
            />
          </p>
        </div>
      </motion.div>
    </section>
  );
}
