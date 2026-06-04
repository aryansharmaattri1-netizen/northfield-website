import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faPlus, faScroll, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

        const FollowUpTabSection = () => (
          <>
            <section className="outreach-tab-content hidden" id="tab-content-follow-up">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
<div className="xl:col-span-2 flex flex-col gap-5">
<div className="flex items-center justify-between flex-wrap gap-3">
<div>
<h3 className="font-display font-700 text-brand-white text-base">Follow-Up Sequences</h3>
<p className="text-brand-muted text-xs mt-0.5">Most closes happen on follow-up 2 or 3. Never give up after one message.</p>
</div>
<button className="bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-all flex items-center gap-2">
<FontAwesomeIcon icon={faPlus} /> New Sequence
                        </button>
</div>
{/* Sequence 1 - Standard Cold DM */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="sequence-1">
<div className="px-6 py-4 border-b border-brand-border flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h4 className="font-display font-700 text-brand-white text-sm">Standard Cold DM Sequence</h4>
<span className="bg-green-400/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Active</span>
</div>
<span className="text-brand-muted text-[10px] font-bold uppercase">5-Touch Sequence</span>
</div>
<div className="px-6 py-5">
<div className="relative">
<div className="absolute left-4 top-0 bottom-0 w-px bg-brand-border"></div>
<div className="space-y-4">
<div className="relative flex items-start gap-5 pl-10">
<div className="absolute left-0 w-8 h-8 rounded-full bg-brand-gold border-2 border-brand-gold flex items-center justify-center flex-shrink-0">
<span className="text-brand-black font-bold text-xs">1</span>
</div>
<div className="flex-1 bg-brand-accent border border-brand-gold/20 rounded-xl p-4">
<div className="flex items-center justify-between mb-2 flex-wrap gap-2">
<span className="text-brand-gold text-xs font-bold uppercase tracking-wide">Day 1 — Initial DM</span>
<span className="text-brand-muted text-[10px]">Personalized cold open</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">"Hey [Name] — love what you're building. Quick question: are you currently happy with your MRR growth, or is that something you're actively trying to fix?"</p>
</div>
</div>
<div className="relative flex items-start gap-5 pl-10">
<div className="absolute left-0 w-8 h-8 rounded-full bg-brand-accent border-2 border-brand-border flex items-center justify-center flex-shrink-0">
<span className="text-brand-muted font-bold text-xs">2</span>
</div>
<div className="flex-1 bg-brand-accent border border-brand-border rounded-xl p-4">
<div className="flex items-center justify-between mb-2 flex-wrap gap-2">
<span className="text-brand-light text-xs font-bold uppercase tracking-wide">Day 3 — Value Add</span>
<span className="text-brand-muted text-[10px]">If no reply</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">"Hey [Name] — just shared a reel on the exact framework we use to get agencies to $10K MRR in 30 days. Thought you'd find it useful. [link]"</p>
</div>
</div>
<div className="relative flex items-start gap-5 pl-10">
<div className="absolute left-0 w-8 h-8 rounded-full bg-brand-accent border-2 border-brand-border flex items-center justify-center flex-shrink-0">
<span className="text-brand-muted font-bold text-xs">3</span>
</div>
<div className="flex-1 bg-brand-accent border border-brand-border rounded-xl p-4">
<div className="flex items-center justify-between mb-2 flex-wrap gap-2">
<span className="text-brand-light text-xs font-bold uppercase tracking-wide">Day 5 — Loom</span>
<span className="text-brand-muted text-[10px]">If no reply</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">"[Name] — I recorded a 2-minute Loom specifically for you. Walked through exactly how I'd approach your situation. Worth 2 mins? [loom link]"</p>
</div>
</div>
<div className="relative flex items-start gap-5 pl-10">
<div className="absolute left-0 w-8 h-8 rounded-full bg-brand-accent border-2 border-brand-border flex items-center justify-center flex-shrink-0">
<span className="text-brand-muted font-bold text-xs">4</span>
</div>
<div className="flex-1 bg-brand-accent border border-brand-border rounded-xl p-4">
<div className="flex items-center justify-between mb-2 flex-wrap gap-2">
<span className="text-brand-light text-xs font-bold uppercase tracking-wide">Day 8 — Bump</span>
<span className="text-brand-muted text-[10px]">If no reply</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">"Hey [Name] — just circling back. I know you're busy. Still happy to share the framework if it's relevant. No pressure either way."</p>
</div>
</div>
<div className="relative flex items-start gap-5 pl-10">
<div className="absolute left-0 w-8 h-8 rounded-full bg-red-500/20 border-2 border-red-500/30 flex items-center justify-center flex-shrink-0">
<span className="text-red-400 font-bold text-xs">5</span>
</div>
<div className="flex-1 bg-brand-accent border border-red-500/10 rounded-xl p-4">
<div className="flex items-center justify-between mb-2 flex-wrap gap-2">
<span className="text-red-400 text-xs font-bold uppercase tracking-wide">Day 14 — Break-Up</span>
<span className="text-brand-muted text-[10px]">Final message</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">"Hey [Name] — I'll leave you alone after this. If scaling your agency is ever a priority, I'm here. Wishing you the best either way."</p>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Sequence 2 - Inbound DM */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="sequence-2">
<div className="px-6 py-4 border-b border-brand-border flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<h4 className="font-display font-700 text-brand-white text-sm">Inbound DM Qualification Sequence</h4>
<span className="bg-green-400/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Active</span>
</div>
<span className="text-brand-muted text-[10px] font-bold uppercase">3-Touch Fast Track</span>
</div>
<div className="px-6 py-5">
<div className="relative">
<div className="absolute left-4 top-0 bottom-0 w-px bg-brand-border"></div>
<div className="space-y-4">
<div className="relative flex items-start gap-5 pl-10">
<div className="absolute left-0 w-8 h-8 rounded-full bg-green-400 border-2 border-green-400 flex items-center justify-center flex-shrink-0">
<span className="text-brand-black font-bold text-xs">1</span>
</div>
<div className="flex-1 bg-brand-accent border border-green-400/20 rounded-xl p-4">
<div className="flex items-center justify-between mb-2 flex-wrap gap-2">
<span className="text-green-400 text-xs font-bold uppercase tracking-wide">Immediate — Qualify</span>
<span className="text-brand-muted text-[10px]">Within 5 minutes</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">"Awesome, glad that resonated! Quick question before I send anything — what's your current MRR and where are you trying to get to in the next 90 days?"</p>
</div>
</div>
<div className="relative flex items-start gap-5 pl-10">
<div className="absolute left-0 w-8 h-8 rounded-full bg-brand-accent border-2 border-brand-border flex items-center justify-center flex-shrink-0">
<span className="text-brand-muted font-bold text-xs">2</span>
</div>
<div className="flex-1 bg-brand-accent border border-brand-border rounded-xl p-4">
<div className="flex items-center justify-between mb-2 flex-wrap gap-2">
<span className="text-brand-light text-xs font-bold uppercase tracking-wide">Same Day — Send Loom</span>
<span className="text-brand-muted text-[10px]">After qualifying answer</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">"Perfect — I recorded a quick Loom walking through exactly how I'd approach your specific situation. Takes 2 mins. [loom link]"</p>
</div>
</div>
<div className="relative flex items-start gap-5 pl-10">
<div className="absolute left-0 w-8 h-8 rounded-full bg-brand-accent border-2 border-brand-border flex items-center justify-center flex-shrink-0">
<span className="text-brand-muted font-bold text-xs">3</span>
</div>
<div className="flex-1 bg-brand-accent border border-brand-border rounded-xl p-4">
<div className="flex items-center justify-between mb-2 flex-wrap gap-2">
<span className="text-brand-light text-xs font-bold uppercase tracking-wide">Day 2 — Book Call</span>
<span className="text-brand-muted text-[10px]">After Loom sent</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">"Based on what you shared, I think there's a real path to [their goal]. Want to jump on a 20-min call this week to map it out? Here's my calendar: [link]"</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Follow-Up Sidebar */}
<div className="flex flex-col gap-5">
{/* Overdue Follow-Ups */}
<div className="bg-brand-card border border-yellow-400/30 rounded-xl overflow-hidden" id="overdue-followups">
<div className="px-5 py-4 border-b border-brand-border flex items-center justify-between" style={{ background: "linear-gradient(90deg, rgba(250,204,21,0.04) 0%, transparent 100%)" }}>
<div className="flex items-center gap-2">
<FontAwesomeIcon icon={faTriangleExclamation} className="text-yellow-400 text-sm" />
<h3 className="font-display font-700 text-brand-white text-sm">Overdue Follow-Ups</h3>
</div>
<span className="bg-yellow-400/10 text-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded-full">4 overdue</span>
</div>
<div className="divide-y divide-brand-border">
<div className="px-5 py-3 flex items-center gap-3 hover:bg-brand-accent/30 transition-all">
<img alt="" className="w-8 h-8 rounded-full object-cover flex-shrink-0" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"/>
<div className="flex-1 min-w-0">
<p className="text-brand-white text-xs font-semibold">Jordan Reeves</p>
<p className="text-brand-muted text-[10px]">FU #2 overdue by 1 day</p>
</div>
<button className="text-brand-gold text-[10px] font-bold hover:underline flex-shrink-0">Send</button>
</div>
<div className="px-5 py-3 flex items-center gap-3 hover:bg-brand-accent/30 transition-all">
<img alt="" className="w-8 h-8 rounded-full object-cover flex-shrink-0" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"/>
<div className="flex-1 min-w-0">
<p className="text-brand-white text-xs font-semibold">Ethan Brooks</p>
<p className="text-brand-muted text-[10px]">FU #1 overdue by 2 days</p>
</div>
<button className="text-brand-gold text-[10px] font-bold hover:underline flex-shrink-0">Send</button>
</div>
<div className="px-5 py-3 flex items-center gap-3 hover:bg-brand-accent/30 transition-all">
<img alt="" className="w-8 h-8 rounded-full object-cover flex-shrink-0" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"/>
<div className="flex-1 min-w-0">
<p className="text-brand-white text-xs font-semibold">Derek Holt</p>
<p className="text-brand-muted text-[10px]">FU #3 overdue by 3 days</p>
</div>
<button className="text-brand-gold text-[10px] font-bold hover:underline flex-shrink-0">Send</button>
</div>
<div className="px-5 py-3 flex items-center gap-3 hover:bg-brand-accent/30 transition-all">
<img alt="" className="w-8 h-8 rounded-full object-cover flex-shrink-0" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"/>
<div className="flex-1 min-w-0">
<p className="text-brand-white text-xs font-semibold">Ryan Cho</p>
<p className="text-brand-muted text-[10px]">FU #1 overdue by 1 day</p>
</div>
<button className="text-brand-gold text-[10px] font-bold hover:underline flex-shrink-0">Send</button>
</div>
</div>
<div className="px-5 py-3">
<button className="w-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wide py-2 rounded-lg hover:bg-yellow-400/20 transition-all flex items-center justify-center gap-2">
<FontAwesomeIcon icon={faBolt} /> Send All Follow-Ups
                            </button>
</div>
</div>
{/* Follow-Up Rules */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="followup-rules-card">
<div className="px-5 py-4 border-b border-brand-border flex items-center gap-2">
<FontAwesomeIcon icon={faScroll} className="text-brand-gold text-sm" />
<h3 className="font-display font-700 text-brand-white text-sm">Follow-Up Rules</h3>
</div>
<div className="px-5 py-4 space-y-3">
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-brand-black font-bold text-[9px]">1</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">Follow up <span className="text-brand-gold font-semibold">within 24 hours</span> of sending initial message if no reply.</p>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-brand-black font-bold text-[9px]">2</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">Each follow-up must <span className="text-brand-gold font-semibold">add new value</span>. Never just "checking in."</p>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-brand-black font-bold text-[9px]">3</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">Maximum <span className="text-brand-gold font-semibold">5 touches</span> then mark dead and move on.</p>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-brand-black font-bold text-[9px]">4</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">Always <span className="text-brand-gold font-semibold">end with a question</span>. Never leave the ball in your court.</p>
</div>
</div>
</div>
{/* Sequence Performance */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="sequence-perf-card">
<div className="px-5 py-4 border-b border-brand-border flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Sequence Performance</h3>
</div>
<div id="sequence-chart" style={{ height: "180px" }}></div>
<div className="px-5 pb-4">
<p className="text-brand-muted text-[10px] leading-relaxed">Touch 2 and 3 generate the most replies. Never stop at Touch 1.</p>
</div>
</div>
</div>
</div>
</section>
          </>
        );

        export default FollowUpTabSection;
