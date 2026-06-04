"use client";

import React from "react";
import { motion } from "framer-motion";

export const BookCall = ({
  children,
  href = "#contact",
  onClick,
  className = "",
  variant = "primary",
  icon,
}: {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-widest transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black";

  const variants: Record<string, string> = {
    primary:
      "bg-brand-gold text-brand-black hover:bg-brand-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.2)] active:scale-[0.98]",
    secondary:
      "border border-brand-border text-brand-white hover:border-brand-gold/40 hover:bg-brand-white/[0.02] active:scale-[0.98]",
  };

  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
      aria-label="Book a discovery call"
    >
      {icon}
      {children}
    </motion.a>
  );
};
