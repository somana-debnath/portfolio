"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // storage unavailable; the choice just won't persist
    }
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Dark mode"
      aria-pressed={dark}
      className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-tint hover:text-rose-ink"
    >
      {/* Both icons render; CSS picks one so it is right before hydration */}
      <SunIcon size={18} className="hidden dark:block" />
      <MoonIcon size={18} className="block dark:hidden" />
    </button>
  );
}
