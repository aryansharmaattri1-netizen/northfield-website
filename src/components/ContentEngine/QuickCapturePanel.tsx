import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare, faBolt, faCamera, faDownload, faFilePdf, faFont, faImage, faLink, faMicrophone, faPaperclip, faScroll } from '@fortawesome/free-solid-svg-icons';

        const QuickCapturePanel = () => (
          <>
            <section className="tab-content hidden" id="tab-content-quick-capture">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
<div className="xl:col-span-2 flex flex-col gap-5">
{/* Voice / Text Quick Capture */}
<div className="bg-brand-card border border-brand-gold/30 rounded-xl overflow-hidden" id="voice-capture-card">
<div className="px-6 py-4 border-b border-brand-border flex items-center justify-between" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.06) 0%, transparent 100%)" }}>
<div className="flex items-center gap-2">
<FontAwesomeIcon icon={faBolt} className="text-brand-gold text-sm" />
<h3 className="font-display font-700 text-brand-white text-sm">Quick Capture — Dump It Fast</h3>
</div>
<span className="text-brand-muted text-[10px] font-bold uppercase tracking-widest">No Editing. Just Capture.</span>
</div>
<div className="px-6 py-6 space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<button className="flex flex-col items-center gap-3 p-6 bg-brand-accent border-2 border-dashed border-brand-border rounded-xl hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-all group" id="voice-btn">
<div className="w-14 h-14 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center group-hover:bg-brand-gold/20 transition-all">
<FontAwesomeIcon icon={faMicrophone} className="text-brand-gold text-2xl" />
</div>
<div className="text-center">
<p className="text-brand-white text-sm font-semibold">Voice Note</p>
<p className="text-brand-muted text-xs">Tap to record. Transcribed automatically.</p>
</div>
</button>
<button className="flex flex-col items-center gap-3 p-6 bg-brand-accent border-2 border-dashed border-brand-border rounded-xl hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-all group">
<div className="w-14 h-14 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center group-hover:bg-brand-gold/20 transition-all">
<FontAwesomeIcon icon={faCamera} className="text-brand-gold text-2xl" />
</div>
<div className="text-center">
<p className="text-brand-white text-sm font-semibold">Photo / Screenshot</p>
<p className="text-brand-muted text-xs">Attach inspiration or reference instantly.</p>
</div>
</button>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Raw Idea Dump</label>
<textarea className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-3 text-brand-white text-sm placeholder-brand-muted focus:border-brand-gold/50 transition-all resize-none" placeholder="Type or paste anything — a hook idea, a client objection you want to address, a trend you noticed, a result you got. Don't filter. Just capture." rows={5}></textarea>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Tag / Category</label>
<select className="w-full bg-brand-accent border border-brand-border rounded-lg px-3 py-2.5 text-brand-white text-sm focus:border-brand-gold/50 transition-all">
<option>Reel Idea</option>
<option>Hook</option>
<option>Script Fragment</option>
<option>Client Story</option>
<option>Statistic</option>
<option>Objection</option>
</select>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Platform</label>
<select className="w-full bg-brand-accent border border-brand-border rounded-lg px-3 py-2.5 text-brand-white text-sm focus:border-brand-gold/50 transition-all">
<option>Any / TBD</option>
<option>Instagram</option>
<option>LinkedIn</option>
<option>TikTok</option>
<option>Twitter/X</option>
</select>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Send To</label>
<select className="w-full bg-brand-accent border border-brand-border rounded-lg px-3 py-2.5 text-brand-white text-sm focus:border-brand-gold/50 transition-all">
<option>Idea Journal</option>
<option>Reel Queue</option>
<option>Script Draft</option>
<option>Hook Bank</option>
</select>
</div>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Attach Files / Links</label>
<div className="border-2 border-dashed border-brand-border rounded-lg px-4 py-4 flex items-center gap-3 hover:border-brand-gold/30 transition-all cursor-pointer">
<FontAwesomeIcon icon={faPaperclip} className="text-brand-muted text-sm" />
<div>
<p className="text-brand-muted text-xs">Drop files, screenshots, or paste a URL</p>
<p className="text-brand-muted text-[10px]">PNG, JPG, MP4, PDF, URLs accepted</p>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-lg transition-all flex items-center gap-2">
<FontAwesomeIcon icon={faBolt} /> Capture Now
                                </button>
