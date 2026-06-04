"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookCall } from "@/components/cta/BookCall";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-20%" },
  transition: { duration: 0.75 },
};

const processItems = [
  {
    title: "Discovery Call",
    detail: "30 minutes to understand your goals, challenges, and whether we’re the right fit.",
  },
  {
    title: "Trial Period",
    detail: "1-week working engagement to validate direction, speed, and chemistry.",
  },
  {
    title: "Retainer Begins",
    detail: "Monthly engagements starting at $8K, structured around outcomes.",
  },
  {
    title: "Long-Term Build",
    detail: "Minimum 6-month partnership for sustained, compounding authority.",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div className="max-w-3xl" {...fadeUp}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Next Step
          </span>
          <h2 className="mt-4 font-display text-[1.75rem] font-bold tracking-tight text-brand-white md:text-[2.5rem]">
            Ready to build authority that lasts?
          </h2>
          <p className="mt-4 text-brand-light/70 leading-relaxed">
            Tell us about your content challenge. We’ll reply within one business day with next steps.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <motion.div
            {...fadeUp}
            className="flex flex-col gap-6 rounded-3xl border border-brand-border/70 bg-brand-card/60 p-7 backdrop-blur-md"
          >
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-brand-gold">
              Our Process
            </h3>
            <div className="grid gap-4">
              {processItems.map((item) => (
                <div key={item.title} className="flex flex-col gap-1">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-gold">
                    {item.title}
                  </div>
                  <p className="text-brand-light/75 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="flex flex-col gap-4 rounded-3xl border border-brand-border/70 bg-brand-card/60 p-7 backdrop-blur-md"
          >
            <form
              className="flex flex-col gap-4"
              onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const name = data.get("name");
              const email = data.get("email");
              const note = data.get("note");
              alert(`Thanks, ${name}. We’ve received your inquiry and will reply to ${email} shortly.`);
              }}
              >
              <div>
                <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  Name
                </label>
                <input
                  name="name"
                  required
                  className="h-11 w-full rounded-xl border border-brand-border/80 bg-brand-black/40 px-3.5 text-sm text-brand-white outline-none transition-all duration-300 hover:border-brand-border placeholder:text-brand-muted focus:border-brand-gold/60 focus:shadow-[0_0_20px_rgba(201,168,76,0.06)]"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="h-11 w-full rounded-xl border border-brand-border/80 bg-brand-black/40 px-3.5 text-sm text-brand-white outline-none transition-all duration-300 hover:border-brand-border placeholder:text-brand-muted focus:border-brand-gold/60 focus:shadow-[0_0_20px_rgba(201,168,76,0.06)]"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  Company
                </label>
                <input
                  name="company"
                  className="h-11 w-full rounded-xl border border-brand-border/80 bg-brand-black/40 px-3.5 text-sm text-brand-white outline-none transition-all duration-300 hover:border-brand-border placeholder:text-brand-muted focus:border-brand-gold/60 focus:shadow-[0_0_20px_rgba(201,168,76,0.06)]"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  Challenge
                </label>
                <textarea
                  name="note"
                  rows={4}
                  className="w-full rounded-xl border border-brand-border/80 bg-brand-black/40 px-3.5 py-3 text-sm text-brand-white outline-none transition-all duration-300 hover:border-brand-border placeholder:text-brand-muted focus:border-brand-gold/60 focus:shadow-[0_0_20px_rgba(201,168,76,0.06)]"
                  placeholder="What’s your biggest content challenge right now?"
                />
              </div>

              <div className="pt-1">
                <BookCall>Schedule a Call</BookCall>
              </div>

              <p className="text-[10px] text-brand-muted">
                By submitting, you agree to be contacted about our services.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
