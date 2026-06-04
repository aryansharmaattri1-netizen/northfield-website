import { useState } from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCheck, faChevronDown, faChevronUp, faBolt, faLock, faChevronRight, faFilm, faPaperPlane, faVideo, faPhone, faBoxOpen, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

interface DayCardsColumnProps {
  days37Expanded?: boolean;
  days813Expanded?: boolean;
  onDays37ExpandedChange?: (value: boolean) => void;
  onDays813ExpandedChange?: (value: boolean) => void;
}

export default function DayCardsColumn({
  days37Expanded: days37ExpandedProp,
  days813Expanded: days813ExpandedProp,
  onDays37ExpandedChange,
  onDays813ExpandedChange,
}: DayCardsColumnProps) {
  const [days37ExpandedLocal, setDays37ExpandedLocal] = useState(false);
  const [days813ExpandedLocal, setDays813ExpandedLocal] = useState(false);

  const days37Expanded = days37ExpandedProp !== undefined ? days37ExpandedProp : days37ExpandedLocal;
  const days813Expanded = days813ExpandedProp !== undefined ? days813ExpandedProp : days813ExpandedLocal;

  const toggleDays37 = () => {
    const next = !days37Expanded;
    setDays37ExpandedLocal(next);
    onDays37ExpandedChange?.(next);
  };

  const toggleDays813 = () => {
    const next = !days813Expanded;
    setDays813ExpandedLocal(next);
    onDays813ExpandedChange?.(next);
  };

  return (
    <div className="xl:col-span-2 flex flex-col gap-5" id="day-cards-col">
      {/* Phase 1 Label */}
      <div className="flex items-center gap-3" id="phase-1-label">
        <div className="h-px flex-1 bg-brand-border"></div>
        <span className="text-brand-muted text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-brand-border rounded-full flex items-center gap-2">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 text-xs" />
          Phase 1 — Foundation (Days 1–7) — Complete
        </span>
        <div className="h-px flex-1 bg-brand-border"></div>
      </div>

      {/* Day 1 */}
      <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden opacity-60 hover:opacity-100 transition-all group" id="day-1-card">
        <div className="flex items-center gap-4 px-6 py-4 border-b border-brand-border">
          <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
            <FontAwesomeIcon icon={faCheck} className="text-brand-black text-sm font-bold" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-brand-muted text-[10px] font-bold uppercase tracking-widest">Day 1</span>
              <span className="bg-green-400/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Done</span>
            </div>
            <h3 className="font-display font-700 text-brand-white text-base">Niche Lock-In &amp; Offer Design</h3>
          </div>
          <FontAwesomeIcon icon={faChevronDown} className="text-brand-muted text-xs group-hover:text-brand-gold transition-all" />
        </div>
        <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-2">Daily Outputs</div>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-brand-muted text-xs"><FontAwesomeIcon icon={faCheck} className="text-green-400 text-[10px] mt-0.5 flex-shrink-0" />Niche defined (SaaS founders)</li>
              <li className="flex items-start gap-2 text-brand-muted text-xs"><FontAwesomeIcon icon={faCheck} className="text-green-400 text-[10px] mt-0.5 flex-shrink-0" />Core offer written (1-page doc)</li>
              <li className="flex items-start gap-2 text-brand-muted text-xs"><FontAwesomeIcon icon={faCheck} className="text-green-400 text-[10px] mt-0.5 flex-shrink-0" />Pricing set: $3K–$5K/mo</li>
            </ul>
          </div>
          <div>
            <div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-2">Actions Taken</div>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-brand-muted text-xs"><FontAwesomeIcon icon={faCheck} className="text-green-400 text-[10px] mt-0.5 flex-shrink-0" />Completed niche selection worksheet</li>
              <li className="flex items-start gap-2 text-brand-muted text-xs"><FontAwesomeIcon icon={faCheck} className="text-green-400 text-[10px] mt-0.5 flex-shrink-0" />Wrote offer one-liner</li>
            </ul>
          </div>
          <div>
            <div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-2">Next Action</div>
            <p className="text-brand-muted text-xs">Move to Day 2: Build your social proof asset and set up outreach profiles.</p>
          </div>
        </div>
      </div>

      {/* Day 2 */}
      <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden opacity-60 hover:opacity-100 transition-all group" id="day-2-card">
        <div className="flex items-center gap-4 px-6 py-4 border-b border-brand-border">
          <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
            <FontAwesomeIcon icon={faCheck} className="text-brand-black text-sm font-bold" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-brand-muted text-[10px] font-bold uppercase tracking-widest">Day 2</span>
              <span className="bg-green-400/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Done</span>
            </div>
            <h3 className="font-display font-700 text-brand-white text-base">Social Proof Asset + Profile Setup</h3>
          </div>
          <FontAwesomeIcon icon={faChevronDown} className="text-brand-muted text-xs group-hover:text-brand-gold transition-all" />
        </div>
        <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-2">Daily Outputs</div>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-brand-muted text-xs"><FontAwesomeIcon icon={faCheck} className="text-green-400 text-[10px] mt-0.5 flex-shrink-0" />IG/LinkedIn profile optimized</li>
              <li className="flex items-start gap-2 text-brand-muted text-xs"><FontAwesomeIcon icon={faCheck} className="text-green-400 text-[10px] mt-0.5 flex-shrink-0" />1 social proof post drafted</li>
            </ul>
          </div>
          <div>
            <div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-2">Actions Taken</div>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-brand-muted text-xs"><FontAwesomeIcon icon={faCheck} className="text-green-400 text-[10px] mt-0.5 flex-shrink-0" />Updated bio with niche hook</li>
              <li className="flex items-start gap-2 text-brand-muted text-xs"><FontAwesomeIcon icon={faCheck} className="text-green-400 text-[10px] mt-0.5 flex-shrink-0" />Created highlight reel story</li>
            </ul>
          </div>
          <div>
            <div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-2">Next Action</div>
            <p className="text-brand-muted text-xs">Day 3: Record your first authority Reel and post it.</p>
          </div>
        </div>
      </div>

      {/* Days 3-7 */}
      <div
        className="bg-brand-card border border-brand-border rounded-xl overflow-hidden opacity-60 hover:opacity-100 transition-all group cursor-pointer"
        id="days-3-7-card"
        onClick={toggleDays37}
      >
        <div className="flex items-center gap-4 px-6 py-4">
          <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
            <FontAwesomeIcon icon={faCheck} className="text-brand-black text-sm font-bold" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-brand-muted text-[10px] font-bold uppercase tracking-widest">Days 3–7</span>
              <span className="bg-green-400/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">All Done</span>
            </div>
            <h3 className="font-display font-700 text-brand-white text-base">Content Launch, DM Warm-Up &amp; First Calls</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-muted text-xs hidden md:block">5 days completed</span>
            <FontAwesomeIcon
              icon={days37Expanded ? faChevronUp : faChevronDown}
              className="text-brand-muted text-xs group-hover:text-brand-gold transition-all"
            />
          </div>
        </div>
        {days37Expanded && (
          <div className="border-t border-brand-border">
            <div className="grid grid-cols-1 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-brand-border">
              <div className="px-4 py-4">
                <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-1">Day 3</div>
                <div className="text-brand-white text-xs font-semibold mb-1">First Reel Posted</div>
                <div className="text-brand-muted text-[10px]">Pain-point hook for SaaS founders. Authority angle.</div>
              </div>
              <div className="px-4 py-4">
                <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-1">Day 4</div>
                <div className="text-brand-white text-xs font-semibold mb-1">DM Warm-Up (10)</div>
                <div className="text-brand-muted text-[10px]">Engage 10 target accounts. No pitch yet. Build rapport.</div>
              </div>
              <div className="px-4 py-4">
                <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-1">Day 5</div>
                <div className="text-brand-white text-xs font-semibold mb-1">Offer Validation</div>
                <div className="text-brand-muted text-[10px]">DM 5 prospects with soft offer. Log responses.</div>
              </div>
              <div className="px-4 py-4">
                <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-1">Day 6</div>
                <div className="text-brand-white text-xs font-semibold mb-1">First Discovery Call</div>
                <div className="text-brand-muted text-[10px]">Run first call. Use SPIN script. Log objections.</div>
              </div>
              <div className="px-4 py-4">
                <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-1">Day 7</div>
                <div className="text-brand-white text-xs font-semibold mb-1">Week 1 Review</div>
                <div className="text-brand-muted text-[10px]">EOD audit. Refine offer. Set Week 2 targets.</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Phase 2 Label */}
      <div className="flex items-center gap-3" id="phase-2-label">
        <div className="h-px flex-1 bg-brand-border"></div>
        <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-brand-gold/30 rounded-full flex items-center gap-2 bg-brand-gold/5">
          <FontAwesomeIcon icon={faBolt} className="text-brand-gold text-xs" />
          Phase 2 — Outreach Blitz (Days 8–14) — Active
        </span>
        <div className="h-px flex-1 bg-brand-border"></div>
      </div>

      {/* Days 8-13 */}
      <div
        className="bg-brand-card border border-brand-border rounded-xl overflow-hidden opacity-70 hover:opacity-100 transition-all group cursor-pointer"
        id="days-8-13-card"
        onClick={toggleDays813}
      >
        <div className="flex items-center gap-4 px-6 py-4">
          <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
            <FontAwesomeIcon icon={faCheck} className="text-brand-black text-sm font-bold" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-brand-muted text-[10px] font-bold uppercase tracking-widest">Days 8–13</span>
              <span className="bg-green-400/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">All Done</span>
            </div>
            <h3 className="font-display font-700 text-brand-white text-base">Full Outreach Engine — 20 DMs/Day + Loom Flows</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-muted text-xs hidden md:block">6 days completed</span>
            <FontAwesomeIcon
              icon={days813Expanded ? faChevronUp : faChevronDown}
              className="text-brand-muted text-xs group-hover:text-brand-gold transition-all"
            />
          </div>
        </div>
        {days813Expanded && (
          <div className="border-t border-brand-border">
            <div className="grid grid-cols-2 sm:grid-cols-3 divide-y sm:divide-y-0 divide-x divide-brand-border">
              <div className="px-4 py-4">
                <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-1">Days 8–9</div>
                <div className="text-brand-white text-xs font-semibold mb-1">Volume DM Sprint</div>
                <div className="text-brand-muted text-[10px]">20 DMs/day via voice-to-text. Log all replies.</div>
              </div>
              <div className="px-4 py-4">
                <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-1">Days 10–11</div>
                <div className="text-brand-white text-xs font-semibold mb-1">Loom Video Follow-Ups</div>
                <div className="text-brand-muted text-[10px]">Send 5 Looms/day to warm leads. Personalized.</div>
              </div>
              <div className="px-4 py-4">
                <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-1">Days 12–13</div>
                <div className="text-brand-white text-xs font-semibold mb-1">Discovery Call Surge</div>
                <div className="text-brand-muted text-[10px]">Book 4–6 calls. Run SPIN. Identify closeable leads.</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Day 14 - Active */}
      <div className="bg-brand-card border-2 border-brand-gold rounded-xl overflow-hidden relative shadow-lg shadow-brand-gold/10" id="day-14-card">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gold"></div>
        <div
          className="flex items-center gap-4 px-6 py-4 border-b border-brand-border"
          style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.08) 0%, transparent 100%)' }}
        >
          <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-gold/30">
            <span className="text-brand-black font-display font-800 text-sm">14</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">Day 14</span>
              <span className="bg-brand-gold text-brand-black text-[10px] font-bold px-2 py-0.5 rounded uppercase animate-pulse">Today — Active</span>
              <span className="text-brand-muted text-[10px]">Phase 2 Final Day</span>
            </div>
            <h3 className="font-display font-700 text-brand-white text-xl">Close First Client + Week 2 Debrief</h3>
          </div>
          <div className="hidden md:flex flex-col items-end gap-1">
            <span className="text-brand-gold text-xs font-bold">5/8 done</span>
            <span className="text-brand-muted text-[10px]">3 remaining</span>
          </div>
        </div>
        <div className="px-6 py-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-3">Today's Tasks</div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 bg-brand-accent rounded-lg">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="text-[9px] text-brand-black" />
                  </div>
                  <span className="text-brand-muted text-xs line-through flex-1">Post Reel #14 — Pain-point hook</span>
                  <span className="text-green-400 text-[10px] font-bold">9 AM</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-brand-accent rounded-lg">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="text-[9px] text-brand-black" />
                  </div>
                  <span className="text-brand-muted text-xs line-through flex-1">Send 20 DMs via voice-to-text</span>
                  <span className="text-green-400 text-[10px] font-bold">10:30 AM</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-brand-accent rounded-lg">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="text-[9px] text-brand-black" />
                  </div>
                  <span className="text-brand-muted text-xs line-through flex-1">Record 5 Loom follow-up videos</span>
                  <span className="text-green-400 text-[10px] font-bold">11 AM</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-brand-gold/5 border border-brand-gold/30 rounded-lg">
                  <div className="w-5 h-5 rounded-full border-2 border-brand-gold flex items-center justify-center flex-shrink-0 animate-pulse"></div>
                  <span className="text-brand-white text-xs font-semibold flex-1">Run 2 Discovery Calls — SPIN script</span>
                  <span className="text-brand-gold text-[10px] font-bold">Now</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-brand-accent rounded-lg">
                  <div className="w-5 h-5 rounded-full border-2 border-brand-border flex-shrink-0"></div>
                  <span className="text-brand-light text-xs flex-1">Deliver weekly report to 3 clients</span>
                  <span className="text-brand-muted text-[10px]">3 PM</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-brand-accent rounded-lg">
                  <div className="w-5 h-5 rounded-full border-2 border-brand-border flex-shrink-0"></div>
                  <span className="text-brand-light text-xs flex-1">Update CRM — log all qualified convos</span>
                  <span className="text-brand-muted text-[10px]">4:30 PM</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-brand-accent rounded-lg">
                  <div className="w-5 h-5 rounded-full border-2 border-brand-border flex-shrink-0"></div>
                  <span className="text-brand-light text-xs flex-1">EOD review: wins, blockers, Day 15 plan</span>
                  <span className="text-brand-muted text-[10px]">6 PM</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-3">Daily Outputs</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faFilm} className="text-purple-400 text-xs mt-0.5 flex-shrink-0" />
                    <span className="text-brand-light text-xs">1 Reel published</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faPaperPlane} className="text-blue-400 text-xs mt-0.5 flex-shrink-0" />
                    <span className="text-brand-light text-xs">20 DMs sent</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faVideo} className="text-brand-gold text-xs mt-0.5 flex-shrink-0" />
                    <span className="text-brand-light text-xs">5 Loom videos sent</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faPhone} className="text-green-400 text-xs mt-0.5 flex-shrink-0" />
                    <span className="text-brand-light text-xs">2 discovery calls run</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faBoxOpen} className="text-orange-400 text-xs mt-0.5 flex-shrink-0" />
                    <span className="text-brand-light text-xs">3 client reports delivered</span>
                  </div>
                </div>
              </div>
              <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faArrowRight} className="text-brand-gold text-xs" />
                  <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">Next Action</span>
                </div>
                <p className="text-brand-white text-xs font-semibold leading-relaxed">Complete discovery calls → attempt close on hottest lead → prep Day 15 onboarding flow.</p>
                <button className="mt-3 w-full bg-brand-gold text-brand-black text-xs font-bold uppercase tracking-wide py-2 rounded-lg hover:bg-brand-gold-light transition-all">
                  <FontAwesomeIcon icon={faBolt} className="mr-1" /> Execute Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phase 3 Label */}
      <div className="flex items-center gap-3" id="phase-3-label">
        <div className="h-px flex-1 bg-brand-border"></div>
        <span className="text-brand-muted text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-brand-border rounded-full flex items-center gap-2">
          <FontAwesomeIcon icon={faLock} className="text-brand-muted text-xs" />
          Phase 3 — Close &amp; Deliver (Days 15–21) — Upcoming
        </span>
        <div className="h-px flex-1 bg-brand-border"></div>
      </div>

      {/* Day 15 */}
      <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden group hover:border-blue-500/30 transition-all" id="day-15-card">
        <div className="flex items-center gap-4 px-6 py-4 border-b border-brand-border">
          <div className="w-10 h-10 rounded-full bg-brand-accent border border-brand-border flex items-center justify-center flex-shrink-0">
            <span className="text-brand-muted font-display font-700 text-sm">15</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-brand-muted text-[10px] font-bold uppercase tracking-widest">Day 15</span>
              <span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Tomorrow</span>
            </div>
            <h3 className="font-display font-700 text-brand-white text-base">First Client Onboarding + Delivery Setup</h3>
          </div>
          <FontAwesomeIcon icon={faChevronRight} className="text-brand-muted text-xs group-hover:text-blue-400 transition-all" />
        </div>
        <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-2">Planned Outputs</div>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-brand-light text-xs"><FontAwesomeIcon icon={faCircle} className="text-brand-muted text-[10px] mt-0.5 flex-shrink-0" />Client onboarding doc sent</li>
              <li className="flex items-start gap-2 text-brand-light text-xs"><FontAwesomeIcon icon={faCircle} className="text-brand-muted text-[10px] mt-0.5 flex-shrink-0" />Delivery SOP activated</li>
              <li className="flex items-start gap-2 text-brand-light text-xs"><FontAwesomeIcon icon={faCircle} className="text-brand-muted text-[10px] mt-0.5 flex-shrink-0" />First invoice sent</li>
            </ul>
          </div>
          <div>
            <div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-2">Key Actions</div>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2 text-brand-light text-xs"><FontAwesomeIcon icon={faCircle} className="text-brand-muted text-[10px] mt-0.5 flex-shrink-0" />Run onboarding call</li>
              <li className="flex items-start gap-2 text-brand-light text-xs"><FontAwesomeIcon icon={faCircle} className="text-brand-muted text-[10px] mt-0.5 flex-shrink-0" />Set up client Slack channel</li>
              <li className="flex items-start gap-2 text-brand-light text-xs"><FontAwesomeIcon icon={faCircle} className="text-brand-muted text-[10px] mt-0.5 flex-shrink-0" />Assign content VA tasks</li>
            </ul>
          </div>
          <div>
            <div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-2">Next Action</div>
            <p className="text-brand-light text-xs">After Day 14 close — send onboarding form immediately. Don\'t wait 24 hours.</p>
          </div>
        </div>
      </div>

      {/* Days 16-21 Locked */}
      <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden relative" id="days-16-21-card">
        <div className="absolute inset-0 bg-brand-black/40 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-xl">
          <div className="text-center">
            <div className="w-12 h-12 bg-brand-accent border border-brand-border rounded-full flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faLock} className="text-brand-muted text-lg" />
            </div>
            <p className="text-brand-muted text-xs font-semibold uppercase tracking-widest">Unlocks on Day 15</p>
            <p className="text-brand-muted text-[10px] mt-1">Complete today\'s tasks to proceed</p>
          </div>
        </div>
        <div className="flex items-center gap-4 px-6 py-4 border-b border-brand-border">
          <div className="w-10 h-10 rounded-full bg-brand-accent border border-brand-border flex items-center justify-center flex-shrink-0">
            <span className="text-brand-muted font-display font-700 text-xs">16–21</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-brand-muted text-[10px] font-bold uppercase tracking-widest">Days 16–21</span>
              <span className="bg-brand-border text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Locked</span>
            </div>
            <h3 className="font-display font-700 text-brand-muted text-base">Scale Outreach + Close 2nd &amp; 3rd Client</h3>
          </div>
        </div>
        <div className="px-6 py-4 opacity-30">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-16 bg-brand-accent rounded-lg"></div>
            <div className="h-16 bg-brand-accent rounded-lg"></div>
            <div className="h-16 bg-brand-accent rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Phase 4 Label */}
      <div className="flex items-center gap-3" id="phase-4-label">
        <div className="h-px flex-1 bg-brand-border"></div>
        <span className="text-brand-muted text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-brand-border rounded-full flex items-center gap-2">
          <FontAwesomeIcon icon={faLock} className="text-brand-muted text-xs" />
          Phase 4 — Scale &amp; Hire (Days 22–30) — Locked
        </span>
        <div className="h-px flex-1 bg-brand-border"></div>
      </div>

      {/* Days 22-30 Locked */}
      <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden relative" id="days-22-30-card">
        <div className="absolute inset-0 bg-brand-black/50 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-xl">
          <div className="text-center">
            <div className="w-12 h-12 bg-brand-accent border border-brand-border rounded-full flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faLock} className="text-brand-muted text-lg" />
            </div>
            <p className="text-brand-muted text-xs font-semibold uppercase tracking-widest">Unlocks on Day 22</p>
            <p className="text-brand-muted text-[10px] mt-1">Complete Phase 3 to access Scale &amp; Hire</p>
          </div>
        </div>
        <div className="flex items-center gap-4 px-6 py-4 border-b border-brand-border">
          <div className="w-10 h-10 rounded-full bg-brand-accent border border-brand-border flex items-center justify-center flex-shrink-0">
            <span className="text-brand-muted font-display font-700 text-xs">22–30</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-brand-muted text-[10px] font-bold uppercase tracking-widest">Days 22–30</span>
              <span className="bg-brand-border text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Locked</span>
            </div>
            <h3 className="font-display font-700 text-brand-muted text-base">Hire VA, Automate Systems, Hit $10K MRR</h3>
          </div>
        </div>
        <div className="px-6 py-4 opacity-20">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-16 bg-brand-accent rounded-lg"></div>
            <div className="h-16 bg-brand-accent rounded-lg"></div>
            <div className="h-16 bg-brand-accent rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
