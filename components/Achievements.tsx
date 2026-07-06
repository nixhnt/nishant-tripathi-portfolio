import { Trophy } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <SectionHeading
        eyebrow="05 · Achievements"
        title="Milestones worth flagging."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="glass card-lift flex h-full gap-4 rounded-2xl p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-500">
                <Trophy size={18} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-base font-semibold">
                    {item.title}
                  </h3>
                  <span className="font-mono text-[11px] text-ink-500 dark:text-ink-300">
                    {item.date}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
