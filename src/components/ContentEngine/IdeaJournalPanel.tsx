import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin as faLinkedinBrands } from '@fortawesome/free-brands-svg-icons';
import { faBan, faBookOpen, faCalendarPlus, faClock, faEllipsis, faFilm, faFire, faHeart, faImages, faLightbulb, faListCheck, faPaperclip, faPlus, faScroll, faTrophy, faUser } from '@fortawesome/free-solid-svg-icons';

        const IdeaJournalPanel = () => (
          <>
            <section className="tab-content" id="tab-content-idea-journal">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
{/* Left: Idea Input + Journal Entries */}
<div className="xl:col-span-2 flex flex-col gap-5" id="idea-journal-main">
{/* New Idea Form */}
<div className="bg-brand-card border border-brand-gold/30 rounded-xl overflow-hidden" id="new-idea-form">
<div className="px-6 py-4 border-b border-brand-border flex items-center justify-between" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.06) 0%, transparent 100%)" }}>
<div className="flex items-center gap-2">
<FontAwesomeIcon icon={faLightbulb} className="text-brand-gold text-sm" />
<h3 className="font-display font-700 text-brand-white text-sm">New Content Idea</h3>
</div>
<span className="text-brand-muted text-[10px] font-bold uppercase tracking-widest">Capture Fast. Refine Later.</span>
</div>
<div className="px-6 py-5 space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Content Title / Hook</label>
<input className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-brand-white text-sm placeholder-brand-muted focus:border-brand-gold/50 transition-all" placeholder="e.g. '3 reasons SaaS founders lose clients in month 2'" type="text"/>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Content Type</label>
<select className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-brand-white text-sm focus:border-brand-gold/50 transition-all">
<option value="">Select type...</option>
<option>Reel (Short-form video)</option>
<option>Carousel Post</option>
<option>Static Image Post</option>
<option>Story Series</option>
<option>LinkedIn Article</option>
<option>Twitter/X Thread</option>
</select>
</div>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Idea / Script Notes</label>
<textarea className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-3 text-brand-white text-sm placeholder-brand-muted focus:border-brand-gold/50 transition-all resize-none" placeholder="Dump your raw idea here. Hook, key points, CTA, angle — anything that came to mind..." rows={4}></textarea>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Target Audience</label>
<select className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-brand-white text-sm focus:border-brand-gold/50 transition-all">
<option>SaaS Founders</option>
<option>Agency Owners</option>
<option>Creative Directors</option>
<option>Startup CTOs</option>
</select>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Content Angle</label>
<select className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-brand-white text-sm focus:border-brand-gold/50 transition-all">
<option>Pain Point</option>
<option>Authority / Proof</option>
<option>Tutorial / How-To</option>
<option>Contrarian Take</option>
<option>Case Study</option>
<option>Motivation</option>
</select>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Priority</label>
<select className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-brand-white text-sm focus:border-brand-gold/50 transition-all">
<option>🔥 High — Post This Week</option>
<option>📌 Medium — Next Week</option>
<option>💡 Low — Idea Bank</option>
</select>
</div>
</div>
<div>
<label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Attach Reference / Inspiration</label>
<div className="border-2 border-dashed border-brand-border rounded-lg px-4 py-4 flex items-center gap-3 hover:border-brand-gold/30 transition-all cursor-pointer">
<FontAwesomeIcon icon={faPaperclip} className="text-brand-muted text-sm" />
<span className="text-brand-muted text-xs">Drop files, links, or screenshots here — or click to browse</span>
</div>
</div>
<div className="flex items-center gap-3 pt-1">
<button className="bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-lg transition-all flex items-center gap-2">
<FontAwesomeIcon icon={faPlus} /> Save Idea
                                </button>
<button className="border border-brand-border hover:border-brand-gold/40 text-brand-light text-xs font-semibold uppercase tracking-wide px-5 py-2.5 rounded-lg transition-all flex items-center gap-2">
<FontAwesomeIcon icon={faCalendarPlus} /> Save &amp; Add to Queue
                                </button>
<button className="text-brand-muted hover:text-brand-light text-xs font-medium px-4 py-2.5 rounded-lg transition-all">
                                    Clear
                                </button>
</div>
</div>
</div>
{/* Journal Entries */}
<div className="flex flex-col gap-4" id="journal-entries">
<div className="flex items-center justify-between">
<h3 className="font-display font-700 text-brand-white text-sm flex items-center gap-2">
<FontAwesomeIcon icon={faBookOpen} className="text-brand-gold text-xs" />
                                Idea Journal{" "}
                <span className="bg-brand-accent border border-brand-border text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded-full">23 ideas</span>
