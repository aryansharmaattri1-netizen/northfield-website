import React from "react";

        const PhaseOverviewRow = () => (
          <>
            <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8" id="overview-row">
<div className="bg-brand-card border border-brand-border rounded-xl p-5 relative overflow-hidden group hover:border-brand-gold/40 transition-all" id="phase-1-card">
<div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold opacity-5 rounded-full blur-2xl"></div>
<div className="flex items-center justify-between mb-3">
<span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">Phase 1</span>
<span className="bg-green-400/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Complete</span>
</div>
<div className="font-display text-lg font-700 text-brand-white mb-1">Foundation</div>
<div className="text-brand-muted text-xs mb-3">Days 1–7 • Setup &amp; Positioning</div>
<div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-green-400 rounded-full" style={{ width: "100%" }}></div>
</div>
<div className="text-brand-muted text-[10px] mt-1.5">7/7 days done</div>
</div>
<div className="bg-brand-card border border-brand-gold/30 rounded-xl p-5 relative overflow-hidden group transition-all" id="phase-2-card">
<div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold opacity-10 rounded-full blur-2xl"></div>
<div className="flex items-center justify-between mb-3">
<span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">Phase 2</span>
<span className="bg-brand-gold/20 text-brand-gold text-[10px] font-bold px-2 py-0.5 rounded uppercase">Active</span>
</div>
<div className="font-display text-lg font-700 text-brand-white mb-1">Outreach Blitz</div>
<div className="text-brand-muted text-xs mb-3">Days 8–14 • Content + DMs</div>
<div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-brand-gold rounded-full" style={{ width: "100%" }}></div>
</div>
<div className="text-brand-gold text-[10px] mt-1.5 font-semibold">7/7 days done</div>
</div>
<div className="bg-brand-card border border-brand-border rounded-xl p-5 relative overflow-hidden group hover:border-brand-gold/20 transition-all" id="phase-3-card">
<div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 opacity-5 rounded-full blur-2xl"></div>
<div className="flex items-center justify-between mb-3">
<span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">Phase 3</span>
<span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Upcoming</span>
</div>
<div className="font-display text-lg font-700 text-brand-white mb-1">Close &amp; Deliver</div>
<div className="text-brand-muted text-xs mb-3">Days 15–21 • Sales + Onboarding</div>
<div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{ width: "0%" }}></div>
</div>
<div className="text-brand-muted text-[10px] mt-1.5">0/7 days done</div>
</div>
<div className="bg-brand-card border border-brand-border rounded-xl p-5 relative overflow-hidden group hover:border-brand-gold/20 transition-all" id="phase-4-card">
<div className="absolute top-0 right-0 w-20 h-20 bg-purple-500 opacity-5 rounded-full blur-2xl"></div>
<div className="flex items-center justify-between mb-3">
<span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">Phase 4</span>
<span className="bg-brand-border/60 text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Locked</span>
</div>
<div className="font-display text-lg font-700 text-brand-white mb-1">Scale &amp; Hire</div>
<div className="text-brand-muted text-xs mb-3">Days 22–30 • Systems + Team</div>
<div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-purple-500 rounded-full" style={{ width: "0%" }}></div>
</div>
<div className="text-brand-muted text-[10px] mt-1.5">0/9 days done</div>
</div>
</section>
          </>
        );

        export default PhaseOverviewRow;
