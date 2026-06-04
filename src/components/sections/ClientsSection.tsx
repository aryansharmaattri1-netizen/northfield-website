"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-20%" },
  transition: { duration: 0.75 },
};

const idealItems = [
  "Founders, operators, and CEOs",
  "Already making $100K+/month",
  "Low tolerance for noise or amateurs",
  "Intelligent, thoughtful, and time-poor",
  "Strong offline competence",
  "Value thinking over execution",
];

const avoidedItems = [
  "Beginners",
  "Creators chasing virality",
  "Price-sensitive buyers",
  '"Just editing" requests',
  "Hype-driven audiences",
];

export const ClientsSection = () => {
  return (
    <section id="clients" className="relative py-24 md:py-32">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div className="max-w-3xl" {...fadeUp}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Who We Work With
          </span>
          <h2 className="mt-4 font-display text-[1.75rem] font-bold tracking-tight text-brand-white md:text-[2.5rem]">
            And who we don’t.
          </h2>
          <p className="mt-4 text-brand-light/70 leading-relaxed">
            We partner with a small number of high-level operators who value leverage over volume.
            If you want noise, we’re not the right fit.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <motion.div
            {...fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-brand-border/70 bg-brand-card/60 p-8 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/[0.04] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-brand-gold" />
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-brand-gold">
                Ideal Partner
              </h3>
            </div>

            <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-brand-light/75">
              {idealItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-gold/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-brand-border/70 bg-brand-card/60 p-8 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            <div className="flex items-center gap-2.5">
              <XCircle className="h-4 w-4 text-red-400" />
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-red-400">
                Not A Fit
              </h3>
            </div>

            <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-brand-light/75">
              {avoidedItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
