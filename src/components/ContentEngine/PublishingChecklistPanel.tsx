import { useState } from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFilm, faRocket, faSun, faCloudSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function PublishingChecklistPanel() {
  const [postPublishChecks, setPostPublishChecks] = useState([false, false, false, false]);
  const [prePublishChecks, setPrePublishChecks] = useState([false, false]);

  const togglePostPublish = (index: number) => {
    setPostPublishChecks(prev => prev.map((v, i) => i === index ? !v : v));
  };

  const togglePrePublish = (index: number) => {
    setPrePublishChecks(prev => prev.map((v, i) => i === index ? !v : v));
  };

  return (
    <section className="tab-content" id="tab-content-publishing">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 flex flex-col gap-5">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h3 className="font-display font-700 text-brand-white text-base">Publishing Checklist</h3>
              <p className="text-brand-muted text-xs mt-0.5">Run this before every post goes live. No shortcuts.</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-brand-muted bg-brand-accent border border-brand-border rounded-lg px-4 py-2">
              <FontAwesomeIcon icon={faFilm} className="text-brand-gold text-xs" />
              <span className="font-semibold text-brand-white">Today's Reel:</span>
              <span>"Why agencies lose clients after 60 days"</span>
            </div>
          </div>

          {/* Pre-Production */}
          <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="pre-production-checklist">
            <div className="px-6 py-4 border-b border-brand-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                  <span className="text-brand-gold font-bold text-[10px]">1</span>
                </div>
                <h4 className="font-display font-700 text-brand-white text-sm">Pre-Production</h4>
              </div>
              <span className="text-green-400 text-xs font-bold">4/4 Done</span>
            </div>
            <div className="px-6 py-4 space-y-2">
              {[
                'Script written — hook, 3 key points, CTA',
                'Hook validated — passes the "3-second scroll test"',
                'Target audience confirmed — speaking directly to ICP',
                'CTA defined — specific DM trigger word or action',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-brand-accent rounded-lg">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 cursor-pointer">
                    <FontAwesomeIcon icon={faCheck} className="text-[9px] text-brand-black" />
                  </div>
                  <span className="text-brand-muted text-xs line-through flex-1">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Production */}
          <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="production-checklist">
            <div className="px-6 py-4 border-b border-brand-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                  <span className="text-brand-gold font-bold text-[10px]">2</span>
                </div>
                <h4 className="font-display font-700 text-brand-white text-sm">Production</h4>
              </div>
              <span className="text-green-400 text-xs font-bold">3/3 Done</span>
            </div>
            <div className="px-6 py-4 space-y-2">
              {[
                'Video recorded — good lighting, clear audio, on-brand background',
                'Edited — captions added, hook text on screen first 3 seconds',
                'Duration 30–60 seconds — no padding or filler',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-brand-accent rounded-lg">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="text-[9px] text-brand-black" />
                  </div>
                  <span className="text-brand-muted text-xs line-through flex-1">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pre-Publish */}
          <div className="bg-brand-card border-2 border-brand-gold rounded-xl overflow-hidden shadow-lg shadow-brand-gold/10" id="pre-publish-checklist">
            <div
              className="px-6 py-4 border-b border-brand-border flex items-center justify-between"
              style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.08) 0%, transparent 100%)' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center">
                  <span className="text-brand-black font-bold text-[10px]">3</span>
                </div>
                <h4 className="font-display font-700 text-brand-white text-sm">Pre-Publish — Active</h4>
              </div>
              <span className="text-brand-gold text-xs font-bold">2/5 Done</span>
            </div>
            <div className="px-6 py-4 space-y-2">
              <div className="flex items-center gap-3 p-3 bg-brand-accent rounded-lg">
                <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[9px] text-brand-black" />
                </div>
                <span className="text-brand-muted text-xs line-through flex-1">Caption written — hook line, 3 value points, CTA, hashtags</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-brand-accent rounded-lg">
                <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[9px] text-brand-black" />
                </div>
                <span className="text-brand-muted text-xs line-through flex-1">Cover image selected — eye-catching thumbnail with text overlay</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-brand-gold/5 border border-brand-gold/30 rounded-lg">
                <div className="w-5 h-5 rounded-full border-2 border-brand-gold flex items-center justify-center flex-shrink-0 cursor-pointer animate-pulse"></div>
                <span className="text-brand-white text-xs font-semibold flex-1">Hashtags researched — 5–10 niche-specific, 3 broad</span>
                <span className="text-brand-gold text-[10px] font-bold">Now</span>
              </div>
              {[
                'Platforms selected — IG Reels, TikTok, LinkedIn (repurpose)',
                'Posting time confirmed — 9:00 AM peak engagement window',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-brand-accent rounded-lg cursor-pointer hover:bg-brand-border/30 transition-all"
                  onClick={() => togglePrePublish(i)}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${prePublishChecks[i] ? 'bg-green-400 border-green-400' : 'border-brand-border'}`}>
                    {prePublishChecks[i] && <FontAwesomeIcon icon={faCheck} className="text-[9px] text-brand-black" />}
                  </div>
                  <span className={`text-xs flex-1 ${prePublishChecks[i] ? 'text-brand-muted line-through' : 'text-brand-light'}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Post-Publish */}
          <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden opacity-60" id="post-publish-checklist">
            <div className="px-6 py-4 border-b border-brand-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-brand-accent border border-brand-border flex items-center justify-center">
                  <span className="text-brand-muted font-bold text-[10px]">4</span>
                </div>
                <h4 className="font-display font-700 text-brand-muted text-sm">Post-Publish (After Going Live)</h4>
              </div>
              <span className="text-brand-muted text-xs font-bold">0/4 Done</span>
            </div>
            <div className="px-6 py-4 space-y-2">
              {[
                'Engage with first 10 comments within 30 minutes of posting',
                'Log DMs received from this post in outreach tracker',
                'Note 24-hour performance metrics — views, saves, shares',
                'Add performance note to Content Engine tracker',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-brand-accent rounded-lg cursor-pointer hover:bg-brand-border/30 transition-all"
                  onClick={() => togglePostPublish(i)}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${postPublishChecks[i] ? 'bg-green-400 border-green-400' : 'border-brand-border'}`}>
                    {postPublishChecks[i] && <FontAwesomeIcon icon={faCheck} className="text-[9px] text-brand-black" />}
                  </div>
                  <span className={`text-xs flex-1 ${postPublishChecks[i] ? 'text-brand-muted line-through' : 'text-brand-light'}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Checklist Sidebar */}
        <div className="flex flex-col gap-5">
          <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="checklist-progress-card">
            <div className="px-5 py-4 border-b border-brand-border flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <h3 className="font-display font-700 text-brand-white text-sm">Today\'s Checklist</h3>
            </div>
            <div className="px-5 py-5">
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-28 h-28">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" fill="none" r="15.9" stroke="#222222" strokeWidth="2.5"></circle>
                    <circle cx="18" cy="18" fill="none" r="15.9" stroke="#C9A84C" strokeDasharray="56 44" strokeLinecap="round" strokeWidth="2.5"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display font-800 text-brand-gold text-2xl">9</span>
                    <span className="text-brand-muted text-[10px]">of 16</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-light">Pre-Production</span>
                  <span className="text-green-400 font-bold">4/4 ✓</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-light">Production</span>
                  <span className="text-green-400 font-bold">3/3 ✓</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-light">Pre-Publish</span>
                  <span className="text-brand-gold font-bold">2/5</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-light">Post-Publish</span>
                  <span className="text-brand-muted font-bold">0/4</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-brand-gold text-brand-black text-xs font-bold uppercase tracking-wide py-2.5 rounded-lg hover:bg-brand-gold-light transition-all">
                <FontAwesomeIcon icon={faRocket} className="mr-1" /> Publish Now
              </button>
            </div>
          </div>

          <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="posting-time-card">
            <div className="px-5 py-4 border-b border-brand-border flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <h3 className="font-display font-700 text-brand-white text-sm">Optimal Post Times</h3>
            </div>
            <div className="px-5 py-4 space-y-2">
              <div className="flex items-center justify-between p-2.5 bg-brand-gold/10 border border-brand-gold/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faSun} className="text-brand-gold text-xs" />
                  <span className="text-brand-white text-xs font-semibold">9:00 AM</span>
                </div>
                <span className="text-brand-gold text-[10px] font-bold">Best</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-brand-accent rounded-lg">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCloudSun} className="text-orange-400 text-xs" />
                  <span className="text-brand-white text-xs font-semibold">12:00 PM</span>
                </div>
                <span className="text-brand-muted text-[10px] font-bold">Good</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-brand-accent rounded-lg">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMoon} className="text-blue-400 text-xs" />
                  <span className="text-brand-white text-xs font-semibold">7:00 PM</span>
                </div>
                <span className="text-brand-muted text-[10px] font-bold">Good</span>
              </div>
              <p className="text-brand-muted text-[10px] pt-1 leading-relaxed">Based on your audience activity. SaaS founders peak at 9 AM and 7 PM EST.</p>
            </div>
          </div>

          <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="caption-formula-card">
            <div className="px-5 py-4 border-b border-brand-border flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <h3 className="font-display font-700 text-brand-white text-sm">Caption Formula</h3>
            </div>
            <div className="px-5 py-4 space-y-3">
              {[
                { label: 'L1', text: 'Hook line — same as video hook. Stops the scroll.' },
                { label: 'L2', text: 'Expand the pain or promise. 1–2 sentences max.' },
                { label: 'L3', text: '3 bullet points — key takeaways or steps.' },
                { label: 'L4', text: 'Direct CTA — DM me "[keyword]" for [specific thing].' },
                { label: 'L5', text: '5–10 hashtags. Niche-specific + broad mix.' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2">
                  <span className="text-brand-gold font-bold text-xs w-5 flex-shrink-0">{item.label}</span>
                  <p className="text-brand-light text-xs leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
