import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram as faInstagramBrands, faLinkedin as faLinkedinBrands, faTiktok as faTiktokBrands, faTwitter as faTwitterBrands } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faCalendar, faClock, faEllipsis, faFilm, faFilter, faImages, faLayerGroup, faPlus, faRocket, faVideo } from '@fortawesome/free-solid-svg-icons';

        const ReelQueuePanel = () => (
          <>
            <section className="tab-content hidden" id="tab-content-reel-queue">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
<div className="xl:col-span-2 flex flex-col gap-5">
{/* Queue Header */}
<div className="flex items-center justify-between flex-wrap gap-3">
<div>
<h3 className="font-display font-700 text-brand-white text-base">Publishing Queue</h3>
<p className="text-brand-muted text-xs mt-0.5">8 drafts scheduled for the next 8 days</p>
</div>
<div className="flex items-center gap-2">
<button className="border border-brand-border hover:border-brand-gold/40 text-brand-light text-xs font-semibold uppercase tracking-wide px-4 py-2 rounded-lg transition-all flex items-center gap-2">
<FontAwesomeIcon icon={faFilter} /> Filter
                            </button>
<button className="bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-all flex items-center gap-2">
<FontAwesomeIcon icon={faPlus} /> Add Draft
                            </button>
</div>
</div>
{/* Queue Items */}
<div className="flex flex-col gap-3" id="queue-items">
{/* Queue Item - Today */}
<div className="bg-brand-card border-2 border-brand-gold rounded-xl overflow-hidden shadow-lg shadow-brand-gold/10" id="queue-today">
<div className="px-5 py-3 border-b border-brand-border flex items-center justify-between" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.08) 0%, transparent 100%)" }}>
<div className="flex items-center gap-2">
<span className="bg-brand-gold text-brand-black text-[10px] font-bold px-2 py-0.5 rounded uppercase animate-pulse">Today — Publish Now</span>
<span className="text-brand-muted text-[10px]">9:00 AM</span>
</div>
<div className="flex items-center gap-2">
<span className="bg-green-400/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Ready</span>
<FontAwesomeIcon icon={faFilm} className="text-brand-gold text-xs" />
</div>
</div>
<div className="px-5 py-4 flex items-start gap-4">
<div className="w-16 h-16 bg-brand-accent border border-brand-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
<FontAwesomeIcon icon={faFilm} className="text-brand-gold text-2xl" />
</div>
<div className="flex-1 min-w-0">
<h4 className="font-display font-700 text-brand-white text-sm mb-1">"Why your SaaS agency loses clients after 60 days"</h4>
<p className="text-brand-muted text-xs mb-2">Pain-point reel. Hook: 70% stat. 3 root causes. DM CTA at end.</p>
<div className="flex items-center gap-3 flex-wrap">
<span className="flex items-center gap-1 text-[10px] text-brand-muted"><FontAwesomeIcon icon={faInstagramBrands} className="text-pink-400 text-xs" /> Instagram Reels</span>
<span className="flex items-center gap-1 text-[10px] text-brand-muted"><FontAwesomeIcon icon={faTiktokBrands} className="text-white text-xs" /> TikTok</span>
<span className="flex items-center gap-1 text-[10px] text-brand-muted"><FontAwesomeIcon icon={faClock} className="text-[9px]" /> :45 sec</span>
</div>
</div>
<div className="flex flex-col gap-2 flex-shrink-0">
<button className="bg-brand-gold text-brand-black text-[10px] font-bold uppercase px-4 py-2 rounded-lg hover:bg-brand-gold-light transition-all flex items-center gap-1">
<FontAwesomeIcon icon={faRocket} /> Publish
                                    </button>
