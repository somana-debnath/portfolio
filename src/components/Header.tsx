"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/content";
import { CloseIcon, GitHubIcon, LinkedInIcon, MailIcon, MenuIcon } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

const iconLink =
  "grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-tint hover:text-rose-ink";

function SocialLinks() {
  return (
    <>
      <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className={iconLink}>
        <GitHubIcon size={18} />
      </a>
      <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className={iconLink}>
        <LinkedInIcon size={17} />
      </a>
      <a href={`mailto:${site.email}`} aria-label={`Email ${site.email}`} className={iconLink}>
        <MailIcon size={19} />
      </a>
    </>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || menuOpen
          ? "bg-bg/85 shadow-[0_1px_0_var(--border)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          aria-label={`${site.name}, back to top`}
          className="font-serif text-2xl font-medium italic tracking-tight text-rose-ink transition-opacity hover:opacity-80"
        >
          {site.monogram}
        </a>

        <nav aria-label="Primary" className="flex items-center gap-1">
          <ul className="mr-2 hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:bg-tint hover:text-rose-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden items-center sm:flex">
            <SocialLinks />
          </div>
          <ThemeToggle />
          <a
            href={site.resume}
            download="Somana-Debnath-Resume.pdf"
            className="ml-1 rounded-full bg-rose px-4 py-2 text-sm font-medium text-on-rose shadow-sm transition-[filter,transform] hover:brightness-95 motion-safe:hover:-translate-y-px"
          >
            Resume
          </a>
          <button
            type="button"
            className={`${iconLink} ml-1 md:hidden`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="mx-auto max-w-5xl space-y-1 px-5 pb-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-ink transition-colors hover:bg-tint"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-1 pt-2 sm:hidden">
                <SocialLinks />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
