import { BookCall } from "@/components/cta/BookCall";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75 },
};

export const HeroBannerSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden rounded-3xl border border-brand-border/60 bg-brand-dark">
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24 lg:py-32">
        <div className="flex max-w-2xl flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-gold" />
            Clarity-Led Studio
          </span>
          <h1 className="font-display text-[2.5rem] font-bold leading-[1.05] tracking-[-0.04em] text-brand-white md:text-[3.25rem] lg:text-[4rem]">
            We build authority. <br />
            <span className="text-brand-gold">Not noise.</span>
          </h1>
          <p className="max-w-xl text-base leading-[1.7] text-brand-light/75 md:text-lg">
            A precision content agency for founders who already win.
          </p>
          <div className="flex flex-wrap gap-4">
            <BookCall variant="primary" icon={<span className="text-sm">→</span>}>
              Start Building
            </BookCall>
          </div>
        </div>
      </div>
    </section>
  );
};
