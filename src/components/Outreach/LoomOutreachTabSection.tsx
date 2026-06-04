import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleDot, faClock, faCopy, faEye, faEyeSlash, faLightbulb, faPaperPlane, faPlay, faScroll, faVideo } from '@fortawesome/free-solid-svg-icons';

        const LoomOutreachTabSection = () => (
          <>
            <section className="outreach-tab-content hidden" id="tab-content-loom-outreach">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
<div className="xl:col-span-2 flex flex-col gap-5">
{/* Loom Composer */}
<div className="bg-brand-card border border-brand-gold/30 rounded-xl overflow-hidden" id="loom-composer-card">
<div className="px-6 py-4 border-b border-brand-border flex items-center justify-between" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.06) 0%, transparent 100%)" }}>
<div className="flex items-center gap-2">
<FontAwesomeIcon icon={faVideo} className="text-brand-gold text-sm" />
<h3 className="font-display font-700 text-brand-white text-sm">Loom Outreach Composer</h3>
</div>
<span className="text-brand-muted text-[10px] font-bold uppercase tracking-widest">2 Min Max. Always Personalized.</span>
</div>
<div className="px-6 py-5 space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Prospect Name</label>
<input className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-brand-white text-sm placeholder-brand-muted focus:border-brand-gold/50 transition-all" placeholder="e.g. Sarah Chen" type="text"/>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Loom Video URL</label>
<input className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-brand-white text-sm placeholder-brand-muted focus:border-brand-gold/50 transition-all" placeholder="https://loom.com/share/..." type="text"/>
</div>
</div>
{/* Loom Preview Placeholder */}
<div className="bg-brand-accent border border-brand-border rounded-xl overflow-hidden" id="loom-preview">
<div className="relative" style={{ paddingTop: "36%" }}>
<div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
<div className="w-16 h-16 rounded-full bg-brand-gold/10 border-2 border-brand-gold/30 flex items-center justify-center">
<FontAwesomeIcon icon={faPlay} className="text-brand-gold text-xl ml-1" />
</div>
<div className="text-center">
<p className="text-brand-light text-sm font-semibold">Paste a Loom URL above to preview</p>
<p className="text-brand-muted text-xs mt-1">Or record a new Loom directly from your browser</p>
</div>
<button className="bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-lg transition-all flex items-center gap-2">
<FontAwesomeIcon icon={faCircleDot} className="text-red-600" /> Record New Loom
                                        </button>
</div>
</div>
</div>
{/* Loom Script */}
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Loom Script / Talking Points</label>
<textarea className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-3 text-brand-white text-sm placeholder-brand-muted focus:border-brand-gold/50 transition-all resize-none" placeholder="0:00 — Hey [Name], I'm [Your Name]. I record these for founders I think I can genuinely help.
0:15 — I noticed [specific observation about their profile/content/company].
0:30 — Here's the exact problem I see: [pain point].
0:50 — Here's what I'd do differently: [brief solution].
1:30 — If this resonates, just reply 'yes' and I'll send you the full breakdown." rows={5}></textarea>
</div>
{/* Accompanying DM */}
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Accompanying DM Text</label>
<textarea className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-3 text-brand-white text-sm placeholder-brand-muted focus:border-brand-gold/50 transition-all resize-none" placeholder="Hey [Name] — I recorded a 2-minute Loom specifically for you. Walked through exactly how I'd approach your situation. Worth a watch?" rows={3}></textarea>
</div>
<div className="flex items-center gap-3">
<Link to="/outreach" className="bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-lg transition-all flex items-center gap-2">
<FontAwesomeIcon icon={faPaperPlane} /> Send Loom &amp; Log
                                </Link>
<button className="border border-brand-border hover:border-brand-gold/40 text-brand-light text-xs font-semibold uppercase tracking-wide px-5 py-2.5 rounded-lg transition-all flex items-center gap-2">
<FontAwesomeIcon icon={faCopy} /> Copy Link
                                </button>
