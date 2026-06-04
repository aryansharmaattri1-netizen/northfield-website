"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Vote, Clapperboard, BookOpen, FileText } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-20%" },
  transition: { duration: 0.75, ease: "easeOut" },
};

const services = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Content Clarity",
    description: "Narrative structure, hook logic, and pacing for frameworks that convert.",
  },
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Editing Direction",
    description: "Creative decisions based on restraint — not just execution.",
  },
  {
    icon: <Vote className="h-5 w-5" />,
    title: "Authority Building",
    description: "Turn complex thinking into unmistakably clear market authority.",
  },
  {
    icon: <Clapperboard className="h-5 w-5" />,
    title: "Short-Form Mastery",
    description: "Attention, authority signaling, and positioning for fast channels.",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Long-Form Depth",
    description: "Trust, credibility, and relationship-building content.",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Channel Strategy",
    description: "Map content to revenue — from LinkedIn to inbound leads.",
  },
];

const BookCall = ({ children }: { children?: React.ReactNode }) => (
  <a
    href="#contact"
    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-brand-black transition-all hover:bg-brand-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.25)]"
  >
    {children ?? "Book a Call"}
  </a>
);

export const ServicesSection = () => {
  return (
    <section id="service" className="relative py-24 md:py-32">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div className="max-w-3xl" {...fadeUp}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            What We Provide
          </span>
          <h2 className="mt-4 font-display text-[1.75rem] font-bold tracking-tight text-brand-white md:text-[2.5rem]">
            Execution is always subordinate to thinking.
          </h2>
          <p className="mt-4 text-brand-light/70 leading-relaxed">
            We don’t chase trends. We build the systems that make your audience decide you’re the obvious choice.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              {...fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-brand-border/70 bg-brand-card/60 p-7 backdrop-blur-md transition-all duration-500 hover:border-brand-gold/40 hover:shadow-[0_0_40px_rgba(201,168,76,0.08)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/[0.03] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative flex items-start gap-3.5">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-gold ring-1 ring-brand-gold/20">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-brand-white">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-[1.65] text-brand-light/75">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
