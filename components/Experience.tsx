import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        eyebrow="03 · Experience"
        title="Where the hands-on hours went."
      />

      <div className="relative border-l border-black/10 pl-8 dark:border-white/10 sm:pl-10">
        {experience.map((item, i) => (
          <Reveal key={item.role + item.org} delay={i * 0.1} className="relative pb-12 last:pb-0">
            <span
              className={`absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 sm:-left-[49px] ${
                item.current
                  ? "border-uptime-400 bg-uptime-400"
                  : "border-signal-400 bg-base-950"
              }`}
            />
            <div className="glass card-lift rounded-2xl p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">
                  {item.role}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wide text-signal-600 dark:text-signal-400">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">
                {item.org} · {item.location}
                {item.current && (
                  <span className="ml-2 rounded-full bg-uptime-400/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-uptime-500">
                    current
                  </span>
                )}
              </p>
              <ul className="mt-4 space-y-2">
                {item.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-sm leading-relaxed text-ink-700 dark:text-ink-300"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
