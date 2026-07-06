import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import AnimatedCounter from "./AnimatedCounter";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading
        eyebrow="01 · About"
        title="From campus labs to production networks."
      />

      <div className="grid gap-12 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-3">
          {profile.bio.map((para, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-ink-700 dark:text-ink-300 sm:text-lg">
                {para}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="lg:col-span-2">
          <div className="glass grid grid-cols-2 gap-6 rounded-2xl p-6 sm:p-8">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-semibold text-signal-500 dark:text-signal-300">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-xs leading-snug text-ink-500 dark:text-ink-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
