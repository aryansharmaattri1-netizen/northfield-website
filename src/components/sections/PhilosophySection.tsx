"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, XCircle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-20%" },
  transition: { duration: 0.75 },
};

export const PhilosophySection = () => {
  return (
    <section id="philosophy" className="relative py-24 md:py-32">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div className="max-w-3xl" {...fadeUp}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Core Philosophy
          </span>
          <h2 className="mt-4 font-display text-[1.75rem] font-bold tracking-tight text-brand-white md:text-[2.5rem]">
            Clarity over chaos.
          </h2>
          <p className="mt-4 text-brand-light/70 leading-relaxed">
            This agency is built on a simple premise: finished outputs create
            more momentum than unfinished plans. Restraint beats noise. One great
            decision beats 100 mediocre tasks.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <motion.div
            {...fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-brand-border/70 bg-brand-card/60 p-8 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/[0.04] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <div className="relative">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-gold ring-1 ring-brand-gold/20">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-brand-white">
                We Believe In
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-brand-light/75">
                {[
                  "Finished outputs create momentum",
                  "Clarity compounds faster than effort",
                  "Restraint beats noise",
                  "One great decision beats 100 tasks",
                  "Systems beat motivation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-gold/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-brand-border/70 bg-brand-card/60 p-8 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <div className="relative">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 ring-1 ring-red-400/20">
                <XCircle className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-brand-white">
                We Reject
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-brand-light/75">
                {[
                  "Hustle without direction",
                  "Volume over leverage",
                  "Dopamine-driven output",
                  "Fake productivity",
                  '"Posting more" as a solution',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
