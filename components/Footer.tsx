"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";
import { profile, socials } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  github: <FaGithub size={16} />,
  linkedin: <FaLinkedin size={16} />,
  twitter: <FaTwitter size={16} />,
  mail: <Mail size={16} />,
};

export default function Footer() {
  return (
    <footer className="relative border-t border-black/5 dark:border-white/10">
      <div className="section flex flex-col items-center gap-6 py-12 sm:flex-row sm:justify-between sm:py-14">
        <div>
          <p className="font-display text-lg font-semibold">
            {profile.name}
          </p>
          <p className="mt-1 flex items-center gap-2 font-mono text-xs text-ink-500 dark:text-ink-300">
            <span className="h-1.5 w-1.5 rounded-full bg-uptime-400" />
            status: online · {profile.location}
          </p>
        </div>

        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.name}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-ink-700 transition-colors hover:bg-signal-500 hover:text-base-950 dark:bg-white/5 dark:text-paper-100"
            >
              {iconMap[s.icon]}
            </a>
          ))}
        </div>

        <a
          href="#top"
          className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink-700 hover:text-signal-500 dark:text-paper-100"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </a>
      </div>
      <div className="border-t border-black/5 py-4 text-center font-mono text-[11px] text-ink-500 dark:border-white/10 dark:text-ink-300">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS & Framer Motion.
      </div>
    </footer>
  );
}