<button className="border border-brand-border hover:border-brand-gold/40 text-brand-light text-xs font-semibold uppercase tracking-wide px-5 py-2.5 rounded-lg transition-all">
                                    Clear
                                </button>
</div>
</div>
</div>
{/* Recent Captures */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="recent-captures">
<div className="px-6 py-4 border-b border-brand-border flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Recent Captures</h3>
</div>
<span className="text-brand-muted text-[10px] uppercase tracking-widest">Today</span>
</div>
<div className="divide-y divide-brand-border">
<div className="px-6 py-4 flex items-start gap-4 hover:bg-brand-accent/30 transition-all">
<div className="w-8 h-8 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
<FontAwesomeIcon icon={faMicrophone} className="text-brand-gold text-xs" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<span className="text-brand-gold text-[10px] font-bold uppercase">Voice Note</span>
<span className="text-brand-muted text-[10px]">10:42 AM • Hook Idea</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">"What if I did a reel about the exact moment I realized my agency was bleeding money — the client who ghosted after month 2..."</p>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<button className="text-brand-gold text-[10px] font-bold hover:underline">Use</button>
<button className="text-brand-muted text-[10px] hover:text-brand-light">Edit</button>
</div>
</div>
<div className="px-6 py-4 flex items-start gap-4 hover:bg-brand-accent/30 transition-all">
<div className="w-8 h-8 rounded-lg bg-brand-accent border border-brand-border flex items-center justify-center flex-shrink-0 mt-0.5">
<FontAwesomeIcon icon={faFont} className="text-brand-muted text-xs" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<span className="text-brand-muted text-[10px] font-bold uppercase">Text</span>
<span className="text-brand-muted text-[10px]">9:15 AM • Statistic</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">Stat from McKinsey: 73% of SaaS companies that fail in year 1 had no systematic client reporting. Use this in next reel.</p>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<button className="text-brand-gold text-[10px] font-bold hover:underline">Use</button>
<button className="text-brand-muted text-[10px] hover:text-brand-light">Edit</button>
</div>
</div>
<div className="px-6 py-4 flex items-start gap-4 hover:bg-brand-accent/30 transition-all">
<div className="w-8 h-8 rounded-lg bg-brand-accent border border-brand-border flex items-center justify-center flex-shrink-0 mt-0.5">
<FontAwesomeIcon icon={faImage} className="text-purple-400 text-xs" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<span className="text-brand-muted text-[10px] font-bold uppercase">Screenshot</span>
<span className="text-brand-muted text-[10px]">8:30 AM • Reference</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">Screenshot of competitor reel that got 2M views. Study the hook format and editing style.</p>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<button className="text-brand-gold text-[10px] font-bold hover:underline">Use</button>
<button className="text-brand-muted text-[10px] hover:text-brand-light">Edit</button>
</div>
</div>
</div>
</div>
</div>
{/* Quick Capture Sidebar */}
<div className="flex flex-col gap-5">
<div className="bg-brand-card border border-brand-gold/30 rounded-xl p-5 relative overflow-hidden" id="capture-tips-card">
<div className="absolute inset-0 bg-brand-gold opacity-[0.03]"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3">
<FontAwesomeIcon icon={faScroll} className="text-brand-gold text-sm" />
<span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">Capture Rule</span>
</div>
<p className="font-display text-brand-white text-sm font-700 mb-2 leading-snug">"Your best content ideas come in the shower, driving, and right after client calls."</p>
<p className="text-brand-muted text-xs leading-relaxed">Capture everything immediately. A good idea forgotten = a client never acquired. Use voice notes when you can't type.</p>
</div>
</div>
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="script-drafts-card">
<div className="px-5 py-4 border-b border-brand-border flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Script Drafts</h3>
</div>
<span className="bg-brand-accent border border-brand-border text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded-full">6 drafts</span>
</div>
<div className="divide-y divide-brand-border">
<div className="px-5 py-3 flex items-center justify-between hover:bg-brand-accent/30 transition-all cursor-pointer">
<div>
<p className="text-brand-white text-xs font-semibold">60-day client loss reel</p>
<p className="text-brand-muted text-[10px]">80% complete • Pain Point</p>
</div>
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-brand-gold rounded-full" style={{ width: "80%" }}></div>
</div>
<FontAwesomeIcon icon={faArrowRight} className="text-brand-muted text-xs" />
</div>
</div>
<div className="px-5 py-3 flex items-center justify-between hover:bg-brand-accent/30 transition-all cursor-pointer">
<div>
<p className="text-brand-white text-xs font-semibold">DM script breakdown</p>
<p className="text-brand-muted text-[10px]">50% complete • Tutorial</p>
</div>
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-brand-gold rounded-full" style={{ width: "50%" }}></div>
</div>
<FontAwesomeIcon icon={faArrowRight} className="text-brand-muted text-xs" />
</div>
</div>
<div className="px-5 py-3 flex items-center justify-between hover:bg-brand-accent/30 transition-all cursor-pointer">
<div>
<p className="text-brand-white text-xs font-semibold">Stop posting motivation</p>
<p className="text-brand-muted text-[10px]">30% complete • Contrarian</p>
</div>
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-brand-gold rounded-full" style={{ width: "30%" }}></div>
</div>
<FontAwesomeIcon icon={faArrowRight} className="text-brand-muted text-xs" />
</div>
</div>
</div>
</div>
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="attachment-vault-card">
<div className="px-5 py-4 border-b border-brand-border flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Attachment Vault</h3>
</div>
<button className="text-brand-gold text-[10px] font-bold hover:underline">Upload</button>
</div>
<div className="px-5 py-4 space-y-2">
<div className="flex items-center gap-3 p-2.5 bg-brand-accent rounded-lg hover:bg-brand-border/30 transition-all cursor-pointer">
<FontAwesomeIcon icon={faFilePdf} className="text-red-400 text-sm" />
<div className="flex-1 min-w-0">
<p className="text-brand-white text-xs font-semibold truncate">competitor-analysis.pdf</p>
<p className="text-brand-muted text-[10px]">2.4 MB • Added today</p>
</div>
<FontAwesomeIcon icon={faDownload} className="text-brand-muted text-xs" />
</div>
<div className="flex items-center gap-3 p-2.5 bg-brand-accent rounded-lg hover:bg-brand-border/30 transition-all cursor-pointer">
<FontAwesomeIcon icon={faImage} className="text-purple-400 text-sm" />
<div className="flex-1 min-w-0">
<p className="text-brand-white text-xs font-semibold truncate">reel-reference-screenshot.png</p>
<p className="text-brand-muted text-[10px]">1.1 MB • Added today</p>
</div>
<FontAwesomeIcon icon={faDownload} className="text-brand-muted text-xs" />
</div>
<div className="flex items-center gap-3 p-2.5 bg-brand-accent rounded-lg hover:bg-brand-border/30 transition-all cursor-pointer">
<FontAwesomeIcon icon={faLink} className="text-blue-400 text-sm" />
<div className="flex-1 min-w-0">
<p className="text-brand-white text-xs font-semibold truncate">McKinsey SaaS Retention Study</p>
<p className="text-brand-muted text-[10px]">URL • Added 2 days ago</p>
</div>
<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-brand-muted text-xs" />
</div>
</div>
</div>
</div>
</div>
</section>
          </>
        );

        export default QuickCapturePanel;
