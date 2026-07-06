"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import NetworkBackground from "./NetworkBackground";
import { profile } from "@/lib/data";

function useTypewriter(words: string[], speed = 55, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.taglineRoles);

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-paper-50 dark:bg-base-950"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      <div className="absolute inset-0 bg-radial-fade" />
      <NetworkBackground />

      <div className="section relative z-10 flex flex-col items-start pt-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass mb-6 flex items-center gap-2 rounded-full px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-uptime-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-uptime-500" />
          </span>
          <span className="font-mono text-xs tracking-wide text-ink-700 dark:text-paper-100">
            open to full-time roles · {profile.location}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient">{profile.name.split(" ")[0]}</span>
          <br />
          I keep networks{" "}
          <span className="relative inline-block">
            online
            <svg
              className="absolute -bottom-2 left-0 w-full text-signal-400"
              viewBox="0 0 200 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 9C40 2 160 2 198 9"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-6 flex h-8 items-center font-mono text-base text-ink-700 dark:text-signal-300 sm:text-lg"
        >
          <span className="mr-2 text-uptime-500">$</span>
          <span>{typed}</span>
          <span className="cursor h-5" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-6 max-w-xl text-base text-ink-500 dark:text-ink-300 sm:text-lg"
        >
          Currently an {profile.role} at{" "}
          <span className="font-medium text-ink-900 dark:text-paper-50">
            {profile.company}
          </span>
          , building the networking and cloud foundation for a long-term
          career in cloud security.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={profile.resumeUrl}
            download
            className="group flex items-center gap-2 rounded-full bg-signal-500 px-6 py-3 font-medium text-base-950 shadow-glow-sm transition-transform hover:-translate-y-0.5 hover:shadow-glow"
          >
            <Download size={17} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="glass flex items-center gap-2 rounded-full px-6 py-3 font-medium text-ink-900 transition-transform hover:-translate-y-0.5 dark:text-paper-50"
          >
            <Mail size={17} />
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex items-center gap-2 self-center font-mono text-xs uppercase tracking-widest text-ink-500 dark:text-ink-300 sm:absolute sm:bottom-10 sm:left-1/2 sm:mt-0 sm:-translate-x-1/2"
        >
          <span>scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <ArrowDown size={14} />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
