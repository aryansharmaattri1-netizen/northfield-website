import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendar, faCheck, faCheckCircle, faClock, faComments, faEllipsis, faExclamation, faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';

        const ConversationLogTabSection = () => (
          <>
            <section className="outreach-tab-content hidden" id="tab-content-conversation-log">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
<div className="xl:col-span-2 flex flex-col gap-5">
{/* Log New Conversation */}
<div className="bg-brand-card border border-brand-gold/30 rounded-xl overflow-hidden" id="log-conversation-card">
<div className="px-6 py-4 border-b border-brand-border flex items-center justify-between" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.06) 0%, transparent 100%)" }}>
<div className="flex items-center gap-2">
<FontAwesomeIcon icon={faPlus} className="text-brand-gold text-sm" />
<h3 className="font-display font-700 text-brand-white text-sm">Log New Conversation</h3>
</div>
<span className="text-brand-muted text-[10px] font-bold uppercase tracking-widest">Every convo counts.</span>
</div>
<div className="px-6 py-5 space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Prospect Name</label>
<input className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-brand-white text-sm placeholder-brand-muted focus:border-brand-gold/50 transition-all" placeholder="Full name" type="text"/>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Current MRR</label>
<input className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-brand-white text-sm placeholder-brand-muted focus:border-brand-gold/50 transition-all" placeholder="e.g. $5,000/mo or Pre-revenue" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Platform</label>
<select className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-brand-white text-sm focus:border-brand-gold/50 transition-all">
<option>Instagram</option>
<option>LinkedIn</option>
<option>Twitter/X</option>
<option>Email</option>
<option>Referral</option>
</select>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Status</label>
<select className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-brand-white text-sm focus:border-brand-gold/50 transition-all">
<option>🔥 Hot — Qualify Now</option>
<option>💬 In Conversation</option>
<option>📅 Call Booked</option>
<option>⏳ Follow-Up Needed</option>
<option>❌ Not Qualified</option>
<option>💀 Dead</option>
</select>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Lead Source</label>
<select className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-brand-white text-sm focus:border-brand-gold/50 transition-all">
<option>Inbound DM (Reel)</option>
<option>Cold DM</option>
<option>Reel Commenter</option>
<option>Profile Visit</option>
<option>Referral</option>
</select>
</div>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Conversation Notes</label>
<textarea className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-3 text-brand-white text-sm placeholder-brand-muted focus:border-brand-gold/50 transition-all resize-none" placeholder="What did they say? What's their pain? What's their goal? What objections came up?" rows={3}></textarea>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Next Action</label>
<select className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-brand-white text-sm focus:border-brand-gold/50 transition-all">
<option>Send Loom Video</option>
<option>Book Discovery Call</option>
<option>Send Follow-Up DM</option>
<option>Send Case Study</option>
<option>Send Proposal</option>
<option>No Action Needed</option>
</select>
</div>
<div className="flex items-center gap-3">
<button className="bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-lg transition-all flex items-center gap-2">
<FontAwesomeIcon icon={faPlus} /> Log Conversation
                                </button>
<button className="border border-brand-border hover:border-brand-gold/40 text-brand-light text-xs font-semibold uppercase tracking-wide px-5 py-2.5 rounded-lg transition-all">Clear</button>
</div>
</div>
</div>
{/* Conversation List */}
<div className="flex flex-col gap-3" id="conversation-list">
<div className="flex items-center justify-between flex-wrap gap-3">
<h3 className="font-display font-700 text-brand-white text-sm flex items-center gap-2">
<FontAwesomeIcon icon={faComments} className="text-brand-gold text-xs" />
                                Active Conversations{" "}
                <span className="bg-brand-accent border border-brand-border text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded-full">14 total</span>
