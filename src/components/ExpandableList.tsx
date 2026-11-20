"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { ChevronDownIcon } from "./Icons";

function Bullet({ text }: { text: string }) {
  return (
    <li className="relative pl-5 leading-relaxed text-muted">
      <span aria-hidden className="absolute left-0 top-[0.62em] h-1.5 w-1.5 rounded-full bg-dusty" />
      {text}
    </li>
  );
}

/** Shows the first `visible` items, with a "Show more" button that smoothly reveals the rest. */
export function ExpandableList({ items, visible }: { items: string[]; visible: number }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const shown = items.slice(0, visible);
  const rest = items.slice(visible);

  return (
    <div>
      <ul className="space-y-2">
        {shown.map((t) => (
          <Bullet key={t} text={t} />
        ))}
      </ul>
      <AnimatePresence initial={false}>
        {open && rest.length > 0 && (
          <motion.div
            id={id}
            key="more"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="space-y-2 pt-2">
              {rest.map((t) => (
                <Bullet key={t} text={t} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      {rest.length > 0 && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="-ml-2 mt-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text-sm font-medium text-rose-ink transition-colors hover:bg-tint"
        >
          {open ? "Show less" : "Show more"}
          <ChevronDownIcon
            size={16}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
}