</div>
</div>
</div>
{/* Sent Looms Log */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="sent-looms">
<div className="px-6 py-4 border-b border-brand-border flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Sent Looms</h3>
<span className="bg-brand-accent border border-brand-border text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded-full">8 sent</span>
</div>
<select className="bg-brand-accent border border-brand-border rounded-lg px-3 py-1.5 text-brand-light text-xs focus:border-brand-gold/40 transition-all">
<option>This Week</option>
<option>Last Week</option>
<option>All Time</option>
</select>
</div>
<div className="divide-y divide-brand-border">
<div className="px-6 py-4 hover:bg-brand-accent/20 transition-all" id="loom-1">
<div className="flex items-start gap-4">
<img alt="prospect" className="w-10 h-10 rounded-full object-cover flex-shrink-0 mt-0.5" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1 flex-wrap">
<span className="text-brand-white text-xs font-semibold">Marcus Webb</span>
<span className="bg-green-400/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Watched</span>
<span className="bg-brand-gold/10 text-brand-gold text-[10px] font-bold px-2 py-0.5 rounded uppercase">Replied</span>
</div>
<p className="text-brand-muted text-xs mb-1">SaaS founder — $8K MRR · Instagram · Sent 2 hours ago</p>
<p className="text-brand-light text-xs">Loom: "How I'd scale your agency from $8K to $25K MRR in 60 days"</p>
<div className="flex items-center gap-3 mt-2">
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faEye} className="text-[9px]" /> Watched 100%</span>
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faClock} className="text-[9px]" /> 1:48 min</span>
</div>
</div>
<div className="flex flex-col gap-2 flex-shrink-0">
<Link to="/" className="bg-brand-gold text-brand-black text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:bg-brand-gold-light transition-all text-center">Book Call</Link>
<Link to="/outreach" className="border border-brand-border text-brand-muted text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:border-brand-gold/30 transition-all text-center">View</Link>
</div>
</div>
</div>
<div className="px-6 py-4 hover:bg-brand-accent/20 transition-all" id="loom-2">
<div className="flex items-start gap-4">
<img alt="prospect" className="w-10 h-10 rounded-full object-cover flex-shrink-0 mt-0.5" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1 flex-wrap">
<span className="text-brand-white text-xs font-semibold">Jordan Reeves</span>
<span className="bg-blue-400/10 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Watched 60%</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">No Reply</span>
</div>
<p className="text-brand-muted text-xs mb-1">Agency owner — $3K MRR · LinkedIn · Sent yesterday</p>
<p className="text-brand-light text-xs">Loom: "3 things blocking your agency from $10K MRR"</p>
<div className="flex items-center gap-3 mt-2">
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faEye} className="text-[9px]" /> 60% watched</span>
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faClock} className="text-[9px]" /> 1:12 min</span>
</div>
</div>
<div className="flex flex-col gap-2 flex-shrink-0">
<Link to="/outreach" className="border border-brand-gold/30 text-brand-gold text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:bg-brand-gold/10 transition-all text-center">Follow Up</Link>
<Link to="/outreach" className="border border-brand-border text-brand-muted text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:border-brand-gold/30 transition-all text-center">View</Link>
</div>
</div>
</div>
<div className="px-6 py-4 hover:bg-brand-accent/20 transition-all opacity-70" id="loom-3">
<div className="flex items-start gap-4">
<img alt="prospect" className="w-10 h-10 rounded-full object-cover flex-shrink-0 mt-0.5" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1 flex-wrap">
<span className="text-brand-white text-xs font-semibold">Ethan Brooks</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Not Watched</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">No Reply</span>
</div>
<p className="text-brand-muted text-xs mb-1">Startup founder — Pre-revenue · Instagram · Sent 3 days ago</p>
<p className="text-brand-light text-xs">Loom: "How to get your first $5K MRR client in 2 weeks"</p>
<div className="flex items-center gap-3 mt-2">
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faEyeSlash} className="text-[9px]" /> Not opened</span>
</div>
</div>
<div className="flex flex-col gap-2 flex-shrink-0">
<Link to="/outreach" className="border border-brand-border text-brand-muted text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:border-brand-gold/30 hover:text-brand-light transition-all text-center">Follow Up</Link>
<Link to="/outreach" className="border border-brand-border text-brand-muted text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:border-brand-gold/30 transition-all text-center">View</Link>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Loom Sidebar */}
<div className="flex flex-col gap-5">
{/* Loom Framework */}
<div className="bg-brand-card border border-brand-gold/30 rounded-xl overflow-hidden" id="loom-framework-card">
<div className="px-5 py-4 border-b border-brand-border" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.06) 0%, transparent 100%)" }}>
<div className="flex items-center gap-2">
<FontAwesomeIcon icon={faScroll} className="text-brand-gold text-sm" />
<h3 className="font-display font-700 text-brand-white text-sm">2-Min Loom Framework</h3>
</div>
</div>
<div className="px-5 py-4 space-y-3">
<div className="flex items-start gap-3 p-3 bg-brand-accent rounded-lg border-l-2 border-brand-gold">
<span className="text-brand-gold font-display font-700 text-xs w-12 flex-shrink-0">0:00</span>
<p className="text-brand-light text-xs leading-relaxed">Introduce yourself. Say their name. "I made this specifically for you."</p>
</div>
<div className="flex items-start gap-3 p-3 bg-brand-accent rounded-lg border-l-2 border-blue-400">
<span className="text-blue-400 font-display font-700 text-xs w-12 flex-shrink-0">0:15</span>
<p className="text-brand-light text-xs leading-relaxed">Reference something specific — their content, company, or a result they mentioned.</p>
</div>
<div className="flex items-start gap-3 p-3 bg-brand-accent rounded-lg border-l-2 border-red-400">
<span className="text-red-400 font-display font-700 text-xs w-12 flex-shrink-0">0:30</span>
<p className="text-brand-light text-xs leading-relaxed">Name the exact problem you see. Be direct. No fluff.</p>
</div>
<div className="flex items-start gap-3 p-3 bg-brand-accent rounded-lg border-l-2 border-purple-400">
<span className="text-purple-400 font-display font-700 text-xs w-12 flex-shrink-0">0:50</span>
<p className="text-brand-light text-xs leading-relaxed">Share your solution framework briefly. Tease — don't give everything.</p>
</div>
<div className="flex items-start gap-3 p-3 bg-brand-accent rounded-lg border-l-2 border-green-400">
<span className="text-green-400 font-display font-700 text-xs w-12 flex-shrink-0">1:30</span>
<p className="text-brand-light text-xs leading-relaxed">Single CTA: "Reply 'yes' and I\'ll send you the full breakdown." Done.</p>
</div>
</div>
</div>
{/* Loom Stats */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="loom-stats-card">
<div className="px-5 py-4 border-b border-brand-border flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Loom Performance</h3>
</div>
<div className="px-5 py-4 space-y-3">
<div className="flex items-center justify-between p-3 bg-brand-accent rounded-lg">
<span className="text-brand-light text-xs">Avg Watch Rate</span>
<span className="text-brand-gold font-bold text-sm">74%</span>
</div>
<div className="flex items-center justify-between p-3 bg-brand-accent rounded-lg">
<span className="text-brand-light text-xs">Reply Rate (watched)</span>
<span className="text-green-400 font-bold text-sm">51%</span>
</div>
<div className="flex items-center justify-between p-3 bg-brand-accent rounded-lg">
<span className="text-brand-light text-xs">Booked Calls</span>
<span className="text-brand-white font-bold text-sm">3 this week</span>
</div>
<div className="flex items-center justify-between p-3 bg-brand-accent rounded-lg">
<span className="text-brand-light text-xs">Avg Video Length</span>
<span className="text-brand-white font-bold text-sm">1:52 min</span>
</div>
</div>
</div>
{/* Loom Tips */}
<div className="bg-brand-card border border-brand-border rounded-xl p-5 relative overflow-hidden" id="loom-tips-card">
<div className="absolute inset-0 bg-brand-gold opacity-[0.02]"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3">
<FontAwesomeIcon icon={faLightbulb} className="text-brand-gold text-sm" />
<span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">Loom Pro Tips</span>
</div>
<div className="space-y-2">
<div className="flex items-start gap-2">
<FontAwesomeIcon icon={faCheck} className="text-green-400 text-[10px] mt-0.5 flex-shrink-0" />
<p className="text-brand-light text-xs leading-relaxed">Show their LinkedIn profile or content on screen while talking. Proves you actually looked.</p>
</div>
<div className="flex items-start gap-2">
<FontAwesomeIcon icon={faCheck} className="text-green-400 text-[10px] mt-0.5 flex-shrink-0" />
<p className="text-brand-light text-xs leading-relaxed">Always show your face. Face-cam in corner. Builds instant trust.</p>
</div>
<div className="flex items-start gap-2">
<FontAwesomeIcon icon={faCheck} className="text-green-400 text-[10px] mt-0.5 flex-shrink-0" />
<p className="text-brand-light text-xs leading-relaxed">Keep it under 2 minutes. If you can\'t say it in 2 min, you don\'t know it well enough.</p>
</div>
<div className="flex items-start gap-2">
<FontAwesomeIcon icon={faCheck} className="text-green-400 text-[10px] mt-0.5 flex-shrink-0" />
<p className="text-brand-light text-xs leading-relaxed">Use a custom thumbnail with their name. Click rates go up 60%.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
          </>
        );

        export default LoomOutreachTabSection;
