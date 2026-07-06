"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BOOT_LINES = [
  "initializing link...",
  "negotiating handshake...",
  "authenticating session...",
  "mounting portfolio://nishant-tripathi",
  "status: online",
];

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < BOOT_LINES.length - 1) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 260);
      return () => clearTimeout(t);
    }
    const done = setTimeout(() => setVisible(false), 420);
    return () => clearTimeout(done);
  }, [lineIndex]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="w-[min(420px,88vw)] font-mono text-sm text-signal-300">
            <div className="mb-4 flex items-center gap-2 text-ink-300">
              <span className="h-2 w-2 rounded-full bg-uptime-400" />
              <span className="text-xs tracking-widest">NT / BOOT SEQUENCE</span>
            </div>
            <ul className="space-y-1.5">
              {BOOT_LINES.slice(0, lineIndex + 1).map((line, i) => (
                <motion.li
                  key={line}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className={i === lineIndex ? "text-paper-50" : "text-ink-300"}
                >
                  <span className="text-uptime-400">$</span> {line}
                  {i === lineIndex && <span className="cursor h-4 align-middle" />}
                </motion.li>
              ))}
            </ul>
            <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-base-700">
              <motion.div
                className="h-full bg-gradient-to-r from-signal-500 to-uptime-400"
                initial={{ width: "0%" }}
                animate={{ width: `${((lineIndex + 1) / BOOT_LINES.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
