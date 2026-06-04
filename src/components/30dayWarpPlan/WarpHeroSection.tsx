import React from "react";

        const WarpHeroSection = () => (
          <>
            <section className="relative overflow-hidden rounded-2xl mb-8 bg-brand-card border border-brand-border" id="warp-hero" style={{ backgroundImage: "linear-gradient(135deg, #111111 0%, #1a1200 60%, #0A0A0A 100%)" }}>
<div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, #C9A84C 40px, #C9A84C 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #C9A84C 40px, #C9A84C 41px)" }}></div>
<div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 px-8 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="text-brand-gold text-xs font-bold uppercase tracking-widest">30-Day Warp Plan</span>
<span className="text-brand-muted text-xs">•</span>
<span className="text-brand-muted text-xs font-medium">Zero to First $10K MRR</span>
</div>
<h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-800 text-brand-white leading-tight mb-3">
                        30 Days.<br/>
<span className="text-brand-gold">No Excuses. Only Results.</span>
</h1>
<p className="text-brand-light text-sm md:text-base max-w-xl leading-relaxed">
                        Every single day has a mission. Follow the plan exactly. Each step builds on the last. By Day 30, you have a real agency generating real revenue.
                    </p>
</div>
<div className="flex flex-col items-start md:items-end gap-4 flex-shrink-0">
<div className="bg-brand-accent border border-brand-border rounded-xl p-5 min-w-[200px]">
<div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-2">Overall Progress</div>
<div className="font-display text-4xl font-800 text-brand-gold mb-1">Day 14</div>
<div className="text-brand-light text-xs mb-3">of 30 • 57% complete</div>
<div className="h-2 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-brand-gold rounded-full transition-all" style={{ width: "57%" }}></div>
</div>
<div className="flex justify-between mt-1.5">
<span className="text-brand-muted text-[10px]">Day 1</span>
<span className="text-brand-gold text-[10px] font-semibold">Day 30</span>
</div>
</div>
</div>
</div>
</section>
          </>
        );

        export default WarpHeroSection;
