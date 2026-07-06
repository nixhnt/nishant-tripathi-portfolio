import { BadgeCheck, Clock, CircleDashed } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certifications, roadmap } from "@/lib/data";

const statusMap = {
  Completed: { icon: BadgeCheck, color: "text-uptime-500 bg-uptime-400/15" },
  "In Progress": { icon: Clock, color: "text-amber-500 bg-amber-500/15" },
  Planned: { icon: CircleDashed, color: "text-ink-500 bg-ink-500/10" },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeading
        eyebrow="06 · Certifications"
        title="Credentials, earned and in flight."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {certifications.map((cert, i) => {
          const status = statusMap[cert.status];
          const Icon = status.icon;
          return (
            <Reveal key={cert.name} delay={i * 0.08}>
              <div className="glass card-lift flex h-full items-start gap-4 rounded-2xl p-6">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${status.color}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">
                    {cert.issuer}
                  </p>
                  <div className="mt-2 flex items-center gap-2 font-mono text-[11px]">
                    <span className={`rounded-full px-2 py-0.5 ${status.color}`}>
                      {cert.status}
                    </span>
                    <span className="text-ink-500 dark:text-ink-300">{cert.date}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2} className="mt-14">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <p className="eyebrow mb-6">Career roadmap</p>
          <div className="flex flex-wrap gap-4 sm:flex-nowrap sm:overflow-x-auto">
            {roadmap.map((step, i) => (
              <div key={step.phase} className="flex min-w-[150px] flex-1 items-center gap-3">
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] text-signal-600 dark:text-signal-400">
                    {step.period}
                  </span>
                  <span className="text-sm font-medium">{step.phase}</span>
                </div>
                {i < roadmap.length - 1 && (
                  <div className="hidden h-px flex-1 bg-gradient-to-r from-signal-400/50 to-transparent sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