<button className="border border-brand-border text-brand-muted text-[10px] font-bold uppercase px-4 py-2 rounded-lg hover:border-brand-gold/30 transition-all">Edit</button>
</div>
</div>
</div>
{/* Queue Item - Tomorrow */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden group hover:border-brand-gold/20 transition-all" id="queue-tomorrow">
<div className="px-5 py-3 border-b border-brand-border flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Tomorrow</span>
<span className="text-brand-muted text-[10px]">9:00 AM</span>
</div>
<div className="flex items-center gap-2">
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Draft</span>
<FontAwesomeIcon icon={faImages} className="text-purple-400 text-xs" />
</div>
</div>
<div className="px-5 py-4 flex items-start gap-4">
<div className="w-16 h-16 bg-brand-accent border border-brand-border rounded-lg flex items-center justify-center flex-shrink-0">
<FontAwesomeIcon icon={faImages} className="text-purple-400 text-2xl" />
</div>
<div className="flex-1 min-w-0">
<h4 className="font-display font-700 text-brand-white text-sm mb-1">"$0 to $10K MRR in 30 days — The Exact Steps"</h4>
<p className="text-brand-muted text-xs mb-2">10-slide carousel. Authority proof. Each slide = one action with numbers.</p>
<div className="flex items-center gap-3 flex-wrap">
<span className="flex items-center gap-1 text-[10px] text-brand-muted"><FontAwesomeIcon icon={faInstagramBrands} className="text-pink-400 text-xs" /> Instagram</span>
<span className="flex items-center gap-1 text-[10px] text-brand-muted"><FontAwesomeIcon icon={faLinkedinBrands} className="text-blue-500 text-xs" /> LinkedIn</span>
<span className="flex items-center gap-1 text-[10px] text-brand-muted"><FontAwesomeIcon icon={faLayerGroup} className="text-[9px]" /> 10 slides</span>
</div>
</div>
<div className="flex flex-col gap-2 flex-shrink-0">
<button className="border border-brand-gold/30 text-brand-gold text-[10px] font-bold uppercase px-4 py-2 rounded-lg hover:bg-brand-gold/10 transition-all">Schedule</button>
<button className="border border-brand-border text-brand-muted text-[10px] font-bold uppercase px-4 py-2 rounded-lg hover:border-brand-gold/30 transition-all">Edit</button>
</div>
</div>
</div>
{/* Queue Items Day 3-5 */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden group hover:border-brand-gold/20 transition-all" id="queue-day3">
<div className="px-5 py-3 border-b border-brand-border flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-brand-muted text-[10px] font-bold">Jun 5</span>
<span className="text-brand-muted text-[10px]">9:00 AM</span>
</div>
<div className="flex items-center gap-2">
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Draft</span>
<FontAwesomeIcon icon={faFilm} className="text-blue-400 text-xs" />
</div>
</div>
<div className="px-5 py-4 flex items-start gap-4">
<div className="w-16 h-16 bg-brand-accent border border-brand-border rounded-lg flex items-center justify-center flex-shrink-0">
<FontAwesomeIcon icon={faFilm} className="text-blue-400 text-2xl" />
</div>
<div className="flex-1 min-w-0">
<h4 className="font-display font-700 text-brand-white text-sm mb-1">"Stop posting motivation. Here's what gets clients."</h4>
<p className="text-brand-muted text-xs mb-2">Contrarian reel. Data-backed. Show my DM numbers from pain-point vs inspiration posts.</p>
<div className="flex items-center gap-3 flex-wrap">
<span className="flex items-center gap-1 text-[10px] text-brand-muted"><FontAwesomeIcon icon={faInstagramBrands} className="text-pink-400 text-xs" /> Instagram Reels</span>
<span className="flex items-center gap-1 text-[10px] text-brand-muted"><FontAwesomeIcon icon={faClock} className="text-[9px]" /> :30 sec</span>
</div>
</div>
<div className="flex flex-col gap-2 flex-shrink-0">
<button className="border border-brand-gold/30 text-brand-gold text-[10px] font-bold uppercase px-4 py-2 rounded-lg hover:bg-brand-gold/10 transition-all">Schedule</button>
<button className="border border-brand-border text-brand-muted text-[10px] font-bold uppercase px-4 py-2 rounded-lg hover:border-brand-gold/30 transition-all">Edit</button>
</div>
</div>
</div>
{/* More queue items collapsed */}
<div className="bg-brand-card border border-dashed border-brand-border rounded-xl p-4 flex items-center justify-between" id="queue-more">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
<FontAwesomeIcon icon={faEllipsis} className="text-brand-muted text-sm" />
</div>
<div>
<p className="text-brand-light text-xs font-semibold">5 more drafts in queue</p>
<p className="text-brand-muted text-[10px]">Jun 6 – Jun 10 • Mix of Reels &amp; Carousels</p>
</div>
</div>
<Link to="/content-engine" className="text-brand-gold text-xs font-semibold hover:underline flex items-center gap-1">
                                View All <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
</Link>
</div>
</div>
</div>
{/* Queue Sidebar */}
<div className="flex flex-col gap-5">
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="queue-stats-card">
<div className="px-5 py-4 border-b border-brand-border flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Queue Stats</h3>
</div>
<div id="queue-chart" style={{ height: "220px" }}></div>
<div className="px-5 pb-4 grid grid-cols-2 gap-3">
<div className="bg-brand-accent rounded-lg p-3 text-center">
<div className="font-display font-700 text-brand-gold text-xl">8</div>
<div className="text-brand-muted text-[10px] uppercase tracking-wide">In Queue</div>
</div>
<div className="bg-brand-accent rounded-lg p-3 text-center">
<div className="font-display font-700 text-green-400 text-xl">5</div>
<div className="text-brand-muted text-[10px] uppercase tracking-wide">Published</div>
</div>
</div>
</div>
<div className="bg-brand-card border border-brand-gold/30 rounded-xl p-5 relative overflow-hidden" id="batch-record-card">
<div className="absolute inset-0 bg-brand-gold opacity-[0.03]"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3">
<FontAwesomeIcon icon={faVideo} className="text-brand-gold text-sm" />
<span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">Batch Recording Day</span>
</div>
<p className="font-display text-brand-white text-sm font-700 mb-2">Record 5 Reels in One Session</p>
<p className="text-brand-muted text-xs leading-relaxed mb-4">Every Wednesday = batch recording day. Prep scripts Monday. Record all 5 on Wednesday. Edit and schedule Thursday. Never scramble daily.</p>
<button className="w-full bg-brand-gold text-brand-black text-xs font-bold uppercase tracking-wide py-2.5 rounded-lg hover:bg-brand-gold-light transition-all flex items-center justify-center gap-2">
<FontAwesomeIcon icon={faCalendar} /> Schedule Batch Day
                            </button>
</div>
</div>
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="platform-checklist-card">
<div className="px-5 py-4 border-b border-brand-border flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Platform Priority</h3>
</div>
<div className="px-5 py-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<FontAwesomeIcon icon={faInstagramBrands} className="text-pink-400 text-base" />
<div>
<p className="text-brand-white text-xs font-semibold">Instagram Reels</p>
<p className="text-brand-muted text-[10px]">Primary — highest DM rate</p>
</div>
</div>
<span className="bg-green-400/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Priority 1</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<FontAwesomeIcon icon={faLinkedinBrands} className="text-blue-500 text-base" />
<div>
<p className="text-brand-white text-xs font-semibold">LinkedIn</p>
<p className="text-brand-muted text-[10px]">B2B — carousels &amp; articles</p>
</div>
</div>
<span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Priority 2</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<FontAwesomeIcon icon={faTiktokBrands} className="text-white text-base" />
<div>
<p className="text-brand-white text-xs font-semibold">TikTok</p>
<p className="text-brand-muted text-[10px]">Repurpose IG Reels</p>
</div>
</div>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Priority 3</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<FontAwesomeIcon icon={faTwitterBrands} className="text-sky-400 text-base" />
<div>
<p className="text-brand-white text-xs font-semibold">Twitter / X</p>
<p className="text-brand-muted text-[10px]">Threads — thought leadership</p>
</div>
</div>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Priority 4</span>
</div>
</div>
</div>
</div>
</div>
</section>
          </>
        );

        export default ReelQueuePanel;