</h3>
<div className="flex items-center gap-2">
<input className="bg-brand-accent border border-brand-border rounded-lg px-3 py-1.5 text-brand-light text-xs placeholder-brand-muted focus:border-brand-gold/40 transition-all w-32" placeholder="Search..." type="text"/>
<select className="bg-brand-accent border border-brand-border rounded-lg px-3 py-1.5 text-brand-light text-xs focus:border-brand-gold/40 transition-all">
<option>All Status</option>
<option>Hot</option>
<option>In Conversation</option>
<option>Follow-Up</option>
</select>
</div>
</div>
{/* Conversation 1 - Hot */}
<div className="bg-brand-card border border-brand-gold/40 rounded-xl overflow-hidden hover:border-brand-gold/60 transition-all shadow-lg shadow-brand-gold/5" id="conv-1">
<div className="px-5 py-4 flex items-start gap-4">
<img alt="prospect" className="w-11 h-11 rounded-full object-cover flex-shrink-0 mt-0.5" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1 flex-wrap">
<span className="text-brand-white text-sm font-semibold">Marcus Webb</span>
<span className="bg-red-500/10 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase animate-pulse">🔥 Hot</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Inbound DM</span>
</div>
<p className="text-brand-muted text-xs mb-2">$8K MRR · Instagram · Wants to reach $25K in 60 days · Watched Loom 100%</p>
<p className="text-brand-light text-xs leading-relaxed italic">"That Loom was exactly what I needed to hear. How do we get started?"</p>
<div className="flex items-center gap-4 mt-2 flex-wrap">
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faClock} className="text-[9px]" /> 2 hours ago</span>
<span className="text-brand-gold text-[10px] font-semibold flex items-center gap-1"><FontAwesomeIcon icon={faArrowRight} className="text-[9px]" /> Next: Book Discovery Call</span>
</div>
</div>
<div className="flex flex-col gap-2 flex-shrink-0">
<button className="bg-brand-gold text-brand-black text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:bg-brand-gold-light transition-all whitespace-nowrap">Book Call</button>
<button className="border border-brand-border text-brand-muted text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:border-brand-gold/30 transition-all">Update</button>
</div>
</div>
</div>
{/* Conversation 2 */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden hover:border-brand-gold/20 transition-all" id="conv-2">
<div className="px-5 py-4 flex items-start gap-4">
<img alt="prospect" className="w-11 h-11 rounded-full object-cover flex-shrink-0 mt-0.5" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1 flex-wrap">
<span className="text-brand-white text-sm font-semibold">Priya Nair</span>
<span className="bg-blue-400/10 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">💬 In Conversation</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Reel Commenter</span>
</div>
<p className="text-brand-muted text-xs mb-2">$2K MRR · LinkedIn · Asking about pricing · Qualified on pain</p>
<p className="text-brand-light text-xs leading-relaxed italic">"What does working with you actually look like? Do you have any case studies?"</p>
<div className="flex items-center gap-4 mt-2 flex-wrap">
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faClock} className="text-[9px]" /> 5 hours ago</span>
<span className="text-brand-gold text-[10px] font-semibold flex items-center gap-1"><FontAwesomeIcon icon={faArrowRight} className="text-[9px]" /> Next: Send Case Study</span>
</div>
</div>
<div className="flex flex-col gap-2 flex-shrink-0">
<button className="border border-brand-gold/30 text-brand-gold text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:bg-brand-gold/10 transition-all whitespace-nowrap">Send CS</button>
<button className="border border-brand-border text-brand-muted text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:border-brand-gold/30 transition-all">Update</button>
</div>
</div>
</div>
{/* Conversation 3 - Follow-Up */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden hover:border-brand-gold/20 transition-all" id="conv-3">
<div className="px-5 py-4 flex items-start gap-4">
<img alt="prospect" className="w-11 h-11 rounded-full object-cover flex-shrink-0 mt-0.5" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1 flex-wrap">
<span className="text-brand-white text-sm font-semibold">Jordan Reeves</span>
<span className="bg-yellow-400/10 text-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">⏳ Follow-Up</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Cold DM</span>
</div>
<p className="text-brand-muted text-xs mb-2">$3K MRR · LinkedIn · Watched Loom 60% · No reply yet</p>
<p className="text-brand-light text-xs leading-relaxed italic">Last message: "I recorded this Loom specifically for you..." — 1 day ago</p>
<div className="flex items-center gap-4 mt-2 flex-wrap">
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faClock} className="text-[9px]" /> 1 day ago</span>
<span className="text-yellow-400 text-[10px] font-semibold flex items-center gap-1"><FontAwesomeIcon icon={faExclamation} className="text-[9px]" /> Follow-up overdue</span>
</div>
</div>
<div className="flex flex-col gap-2 flex-shrink-0">
<button className="border border-brand-gold/30 text-brand-gold text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:bg-brand-gold/10 transition-all whitespace-nowrap">Follow Up</button>
<button className="border border-brand-border text-brand-muted text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:border-brand-gold/30 transition-all">Update</button>
</div>
</div>
</div>
{/* Conversation 4 - Call Booked */}
<div className="bg-brand-card border border-green-400/20 rounded-xl overflow-hidden hover:border-green-400/40 transition-all" id="conv-4">
<div className="px-5 py-4 flex items-start gap-4">
<img alt="prospect" className="w-11 h-11 rounded-full object-cover flex-shrink-0 mt-0.5" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1 flex-wrap">
<span className="text-brand-white text-sm font-semibold">Anya Kowalski</span>
<span className="bg-green-400/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">📅 Call Booked</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Inbound DM</span>
</div>
<p className="text-brand-muted text-xs mb-2">$12K MRR · Instagram · Discovery call tomorrow 2PM EST</p>
<p className="text-brand-light text-xs leading-relaxed italic">"I've been looking for someone who actually knows SaaS. Let's talk."</p>
<div className="flex items-center gap-4 mt-2 flex-wrap">
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faCalendar} className="text-[9px]" /> Call: Tomorrow 2PM EST</span>
<span className="text-green-400 text-[10px] font-semibold flex items-center gap-1"><FontAwesomeIcon icon={faCheck} className="text-[9px]" /> Prep call script</span>
</div>
</div>
<div className="flex flex-col gap-2 flex-shrink-0">
<button className="bg-green-400/10 border border-green-400/30 text-green-400 text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:bg-green-400/20 transition-all whitespace-nowrap">Prep Call</button>
<button className="border border-brand-border text-brand-muted text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:border-brand-gold/30 transition-all">Update</button>
</div>
</div>
</div>
<button className="w-full py-3 border border-dashed border-brand-border rounded-xl text-brand-muted text-xs font-semibold uppercase tracking-widest hover:border-brand-gold/30 hover:text-brand-light transition-all flex items-center justify-center gap-2">
<FontAwesomeIcon icon={faEllipsis} /> Load 10 more conversations
                        </button>
