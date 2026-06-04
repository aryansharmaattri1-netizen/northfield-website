"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, PhoneCall, Clapperboard } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-20%" },
  transition: { duration: 0.75 },
};

const steps = [
  {
    icon: <MessageSquare className="h-5 w-5" />,
    label: "Step 1",
    title: "Engage Publicly",
    detail:
      "Comment on recent posts and signal genuine understanding — no pitch, just insight.",
  },
  {
    icon: <PhoneCall className="h-5 w-5" />,
    label: "Step 2",
    title: "Move to DM",
    detail:
      "After engagement builds, offer a clear insight before any offer. Lead with value.",
  },
  {
    icon: <Clapperboard className="h-5 w-5" />,
    label: "Step 3",
    title: "Send a Loom",
    detail:
      "80-8-20 structure: what I noticed → why it matters → one clear recommendation.",
  },
];

export const OutreachSection = () => {
  return (
    <section id="outreach" className="relative py-24 md:py-32">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div className="max-w-3xl" {...fadeUp}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Outreach
          </span>
          <h2 className="mt-4 font-display text-[1.75rem] font-bold tracking-tight text-brand-white md:text-[2.5rem]">
            High-level founders buy relief, not persuasion.
          </h2>
          <p className="mt-4 text-brand-light/70 leading-relaxed">
            Our outreach is calibrated for operators who value signal over noise.
            No spam. No templated sequences. Just precision contact.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              {...fadeUp}
              className="group relative flex flex-col rounded-3xl border border-brand-border/70 bg-brand-card/60 p-7 backdrop-blur-md transition-all duration-500 hover:border-brand-gold/40 hover:shadow-[0_0_40px_rgba(201,168,76,0.08)]"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-gold ring-1 ring-brand-gold/20">
                  {step.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-muted">
                  {step.label}
                </span>
              </div>

              <h3 className="mt-5 font-display text-base font-semibold text-brand-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.7] text-brand-light/75">
                {step.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
