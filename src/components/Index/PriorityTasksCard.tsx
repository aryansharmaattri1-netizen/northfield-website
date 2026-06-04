import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';

        const PriorityTasksCard = () => (
          <>
            <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="tasks-card">
<div className="flex items-center justify-between px-6 py-4 border-b border-brand-border">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h2 className="font-display font-700 text-brand-white text-base">Today's Priority Tasks</h2>
<span className="bg-brand-gold/10 text-brand-gold text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">Day 14</span>
</div>
<span className="text-brand-muted text-xs">5 of 8 complete</span>
</div>
<div className="divide-y divide-brand-border">
{/* Task 1 - Done */}
<div className="flex items-start gap-4 px-6 py-4 group hover:bg-brand-accent/30 transition-all" id="task-1">
<button className="mt-0.5 w-5 h-5 rounded-full border-2 border-green-400 bg-green-400 flex items-center justify-center flex-shrink-0">
<FontAwesomeIcon icon={faCheck} className="text-[10px] text-brand-black" />
</button>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<p className="text-brand-muted text-sm line-through">Post 1 Reel — Pain-point hook for SaaS founders</p>
<span className="bg-green-400/10 text-green-400 text-[10px] font-semibold px-2 py-0.5 rounded uppercase">Done</span>
</div>
<p className="text-brand-muted text-xs mt-1">Content Engine → Reel #14</p>
</div>
<span className="text-brand-muted text-xs flex-shrink-0">9:00 AM</span>
</div>
{/* Task 2 - Done */}
<div className="flex items-start gap-4 px-6 py-4 group hover:bg-brand-accent/30 transition-all" id="task-2">
<button className="mt-0.5 w-5 h-5 rounded-full border-2 border-green-400 bg-green-400 flex items-center justify-center flex-shrink-0">
<FontAwesomeIcon icon={faCheck} className="text-[10px] text-brand-black" />
</button>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<p className="text-brand-muted text-sm line-through">Send 20 cold DMs via voice-to-text script</p>
<span className="bg-green-400/10 text-green-400 text-[10px] font-semibold px-2 py-0.5 rounded uppercase">Done</span>
</div>
<p className="text-brand-muted text-xs mt-1">Outreach → DM Script v2</p>
</div>
<span className="text-brand-muted text-xs flex-shrink-0">10:30 AM</span>
</div>
{/* Task 3 - Done */}
<div className="flex items-start gap-4 px-6 py-4 group hover:bg-brand-accent/30 transition-all" id="task-3">
<button className="mt-0.5 w-5 h-5 rounded-full border-2 border-green-400 bg-green-400 flex items-center justify-center flex-shrink-0">
<FontAwesomeIcon icon={faCheck} className="text-[10px] text-brand-black" />
</button>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<p className="text-brand-muted text-sm line-through">Record &amp; send 5 Loom follow-up videos</p>
<span className="bg-green-400/10 text-green-400 text-[10px] font-semibold px-2 py-0.5 rounded uppercase">Done</span>
</div>
<p className="text-brand-muted text-xs mt-1">Outreach → Loom Flow</p>
</div>
<span className="text-brand-muted text-xs flex-shrink-0">11:00 AM</span>
</div>
{/* Task 4 - Active */}
<div className="flex items-start gap-4 px-6 py-4 bg-brand-gold/5 border-l-2 border-brand-gold group hover:bg-brand-gold/10 transition-all" id="task-4">
<button className="mt-0.5 w-5 h-5 rounded-full border-2 border-brand-gold flex items-center justify-center flex-shrink-0 animate-pulse">
</button>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<p className="text-brand-white text-sm font-semibold">Run 2 Discovery Calls — Use the SPIN script</p>
<span className="bg-brand-gold/20 text-brand-gold text-[10px] font-bold px-2 py-0.5 rounded uppercase">In Progress</span>
</div>
<p className="text-brand-muted text-xs mt-1">Sales → Discovery Call Script</p>
</div>
<span className="text-brand-gold text-xs font-semibold flex-shrink-0">Now</span>
</div>
{/* Task 5 - Done */}
<div className="flex items-start gap-4 px-6 py-4 group hover:bg-brand-accent/30 transition-all" id="task-5">
<button className="mt-0.5 w-5 h-5 rounded-full border-2 border-green-400 bg-green-400 flex items-center justify-center flex-shrink-0">
<FontAwesomeIcon icon={faCheck} className="text-[10px] text-brand-black" />
</button>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<p className="text-brand-muted text-sm line-through">Review hiring pipeline — 3 VA applicants</p>
<span className="bg-green-400/10 text-green-400 text-[10px] font-semibold px-2 py-0.5 rounded uppercase">Done</span>
</div>
<p className="text-brand-muted text-xs mt-1">Team &amp; Hiring → Applicant Queue</p>
</div>
<span className="text-brand-muted text-xs flex-shrink-0">1:00 PM</span>
</div>
{/* Task 6 - Pending */}
<div className="flex items-start gap-4 px-6 py-4 group hover:bg-brand-accent/30 transition-all" id="task-6">
<button className="mt-0.5 w-5 h-5 rounded-full border-2 border-brand-border flex items-center justify-center flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<p className="text-brand-light text-sm">Deliver weekly report to 3 active clients</p>
<span className="bg-brand-border/50 text-brand-muted text-[10px] font-semibold px-2 py-0.5 rounded uppercase">Pending</span>
</div>
<p className="text-brand-muted text-xs mt-1">Delivery → Weekly Report OS</p>
</div>
<span className="text-brand-muted text-xs flex-shrink-0">3:00 PM</span>
</div>
{/* Task 7 - Pending */}
<div className="flex items-start gap-4 px-6 py-4 group hover:bg-brand-accent/30 transition-all" id="task-7">
<button className="mt-0.5 w-5 h-5 rounded-full border-2 border-brand-border flex items-center justify-center flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<p className="text-brand-light text-sm">Update CRM pipeline — log all qualified convos</p>
<span className="bg-brand-border/50 text-brand-muted text-[10px] font-semibold px-2 py-0.5 rounded uppercase">Pending</span>
</div>
<p className="text-brand-muted text-xs mt-1">Systems → CRM Automation</p>
</div>
<span className="text-brand-muted text-xs flex-shrink-0">4:30 PM</span>
</div>
{/* Task 8 - Pending */}
<div className="flex items-start gap-4 px-6 py-4 group hover:bg-brand-accent/30 transition-all" id="task-8">
<button className="mt-0.5 w-5 h-5 rounded-full border-2 border-brand-border flex items-center justify-center flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<p className="text-brand-light text-sm">EOD review: log wins, blockers, tomorrow\'s plan</p>
<span className="bg-brand-border/50 text-brand-muted text-[10px] font-semibold px-2 py-0.5 rounded uppercase">Pending</span>
</div>
<p className="text-brand-muted text-xs mt-1">Execution Rules → EOD Protocol</p>
</div>
<span className="text-brand-muted text-xs flex-shrink-0">6:00 PM</span>
</div>
</div>
<div className="px-6 py-4 border-t border-brand-border flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-1.5 w-32 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-brand-gold rounded-full" style={{ width: "62%" }}></div>
</div>
<span className="text-brand-muted text-xs">5/8 tasks done</span>
</div>
<Link className="text-brand-gold text-xs font-semibold hover:underline flex items-center gap-1" to="/30day-warp-plan">
                            View Full 30-Day Plan <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
</Link>
</div>
</div>
          </>
        );

        export default PriorityTasksCard;
