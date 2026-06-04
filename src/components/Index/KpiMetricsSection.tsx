import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faClock, faCrosshairs, faDollarSign, faGaugeHigh, faMountainSun, faRocket } from '@fortawesome/free-solid-svg-icons';

        const KpiMetricsSection = () => (
          <>
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8" id="kpi-metrics">
{/* Current MRR */}
<div className="bg-brand-card border border-brand-border rounded-xl p-6 relative overflow-hidden group hover:border-brand-gold/40 transition-all" id="kpi-mrr">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-all"></div>
<div className="flex items-center justify-between mb-3">
<span className="text-brand-muted text-xs font-semibold uppercase tracking-widest">Current MRR</span>
<div className="w-8 h-8 bg-brand-gold/10 rounded-lg flex items-center justify-center">
<FontAwesomeIcon icon={faDollarSign} className="text-brand-gold text-sm" />
</div>
</div>
<div className="font-display text-3xl font-800 text-brand-white mb-1">$47,200</div>
<div className="flex items-center gap-2">
<span className="text-green-400 text-xs font-semibold flex items-center gap-1">
<FontAwesomeIcon icon={faArrowTrendUp} className="text-xs" /> +$8,400
                    </span>
<span className="text-brand-muted text-xs">vs last month</span>
</div>
<div className="mt-4 h-1.5 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-brand-gold rounded-full" style={{ width: "47%" }}></div>
</div>
<div className="flex justify-between mt-1.5">
<span className="text-brand-muted text-[10px]">$0</span>
<span className="text-brand-muted text-[10px]">$100K target</span>
</div>
</div>
{/* 90-Day Target */}
<div className="bg-brand-card border border-brand-border rounded-xl p-6 relative overflow-hidden group hover:border-brand-gold/40 transition-all" id="kpi-90day">
<div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-all"></div>
<div className="flex items-center justify-between mb-3">
<span className="text-brand-muted text-xs font-semibold uppercase tracking-widest">90-Day Target</span>
<div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
<FontAwesomeIcon icon={faCrosshairs} className="text-blue-400 text-sm" />
</div>
</div>
<div className="font-display text-3xl font-800 text-brand-white mb-1">$250K</div>
<div className="flex items-center gap-2">
<span className="text-blue-400 text-xs font-semibold flex items-center gap-1">
<FontAwesomeIcon icon={faClock} className="text-xs" /> 76 days left
                    </span>
<span className="text-brand-muted text-xs">to hit target</span>
</div>
<div className="mt-4 h-1.5 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{ width: "19%" }}></div>
</div>
<div className="flex justify-between mt-1.5">
<span className="text-brand-muted text-[10px]">$47,200 now</span>
<span className="text-brand-muted text-[10px]">$250K goal</span>
</div>
</div>
{/* Daily Execution Score */}
<div className="bg-brand-card border border-brand-border rounded-xl p-6 relative overflow-hidden group hover:border-brand-gold/40 transition-all" id="kpi-score">
<div className="absolute top-0 right-0 w-24 h-24 bg-green-500 opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-all"></div>
<div className="flex items-center justify-between mb-3">
<span className="text-brand-muted text-xs font-semibold uppercase tracking-widest">Exec Score</span>
<div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
<FontAwesomeIcon icon={faGaugeHigh} className="text-green-400 text-sm" />
</div>
</div>
<div className="font-display text-3xl font-800 text-green-400 mb-1">84<span className="text-brand-muted text-lg">/100</span></div>
<div className="flex items-center gap-2">
<span className="text-green-400 text-xs font-semibold">Strong</span>
<span className="text-brand-muted text-xs">— 3 tasks left today</span>
</div>
<div className="mt-4 h-1.5 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-green-400 rounded-full" style={{ width: "84%" }}></div>
</div>
<div className="flex justify-between mt-1.5">
<span className="text-brand-muted text-[10px]">Today</span>
<span className="text-green-400 text-[10px] font-semibold">84%</span>
</div>
</div>
{/* 12-Month Vision */}
<div className="bg-brand-card border border-brand-border rounded-xl p-6 relative overflow-hidden group hover:border-brand-gold/40 transition-all" id="kpi-vision">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-all"></div>
<div className="flex items-center justify-between mb-3">
<span className="text-brand-muted text-xs font-semibold uppercase tracking-widest">12-Mo Vision</span>
<div className="w-8 h-8 bg-brand-gold/10 rounded-lg flex items-center justify-center">
<FontAwesomeIcon icon={faMountainSun} className="text-brand-gold text-sm" />
</div>
</div>
<div className="font-display text-3xl font-800 text-brand-white mb-1">$1M<span className="text-brand-muted text-lg">/mo</span></div>
<div className="flex items-center gap-2">
<span className="text-brand-gold text-xs font-semibold flex items-center gap-1">
<FontAwesomeIcon icon={faRocket} className="text-xs" /> 4.7% there
                    </span>
<span className="text-brand-muted text-xs">keep going</span>
</div>
<div className="mt-4 h-1.5 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-brand-gold rounded-full" style={{ width: "4.7%" }}></div>
</div>
<div className="flex justify-between mt-1.5">
<span className="text-brand-muted text-[10px]">$47.2K now</span>
<span className="text-brand-muted text-[10px]">$1M target</span>
</div>
</div>
</section>
          </>
        );

        export default KpiMetricsSection;