</div>
</div>
{/* Conversation Log Sidebar */}
<div className="flex flex-col gap-5">
{/* Pipeline Snapshot */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="pipeline-snapshot">
<div className="px-5 py-4 border-b border-brand-border flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Pipeline Snapshot</h3>
</div>
<div id="pipeline-snapshot-chart" style={{ height: "200px" }}></div>
<div className="px-5 pb-4 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<span className="text-brand-light text-xs">Hot Leads</span>
</div>
<span className="text-brand-white text-xs font-bold">3</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<span className="text-brand-light text-xs">In Conversation</span>
</div>
<span className="text-brand-white text-xs font-bold">5</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span className="text-brand-light text-xs">Call Booked</span>
</div>
<span className="text-brand-white text-xs font-bold">2</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<span className="text-brand-light text-xs">Follow-Up Needed</span>
</div>
<span className="text-brand-white text-xs font-bold">4</span>
</div>
</div>
</div>
{/* Qualification Criteria */}
<div className="bg-brand-card border border-brand-gold/30 rounded-xl overflow-hidden" id="qualification-card">
<div className="px-5 py-4 border-b border-brand-border" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.06) 0%, transparent 100%)" }}>
<div className="flex items-center gap-2">
<FontAwesomeIcon icon={faFilter} className="text-brand-gold text-sm" />
<h3 className="font-display font-700 text-brand-white text-sm">Qualification Criteria</h3>
</div>
</div>
<div className="px-5 py-4 space-y-3">
<p className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-2">Qualified = ALL 4 must be true</p>
<div className="flex items-start gap-3 p-2.5 bg-brand-accent rounded-lg">
<FontAwesomeIcon icon={faCheckCircle} className="text-green-400 text-xs mt-0.5 flex-shrink-0" />
<p className="text-brand-light text-xs">Has existing revenue ($1K+ MRR) or proven demand</p>
</div>
<div className="flex items-start gap-3 p-2.5 bg-brand-accent rounded-lg">
<FontAwesomeIcon icon={faCheckCircle} className="text-green-400 text-xs mt-0.5 flex-shrink-0" />
<p className="text-brand-light text-xs">Has a clear 90-day revenue goal ($10K+ target)</p>
</div>
<div className="flex items-start gap-3 p-2.5 bg-brand-accent rounded-lg">
<FontAwesomeIcon icon={faCheckCircle} className="text-green-400 text-xs mt-0.5 flex-shrink-0" />
<p className="text-brand-light text-xs">Has budget or access to capital (minimum $2K/mo)</p>
</div>
<div className="flex items-start gap-3 p-2.5 bg-brand-accent rounded-lg">
<FontAwesomeIcon icon={faCheckCircle} className="text-green-400 text-xs mt-0.5 flex-shrink-0" />
<p className="text-brand-light text-xs">Is the decision maker. No "I need to ask my partner."</p>
</div>
<div className="mt-3 p-3 bg-red-500/5 border border-red-500/20 rounded-lg">
<p className="text-red-400 text-[10px] font-bold uppercase tracking-widest mb-1">Disqualify Immediately If:</p>
<p className="text-brand-light text-xs">No revenue, no budget, or wants to "think about it" before a call. Move on.</p>
</div>
</div>
</div>
</div>
</div>
</section>
          </>
        );

        export default ConversationLogTabSection;
