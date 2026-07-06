"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/data";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="glass flex items-center gap-2 rounded-full px-4 py-2 font-display text-sm font-semibold tracking-tight"
        >
          <span className="h-2 w-2 rounded-full bg-uptime-400" />
          NT<span className="text-signal-500">.</span>
          <span className="hidden text-ink-500 dark:text-ink-300 sm:inline">
            {profile.shortName}
          </span>
        </a>

        <nav className="glass hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-ink-700 transition-colors hover:bg-signal-400/10 hover:text-signal-600 dark:text-paper-100 dark:hover:text-signal-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="glass flex h-9 w-9 items-center justify-center rounded-full md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-strong mx-6 mt-2 overflow-hidden rounded-2xl md:hidden"
          >
            <div className="flex flex-col p-2">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-wide text-ink-700 hover:bg-signal-400/10 hover:text-signal-600 dark:text-paper-100 dark:hover:text-signal-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
