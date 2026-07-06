"use client";

import { Github, ExternalLink, Activity } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

function ProjectVisual({ title }: { title: string }) {
  // Abstract circuit-style placeholder visual instead of a generic stock photo —
  // swap the initials/gradient per project once real screenshots exist.
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-base-800 via-base-900 to-base-950">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <span className="relative font-display text-4xl font-bold text-signal-400/70">
        {initials}
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="04 · Projects"
        title="Things I've built and broken (on purpose)."
        description="A mix of applied ML, embedded systems, and network lab work."
      />

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <article className="glass card-lift group flex h-full flex-col overflow-hidden rounded-2xl">
              <ProjectVisual title={project.title} />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold leading-snug">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="shrink-0 rounded-full bg-amber-500/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-amber-500">
                      featured
                    </span>
                  )}
                </div>

                {project.metric && (
                  <p className="mt-2 flex items-center gap-1.5 font-mono text-xs text-uptime-500">
                    <Activity size={12} />
                    {project.metric}
                  </p>
                )}

                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-signal-400/10 px-2.5 py-1 font-mono text-[11px] text-signal-600 dark:text-signal-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-black/5 pt-4 dark:border-white/10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-1.5 text-sm font-medium text-ink-700 transition-colors hover:text-signal-600 dark:text-paper-100 dark:hover:text-signal-300"
                    >
                      <Github size={15} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-1.5 text-sm font-medium text-ink-700 transition-colors hover:text-signal-600 dark:text-paper-100 dark:hover:text-signal-300"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
