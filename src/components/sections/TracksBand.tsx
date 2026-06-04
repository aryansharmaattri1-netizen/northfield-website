"use client";

import React from "react";
import { motion } from "framer-motion";
import { Timer, Crown, BarChart3 } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-20%" },
  transition: { duration: 0.75 },
};

const pillars = [
  {
    icon: <Crown className="h-5 w-5" />,
    title: "Authority",
    label: "Awareness",
    blurb:
      "Signal clarity. Earn attention. Establish you as the obvious voice before the pitch begins.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Trust",
    label: "Consideration",
    blurb:
      "Depth over hype. Convert attention into the kind of loyalty that shows up in deals, not just likes.",
  },
  {
    icon: <Timer className="h-5 w-5" />,
    title: "Revenue",
    label: "Conversion",
    blurb:
      "Content is only worth what it moves. Every system is designed for a clear commercial outcome.",
  },
];

export const TracksBand = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              {...fadeUp}
              className="group relative flex flex-col gap-3 rounded-3xl border border-brand-border/70 bg-brand-card/60 p-7 backdrop-blur-md transition-all duration-500 hover:border-brand-gold/40 hover:shadow-[0_0_40px_rgba(201,168,76,0.08)]"
            >
              <div className="flex items-center gap-2.5">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold ring-1 ring-brand-gold/20">
                  {pillar.icon}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
                  {pillar.label}
                </span>
              </div>
              <h3 className="font-display text-base font-semibold text-brand-white">
                {pillar.title}
              </h3>
              <p className="text-sm leading-[1.7] text-brand-light/75">
                {pillar.blurb}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
