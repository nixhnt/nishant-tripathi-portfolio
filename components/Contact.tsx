"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile, socials } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email address."),
  subject: z.string().min(3, "Add a short subject line."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

type ContactForm = z.infer<typeof contactSchema>;

const iconMap: Record<string, React.ReactNode> = {
  github: <FaGithub size={16} />,
  linkedin: <FaLinkedin size={16} />,
  twitter: <FaTwitter size={16} />,
  mail: <Mail size={16} />,
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactForm) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="07 · Contact"
        title="Let's talk networks, cloud, or opportunities."
        description="Open to full-time roles, collaborations, and just geeking out about infrastructure."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="glass flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-signal-500" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink-500 dark:text-ink-300">
                    Email
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-medium hover:text-signal-500"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-signal-500" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink-500 dark:text-ink-300">
                    Location
                  </p>
                  <p className="text-sm font-medium">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-wide text-ink-500 dark:text-ink-300">
                Find me elsewhere
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-ink-700 transition-colors hover:bg-signal-500 hover:text-base-950 dark:bg-white/5 dark:text-paper-100"
                  >
                    {iconMap[s.icon]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="glass space-y-5 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-wide text-ink-500 dark:text-ink-300">
                  Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm outline-none transition-colors focus:border-signal-400 dark:border-white/10 dark:bg-base-800/60"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-wide text-ink-500 dark:text-ink-300">
                  Email
                </label>
                <input
                  id="email"
                  {...register("email")}
                  className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm outline-none transition-colors focus:border-signal-400 dark:border-white/10 dark:bg-base-800/60"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs uppercase tracking-wide text-ink-500 dark:text-ink-300">
                Subject
              </label>
              <input
                id="subject"
                {...register("subject")}
                className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm outline-none transition-colors focus:border-signal-400 dark:border-white/10 dark:bg-base-800/60"
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-wide text-ink-500 dark:text-ink-300">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className="w-full resize-none rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm outline-none transition-colors focus:border-signal-400 dark:border-white/10 dark:bg-base-800/60"
                placeholder="Tell me a bit about what you have in mind..."
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-signal-500 px-6 py-3 font-medium text-base-950 transition-transform hover:-translate-y-0.5 hover:shadow-glow-sm disabled:opacity-70 sm:w-auto"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-sm text-uptime-500"
                >
                  <CheckCircle2 size={16} /> Message sent — I&apos;ll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-sm text-red-500"
                >
                  <XCircle size={16} /> Something went wrong. Please try emailing me directly.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
