"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { BookCall } from "@/components/cta/BookCall";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-20%" },
  transition: { duration: 0.75 },
};

const plans = [
  {
    tier: "Standard",
    range: "$8–15K / mo",
    blurb: "Full content system for founders ready to execute.",
    features: [
      "Strategy + execution",
      "Content clarity & hook engineering",
      "Short-form + long-form production",
      "Monthly review & iteration",
      "Direct access to lead strategist",
    ],
    highlighted: false,
  },
  {
    tier: "High-End",
    range: "$15–50K / mo",
    blurb: "Elite retainer with full production support.",
    features: [
      "In-person shoots available",
      "Brand positioning architecture",
      "Full production team",
      "Priority support & scheduling",
      "Quarterly executive reviews",
    ],
    highlighted: true,
  },
  {
    tier: "Growth",
    range: "$20–40K / mo",
    blurb: "Revenue-aligned pricing for serious scale.",
    features: [
      "Based on % of client revenue",
      "$5M/year ≈ $20K/mo",
      "$10M/year ≈ $25K/mo",
      "$20M/year ≈ $40K/mo",
      "~5% or less of enterprise upside",
    ],
    highlighted: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div className="max-w-3xl" {...fadeUp}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Investment
          </span>
          <h2 className="mt-4 font-display text-[1.75rem] font-bold tracking-tight text-brand-white md:text-[2.5rem]">
            Dynamic pricing. No fluff.
          </h2>
          <p className="mt-4 text-brand-light/70 leading-relaxed">
            We price against results, not hours. Every engagement is structured around the revenue you’re trying to unlock.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.tier}
              {...fadeUp}
              className={`relative flex flex-col rounded-3xl border p-7 backdrop-blur-md transition-all duration-500 ${
                plan.highlighted
                  ? "border-brand-gold/50 bg-brand-card/80 shadow-[0_0_50px_rgba(201,168,76,0.08)]"
                  : "border-brand-border/70 bg-brand-card/60 hover:border-brand-gold/30"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold">
                  Most Selected
                </span>
              )}

              <div>
                <h3 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                  {plan.tier}
                </h3>
                <div className="mt-3 font-display text-2xl font-bold text-brand-white">
                  {plan.range}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-brand-light/75">
                  {plan.blurb}
                </p>
              </div>

              <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-brand-light/75">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <BookCall variant={plan.highlighted ? "primary" : "secondary"}>
                  {plan.highlighted ? "Get Started" : "Discuss"}
                </BookCall>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp} className="mt-8 text-center text-xs text-brand-muted">
          All engagements begin with a 30-minute discovery call and a 1-week trial period.
        </motion.p>
      </div>
    </section>
  );
};