</h3>
<div className="flex items-center gap-2">
<input className="bg-brand-accent border border-brand-border rounded-lg px-3 py-1.5 text-brand-light text-xs placeholder-brand-muted focus:border-brand-gold/40 transition-all w-40" placeholder="Search ideas..." type="text"/>
<select className="bg-brand-accent border border-brand-border rounded-lg px-3 py-1.5 text-brand-light text-xs focus:border-brand-gold/40 transition-all">
<option>All Types</option>
<option>Reels</option>
<option>Posts</option>
<option>Articles</option>
</select>
</div>
</div>
{/* Idea Entry 1 - High Priority */}
<div className="bg-brand-card border border-brand-gold/30 rounded-xl overflow-hidden group hover:border-brand-gold/50 transition-all" id="idea-1">
<div className="px-5 py-4 flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
<FontAwesomeIcon icon={faFilm} className="text-brand-gold text-sm" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap mb-1">
<span className="bg-red-500/10 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">🔥 High Priority</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Reel</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Pain Point</span>
</div>
<h4 className="font-display font-700 text-brand-white text-sm mb-1">"Why your SaaS agency loses clients after 60 days (and how to stop it)"</h4>
<p className="text-brand-muted text-xs leading-relaxed mb-3">Hook: Start with the stat — 70% of agencies lose their first client within 60 days. Then reveal the 3 root causes: no reporting, no proactive comms, no results framework. CTA: DM me "60 days" for my client retention SOP.</p>
<div className="flex items-center gap-4 flex-wrap">
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faUser} className="text-[9px]" /> SaaS Founders</span>
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faClock} className="text-[9px]" /> Added 2 days ago</span>
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faPaperclip} className="text-[9px]" /> 2 attachments</span>
</div>
</div>
<div className="flex flex-col gap-2 flex-shrink-0">
<button className="bg-brand-gold text-brand-black text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:bg-brand-gold-light transition-all whitespace-nowrap">Add to Queue</button>
<button className="border border-brand-border text-brand-muted text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:border-brand-gold/30 hover:text-brand-light transition-all">Edit</button>
</div>
</div>
</div>
{/* Idea Entry 2 */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden group hover:border-brand-gold/20 transition-all" id="idea-2">
<div className="px-5 py-4 flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-brand-accent border border-brand-border flex items-center justify-center flex-shrink-0 mt-0.5">
<FontAwesomeIcon icon={faImages} className="text-purple-400 text-sm" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap mb-1">
<span className="bg-yellow-500/10 text-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">📌 Medium</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Carousel</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Authority</span>
</div>
<h4 className="font-display font-700 text-brand-white text-sm mb-1">"How I went from $0 to $10K MRR in 30 days without a team"</h4>
<p className="text-brand-muted text-xs leading-relaxed mb-3">10-slide carousel. Slide 1: Bold claim + proof. Slides 2–9: One action per slide with specific numbers. Slide 10: CTA — follow for the full playbook.</p>
<div className="flex items-center gap-4 flex-wrap">
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faUser} className="text-[9px]" /> Agency Owners</span>
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faClock} className="text-[9px]" /> Added 4 days ago</span>
</div>
</div>
<div className="flex flex-col gap-2 flex-shrink-0">
<button className="bg-brand-gold text-brand-black text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:bg-brand-gold-light transition-all whitespace-nowrap">Add to Queue</button>
<button className="border border-brand-border text-brand-muted text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:border-brand-gold/30 hover:text-brand-light transition-all">Edit</button>
</div>
</div>
</div>
{/* Idea Entry 3 */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden group hover:border-brand-gold/20 transition-all" id="idea-3">
<div className="px-5 py-4 flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-brand-accent border border-brand-border flex items-center justify-center flex-shrink-0 mt-0.5">
<FontAwesomeIcon icon={faFilm} className="text-blue-400 text-sm" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap mb-1">
<span className="bg-red-500/10 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">🔥 High Priority</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Reel</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Contrarian</span>
</div>
<h4 className="font-display font-700 text-brand-white text-sm mb-1">"Stop posting motivational content. Here's what actually gets clients."</h4>
<p className="text-brand-muted text-xs leading-relaxed mb-3">Contrarian hook. Position against the "vibe" creators. Show data: pain-point reels get 3x more DMs than inspirational. Demonstrate with my own numbers.</p>
<div className="flex items-center gap-4 flex-wrap">
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faUser} className="text-[9px]" /> SaaS Founders</span>
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faClock} className="text-[9px]" /> Added 5 days ago</span>
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faPaperclip} className="text-[9px]" /> 1 attachment</span>
</div>
</div>
<div className="flex flex-col gap-2 flex-shrink-0">
<button className="bg-brand-gold text-brand-black text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:bg-brand-gold-light transition-all whitespace-nowrap">Add to Queue</button>
<button className="border border-brand-border text-brand-muted text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:border-brand-gold/30 hover:text-brand-light transition-all">Edit</button>
</div>
</div>
</div>
{/* Idea Entry 4 - Low Priority */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden group hover:border-brand-gold/20 transition-all opacity-70" id="idea-4">
<div className="px-5 py-4 flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-brand-accent border border-brand-border flex items-center justify-center flex-shrink-0 mt-0.5">
<FontAwesomeIcon icon={faLinkedinBrands} className="text-blue-500 text-sm" />
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap mb-1">
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">💡 Low</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">LinkedIn Article</span>
<span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Tutorial</span>
</div>
<h4 className="font-display font-700 text-brand-white text-sm mb-1">"The exact DM script that books 10 calls per week on autopilot"</h4>
<p className="text-brand-muted text-xs leading-relaxed mb-3">Long-form breakdown of the voice-to-text DM method. Include word-for-word scripts. Embed Loom walkthrough video. Position as lead magnet.</p>
<div className="flex items-center gap-4 flex-wrap">
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faUser} className="text-[9px]" /> Agency Owners</span>
<span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faClock} className="text-[9px]" /> Added 1 week ago</span>
</div>
</div>
<div className="flex flex-col gap-2 flex-shrink-0">
<button className="bg-brand-gold text-brand-black text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:bg-brand-gold-light transition-all whitespace-nowrap">Add to Queue</button>
<button className="border border-brand-border text-brand-muted text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:border-brand-gold/30 hover:text-brand-light transition-all">Edit</button>
</div>
</div>
</div>
<button className="w-full py-3 border border-dashed border-brand-border rounded-xl text-brand-muted text-xs font-semibold uppercase tracking-widest hover:border-brand-gold/30 hover:text-brand-light transition-all flex items-center justify-center gap-2">
<FontAwesomeIcon icon={faEllipsis} /> Load 19 more ideas
                        </button>
