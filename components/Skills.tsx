"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="02 · Skills"
        title="The stack behind the uptime."
        description="Grounded in networking fundamentals, extended into cloud and security tooling."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 0.08}>
            <div className="glass card-lift h-full rounded-2xl p-6 sm:p-7">
              <h3 className="font-display text-lg font-semibold">
                {group.category}
              </h3>
              <p className="mt-1 mb-6 text-sm text-ink-500 dark:text-ink-300">
                {group.blurb}
              </p>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
                      <span className="text-ink-700 dark:text-paper-100">
                        {item.name}
                      </span>
                      <span className="text-signal-600 dark:text-signal-400">
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-signal-500 to-uptime-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
