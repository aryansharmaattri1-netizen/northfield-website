import { motion } from "framer-motion";

const fadeUp = {
 initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-20%" },
  transition: { duration: 0.75 },
};

export const HeroBannerSection = () => {
  return (
    <motion.section id="hero" className="relative overflow-hidden rounded-[2rem] border border-[#E6F0FF]/60 bg-[#0B1220] py-24" {...fadeUp}>
      <div className="relative z-10 mx-auto max-w-[80rem] px-6">
        <div className="max-w-2xl">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E6F0FF]/40 bg-[#111B2E] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#BDD2EA]">
            Clarity-Led Studio
          </span>
          <h1 className="mt-6 font-semibold text-5xl leading-[1.05] tracking-[-0.04em] text-[#EAF2FF] md:text-[4.5rem]">
            We build authority. <br />
            <span className="text-[#7AA7FF]">Not noise.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-[1.7] text-[#7094B8] md:text-lg">
            A precision content agency for founders who already win.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#7AA7FF] px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-[#0B1220] transition-all hover:bg-[#A5C2FF] hover:shadow-[0_0_30px_rgba(122,167,255,0.35)]"
          >
            Start Building
            <span className="text-sm">→</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};