</div>
</div>
{/* Right Sidebar */}
<div className="flex flex-col gap-5" id="idea-sidebar">
{/* Content Rules */}
<div className="bg-brand-card border border-brand-gold/30 rounded-xl overflow-hidden" id="content-rules-card">
<div className="px-5 py-4 border-b border-brand-border" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.06) 0%, transparent 100%)" }}>
<div className="flex items-center gap-2">
<FontAwesomeIcon icon={faScroll} className="text-brand-gold text-sm" />
<h3 className="font-display font-700 text-brand-white text-sm">Content Rules</h3>
</div>
</div>
<div className="px-5 py-4 space-y-3">
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-brand-black font-bold text-[9px]">1</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">Post <span className="text-brand-gold font-semibold">1 Reel every day</span>. No exceptions. Miss a day = miss a client.</p>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-brand-black font-bold text-[9px]">2</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">Every post must have a <span className="text-brand-gold font-semibold">clear pain-point hook</span> in the first 3 seconds.</p>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-brand-black font-bold text-[9px]">3</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">End every Reel with a <span className="text-brand-gold font-semibold">DM CTA</span>. Always drive to conversation.</p>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-brand-black font-bold text-[9px]">4</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">Batch record <span className="text-brand-gold font-semibold">3–5 Reels at once</span>. Never scramble for content daily.</p>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-brand-black font-bold text-[9px]">5</span>
</div>
<p className="text-brand-light text-xs leading-relaxed">Track which content <span className="text-brand-gold font-semibold">generates DMs</span>. Double down on what works.</p>
</div>
</div>
</div>
{/* Content Angles Bank */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="angles-bank-card">
<div className="px-5 py-4 border-b border-brand-border flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Angles That Convert</h3>
</div>
<span className="text-brand-muted text-[10px] uppercase tracking-widest font-bold">Use These</span>
</div>
<div className="px-5 py-4 space-y-2">
<div className="flex items-center justify-between p-2.5 bg-brand-accent rounded-lg">
<div className="flex items-center gap-2">
<FontAwesomeIcon icon={faFire} className="text-red-400 text-xs" />
<span className="text-brand-white text-xs font-semibold">Pain Point Reveal</span>
</div>
<span className="text-green-400 text-[10px] font-bold">+3x DMs</span>
</div>
<div className="flex items-center justify-between p-2.5 bg-brand-accent rounded-lg">
<div className="flex items-center gap-2">
<FontAwesomeIcon icon={faTrophy} className="text-brand-gold text-xs" />
<span className="text-brand-white text-xs font-semibold">Case Study / Results</span>
</div>
<span className="text-green-400 text-[10px] font-bold">+2.5x DMs</span>
</div>
<div className="flex items-center justify-between p-2.5 bg-brand-accent rounded-lg">
<div className="flex items-center gap-2">
<FontAwesomeIcon icon={faBan} className="text-orange-400 text-xs" />
<span className="text-brand-white text-xs font-semibold">Contrarian Take</span>
</div>
<span className="text-green-400 text-[10px] font-bold">+2x DMs</span>
</div>
<div className="flex items-center justify-between p-2.5 bg-brand-accent rounded-lg">
<div className="flex items-center gap-2">
<FontAwesomeIcon icon={faListCheck} className="text-blue-400 text-xs" />
<span className="text-brand-white text-xs font-semibold">Step-by-Step Tutorial</span>
</div>
<span className="text-brand-muted text-[10px] font-bold">+1.5x DMs</span>
</div>
<div className="flex items-center justify-between p-2.5 bg-brand-accent rounded-lg">
<div className="flex items-center gap-2">
<FontAwesomeIcon icon={faHeart} className="text-pink-400 text-xs" />
<span className="text-brand-white text-xs font-semibold">Motivation / Story</span>
</div>
<span className="text-brand-muted text-[10px] font-bold">+0.8x DMs</span>
</div>
</div>
</div>
{/* Weekly Content Target */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="weekly-target-card">
<div className="px-5 py-4 border-b border-brand-border flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Week 2 Content Target</h3>
</div>
<div id="weekly-target-chart" style={{ height: "200px" }}></div>
<div className="px-5 pb-4 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<span className="text-brand-light text-xs">Reels</span>
</div>
<span className="text-brand-white text-xs font-semibold">5/7</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-purple-400"></div>
<span className="text-brand-light text-xs">Carousels</span>
</div>
<span className="text-brand-white text-xs font-semibold">2/3</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<span className="text-brand-light text-xs">Stories</span>
</div>
<span className="text-brand-white text-xs font-semibold">14/14</span>
</div>
</div>
</div>
{/* Hook Templates */}
<div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="hook-templates-card">
<div className="px-5 py-4 border-b border-brand-border flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Hook Templates</h3>
</div>
<div className="px-5 py-4 space-y-3">
<div className="p-3 bg-brand-accent rounded-lg border-l-2 border-brand-gold cursor-pointer hover:bg-brand-border/30 transition-all">
<p className="text-brand-white text-xs font-semibold mb-1">"The #1 reason [ICP] can't [achieve goal]..."</p>
<p className="text-brand-muted text-[10px]">Pain point reveal — highest DM rate</p>
</div>
<div className="p-3 bg-brand-accent rounded-lg border-l-2 border-purple-400 cursor-pointer hover:bg-brand-border/30 transition-all">
<p className="text-brand-white text-xs font-semibold mb-1">"I went from $X to $Y in [timeframe]. Here's exactly how:"</p>
<p className="text-brand-muted text-[10px]">Authority proof — strong trust builder</p>
</div>
<div className="p-3 bg-brand-accent rounded-lg border-l-2 border-blue-400 cursor-pointer hover:bg-brand-border/30 transition-all">
<p className="text-brand-white text-xs font-semibold mb-1">"Stop doing [common thing]. Do this instead:"</p>
<p className="text-brand-muted text-[10px]">Contrarian — high engagement, saves</p>
</div>
<div className="p-3 bg-brand-accent rounded-lg border-l-2 border-green-400 cursor-pointer hover:bg-brand-border/30 transition-all">
<p className="text-brand-white text-xs font-semibold mb-1">"My client was stuck at $3K MRR. We did this. Now $15K."</p>
<p className="text-brand-muted text-[10px]">Case study — drives DM inquiries</p>
</div>
</div>
</div>
</div>
</div>
</section>
          </>
        );

        export default IdeaJournalPanel;
