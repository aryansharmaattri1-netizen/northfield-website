import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

        const PerformancePanel = () => (
          <>
            <section className="tab-content hidden" id="tab-content-performance">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
<div className="xl:col-span-2 flex flex-col gap-5">
<div className="flex items-center justify-between flex-wrap gap-3">
<div>
<h3 className="font-display font-700 text-brand-white text-base">Performance Notes</h3>
<p className="text-brand-muted text-xs mt-0.5">Track what works. Double down on winners. Kill what doesn't convert.</p>
</div>
<button className="bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-all flex items-center gap-2">
<FontAwesomeIcon icon={faPlus} /> Add Note
                        </button>
</div>
{/* Performance Chart */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="performance-chart-card">
<div className="px-6 py-4 border-b border-brand-border flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h4 className="font-display font-700 text-brand-white text-sm">Reel Performance — Last 14 Days</h4>
</div>
<select className="bg-brand-accent border border-brand-border rounded-lg px-3 py-1.5 text-brand-light text-xs focus:border-brand-gold/40 transition-all">
<option>DMs Generated</option>
<option>Views</option>
<option>Saves</option>
<option>Shares</option>
</select>
</div>
<div id="performance-chart" style={{ height: "260px" }}></div>
</div>
{/* Performance Log */}
<div className="flex flex-col gap-3" id="performance-log">
{/* Post 1 - Winner */}
<div className="bg-brand-card border border-green-400/30 rounded-xl overflow-hidden" id="perf-1">
<div className="px-5 py-3 border-b border-brand-border flex items-center justify-between" style={{ background: "linear-gradient(90deg, rgba(74,222,128,0.05) 0%, transparent 100%)" }}>
<div className="flex items-center gap-2">
<span className="bg-green-400/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">🏆 Winner</span>
<span className="text-brand-muted text-[10px]">Day 12 — Jun 1</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Reel</span>
</div>
<span className="text-green-400 text-xs font-bold">12 DMs</span>
</div>
<div className="px-5 py-4">
<h4 className="font-display font-700 text-brand-white text-sm mb-2">"The #1 mistake SaaS founders make when hiring their first VA"</h4>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
<div className="bg-brand-accent rounded-lg p-2.5 text-center">
<div className="font-display font-700 text-brand-white text-base">48K</div>
<div className="text-brand-muted text-[10px]">Views</div>
</div>
<div className="bg-brand-accent rounded-lg p-2.5 text-center">
<div className="font-display font-700 text-green-400 text-base">12</div>
<div className="text-brand-muted text-[10px]">DMs</div>
</div>
<div className="bg-brand-accent rounded-lg p-2.5 text-center">
<div className="font-display font-700 text-brand-white text-base">892</div>
<div className="text-brand-muted text-[10px]">Saves</div>
</div>
<div className="bg-brand-accent rounded-lg p-2.5 text-center">
<div className="font-display font-700 text-brand-white text-base">4.2%</div>
<div className="text-brand-muted text-[10px]">Engage</div>
</div>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-1">Performance Note</label>
<p className="text-brand-light text-xs leading-relaxed">Pain-point angle + specific niche (VA hiring) = massive resonance. Hook "You\'re about to waste $2K on the wrong VA" stopped scroll immediately. Repeat this format. Next: do a follow-up carousel on the exact VA hiring process.</p>
</div>
</div>
</div>
{/* Post 2 - Good */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="perf-2">
<div className="px-5 py-3 border-b border-brand-border flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="bg-brand-gold/10 text-brand-gold text-[10px] font-bold px-2 py-0.5 rounded uppercase">Good</span>
<span className="text-brand-muted text-[10px]">Day 10 — May 30</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Reel</span>
</div>
<span className="text-brand-gold text-xs font-bold">7 DMs</span>
</div>
<div className="px-5 py-4">
<h4 className="font-display font-700 text-brand-white text-sm mb-2">"I went from $0 to $5K MRR in 2 weeks — here\'s the exact system"</h4>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
<div className="bg-brand-accent rounded-lg p-2.5 text-center">
<div className="font-display font-700 text-brand-white text-base">22K</div>
<div className="text-brand-muted text-[10px]">Views</div>
</div>
<div className="bg-brand-accent rounded-lg p-2.5 text-center">
<div className="font-display font-700 text-brand-gold text-base">7</div>
<div className="text-brand-muted text-[10px]">DMs</div>
</div>
<div className="bg-brand-accent rounded-lg p-2.5 text-center">
<div className="font-display font-700 text-brand-white text-base">445</div>
<div className="text-brand-muted text-[10px]">Saves</div>
</div>
<div className="bg-brand-accent rounded-lg p-2.5 text-center">
<div className="font-display font-700 text-brand-white text-base">3.1%</div>
<div className="text-brand-muted text-[10px]">Engage</div>
</div>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-1">Performance Note</label>
<p className="text-brand-light text-xs leading-relaxed">Authority/proof angle works but less than pain-point. Good saves = people want the info but aren\'t in buying mode yet. Use as awareness content, not conversion content.</p>
</div>
</div>
</div>
{/* Post 3 - Weak */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden opacity-70" id="perf-3">
<div className="px-5 py-3 border-b border-brand-border flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="bg-red-500/10 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Weak</span>
<span className="text-brand-muted text-[10px]">Day 8 — May 28</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Carousel</span>
</div>
<span className="text-red-400 text-xs font-bold">1 DM</span>
</div></div></div></div></div></section>
          </>
        );

        export default PerformancePanel;
