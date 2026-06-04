import { useState } from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faWandMagicSparkles, faPaperPlane, faFloppyDisk, faFire, faUserPlus, faReply, faVideo, faRotateRight, faDoorOpen, faBullseye, faScroll } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const scripts: Record<number, string> = {
  1: "Hey [Name] — noticed you commented on my reel about [topic]. That tells me you're dealing with [pain point]. I've helped 3 founders in the exact same spot get to [result]...",
  2: "Hey [Name] — love what you're building at [Company]. Quick question: are you currently happy with how you're [specific outcome], or is that something you're actively trying to improve?",
  3: "Awesome, glad that resonated! Quick question before I send you anything — what's your current MRR and where are you trying to get to in the next 90 days?",
  4: "I recorded a 2-minute Loom specifically for you — walked through exactly how I'd approach your situation based on what I saw on your profile. Worth 2 mins?",
  5: "Hey [Name] — just circling back. I know you're busy. Still happy to share the framework if it's relevant. No pressure either way.",
  6: "Hey [Name] — I'll leave you alone after this. If scaling your agency is ever a priority, I'm here. Wishing you the best either way.",
};

export default function VoicePromptsTabSection() {
  const [isRecording, setIsRecording] = useState(false);
  const [message, setMessage] = useState('');

  const toggleRecording = () => {
    setIsRecording(prev => !prev);
  };

  const loadScript = (id: number) => {
    setMessage(scripts[id] || '');
  };

  const insertToken = (token: string) => {
    setMessage(prev => prev + token);
  };

  const handleClear = () => {
    setMessage('');
  };

  return (
    <section className="outreach-tab-content" id="tab-content-voice-prompts">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left: Voice DM Composer */}
        <div className="xl:col-span-2 flex flex-col gap-5">
          {/* Voice DM Composer */}
          <div className="bg-brand-card border border-brand-gold/30 rounded-xl overflow-hidden" id="voice-composer-card">
            <div className="px-6 py-4 border-b border-brand-border flex items-center justify-between" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.06) 0%, transparent 100%)' }}>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faMicrophone} className="text-brand-gold text-sm" />
                <h3 className="font-display font-700 text-brand-white text-sm">Voice-to-Text DM Composer</h3>
              </div>
              <span className="text-brand-muted text-[10px] font-bold uppercase tracking-widest">Speak. Send. Close.</span>
            </div>
            <div className="px-6 py-5 space-y-5">
              {/* Prospect Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Prospect Name</label>
                  <input className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-brand-white text-sm placeholder-brand-muted focus:border-brand-gold/50 transition-all" placeholder="e.g. Marcus Webb" type="text" />
                </div>
                <div>
                  <label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Platform</label>
                  <select className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-brand-white text-sm focus:border-brand-gold/50 transition-all">
                    <option>Instagram DM</option>
                    <option>LinkedIn DM</option>
                    <option>Twitter/X DM</option>
                    <option>Email</option>
                    <option>WhatsApp</option>
                  </select>
                </div>
                <div>
                  <label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Outreach Type</label>
                  <select className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-2.5 text-brand-white text-sm focus:border-brand-gold/50 transition-all">
                    <option>Cold DM — Initial Touch</option>
                    <option>Reel Commenter</option>
                    <option>Inbound DM Reply</option>
                    <option>Follow-Up #1</option>
                    <option>Follow-Up #2</option>
                    <option>Re-Engagement</option>
                  </select>
                </div>
              </div>
              {/* Voice Record Area */}
              <div className="border-2 border-dashed border-brand-gold/30 rounded-xl p-6 text-center bg-brand-gold/[0.02] hover:bg-brand-gold/[0.04] transition-all" id="voice-record-area">
                <div className="flex flex-col items-center gap-4">
                  <button
                    className="w-20 h-20 rounded-full bg-brand-gold/10 border-2 border-brand-gold/40 flex items-center justify-center hover:bg-brand-gold/20 transition-all group"
                    id="record-btn"
                    onClick={toggleRecording}
                  >
                    <FontAwesomeIcon icon={faMicrophone} className="text-brand-gold text-3xl group-hover:scale-110 transition-transform" />
                  </button>
                  <div>
                    <p className="text-brand-white text-sm font-semibold" id="record-status">
                      {isRecording ? 'Recording...' : 'Tap to Record Voice Note'}
                    </p>
                    <p className="text-brand-muted text-xs mt-1">Speak naturally. Your voice note will be transcribed to text automatically.</p>
                  </div>
                  <div className={`${isRecording ? 'flex' : 'hidden'} items-center gap-2`} id="recording-indicator">
                    <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                    <span className="text-red-400 text-xs font-bold">Recording... 0:00</span>
                    <div className="flex items-end gap-0.5 h-5">
                      <div className="w-1 bg-brand-gold rounded-full animate-pulse" style={{ height: '40%' }}></div>
                      <div className="w-1 bg-brand-gold rounded-full animate-pulse" style={{ height: '80%', animationDelay: '0.1s' }}></div>
                      <div className="w-1 bg-brand-gold rounded-full animate-pulse" style={{ height: '60%', animationDelay: '0.2s' }}></div>
                      <div className="w-1 bg-brand-gold rounded-full animate-pulse" style={{ height: '100%', animationDelay: '0.3s' }}></div>
                      <div className="w-1 bg-brand-gold rounded-full animate-pulse" style={{ height: '50%', animationDelay: '0.4s' }}></div>
                      <div className="w-1 bg-brand-gold rounded-full animate-pulse" style={{ height: '70%', animationDelay: '0.1s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Transcribed / Typed Message */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest">Transcribed Message / Type Here</label>
                  <div className="flex items-center gap-2">
                    <button className="text-brand-gold text-[10px] font-bold uppercase hover:underline flex items-center gap-1">
                      <FontAwesomeIcon icon={faWandMagicSparkles} className="text-[9px]" /> Use Template
                    </button>
                  </div>
                </div>
                <textarea
                  className="w-full bg-brand-accent border border-brand-border rounded-lg px-4 py-3 text-brand-white text-sm placeholder-brand-muted focus:border-brand-gold/50 transition-all resize-none"
                  placeholder="Hey [Name], saw your post about [topic] — really resonated. I work with SaaS founders to get to $10K MRR in 30 days using a systematic outreach + delivery model. Would it be okay if I shared what's been working for my clients?"
                  rows={5}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
              </div>
              {/* Personalization Tokens */}
              <div>
                <label className="text-brand-muted text-[10px] font-bold uppercase tracking-widest block mb-2">Personalization Tokens — Click to Insert</label>
                <div className="flex flex-wrap gap-2">
                  {['[First Name]', '[Company]', '[Their Post Topic]', '[Pain Point]', '[Result/Outcome]', '[Timeframe]'].map(token => (
                    <button
                      key={token}
                      className="bg-brand-accent border border-brand-border hover:border-brand-gold/40 text-brand-light text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all"
                      onClick={() => insertToken(token)}
                    >
                      {token}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <button className="bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-lg transition-all flex items-center gap-2">
                  <FontAwesomeIcon icon={faPaperPlane} /> Send &amp; Log
                </button>
                <button className="border border-brand-border hover:border-brand-gold/40 text-brand-light text-xs font-semibold uppercase tracking-wide px-5 py-2.5 rounded-lg transition-all flex items-center gap-2">
                  <FontAwesomeIcon icon={faFloppyDisk} /> Save as Template
                </button>
                <button className="text-brand-muted hover:text-brand-light text-xs font-medium px-4 py-2.5 rounded-lg transition-all" onClick={handleClear}>
                  Clear
                </button>
              </div>
            </div>
          </div>
          {/* DM Script Templates */}
          <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="dm-script-templates">
            <div className="px-6 py-4 border-b border-brand-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                <h3 className="font-display font-700 text-brand-white text-sm">Proven DM Scripts</h3>
                <span className="bg-brand-accent border border-brand-border text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded-full">6 scripts</span>
              </div>
              <span className="text-brand-muted text-[10px] uppercase tracking-widest font-bold">Click to Load</span>
            </div>
            <div className="divide-y divide-brand-border">
              {/* Script 1 */}
              <div className="px-6 py-4 hover:bg-brand-accent/30 transition-all cursor-pointer group" id="script-1" onClick={() => loadScript(1)}>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faFire} className="text-brand-gold text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-brand-white text-xs font-semibold">Reel Commenter Opener</span>
                      <span className="bg-green-400/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">High Convert</span>
                    </div>
                    <p className="text-brand-muted text-xs leading-relaxed">"Hey [Name] — noticed you commented on my reel about [topic]. That tells me you're dealing with [pain point]. I've helped 3 founders in the exact same spot get to [result]..."</p>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faInstagram} className="text-pink-400 text-[9px]" /> Instagram</span>
                      <span className="text-brand-muted text-[10px]">Avg: 42% reply rate</span>
                    </div>
                  </div>
                  <button className="flex-shrink-0 border border-brand-gold/30 text-brand-gold text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:bg-brand-gold/10 transition-all opacity-0 group-hover:opacity-100">Use</button>
                </div>
              </div>
              {/* Script 2 */}
              <div className="px-6 py-4 hover:bg-brand-accent/30 transition-all cursor-pointer group" id="script-2" onClick={() => loadScript(2)}>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-brand-accent border border-brand-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faUserPlus} className="text-blue-400 text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-brand-white text-xs font-semibold">Cold DM — Profile Visitor</span>
                      <span className="bg-brand-gold/10 text-brand-gold text-[10px] font-bold px-2 py-0.5 rounded uppercase">Tested</span>
                    </div>
                    <p className="text-brand-muted text-xs leading-relaxed">"Hey [Name] — love what you're building at [Company]. Quick question: are you currently happy with how you're [specific outcome], or is that something you're actively trying to improve?"</p>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-[9px]" /> LinkedIn</span>
                      <span className="text-brand-muted text-[10px]">Avg: 35% reply rate</span>
                    </div>
                  </div>
                  <button className="flex-shrink-0 border border-brand-gold/30 text-brand-gold text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:bg-brand-gold/10 transition-all opacity-0 group-hover:opacity-100">Use</button>
                </div>
              </div>
              {/* Script 3 */}
              <div className="px-6 py-4 hover:bg-brand-accent/30 transition-all cursor-pointer group" id="script-3" onClick={() => loadScript(3)}>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-brand-accent border border-brand-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faReply} className="text-purple-400 text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-brand-white text-xs font-semibold">Inbound DM Reply — Qualify Fast</span>
                      <span className="bg-green-400/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">High Convert</span>
                    </div>
                    <p className="text-brand-muted text-xs leading-relaxed">"Awesome, glad that resonated! Quick question before I send you anything — what's your current MRR and where are you trying to get to in the next 90 days?"</p>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faInstagram} className="text-pink-400 text-[9px]" /> Instagram</span>
                      <span className="text-brand-muted text-[10px]">Avg: 68% qualify rate</span>
                    </div>
                  </div>
                  <button className="flex-shrink-0 border border-brand-gold/30 text-brand-gold text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:bg-brand-gold/10 transition-all opacity-0 group-hover:opacity-100">Use</button>
                </div>
              </div>
              {/* Script 4 */}
              <div className="px-6 py-4 hover:bg-brand-accent/30 transition-all cursor-pointer group" id="script-4" onClick={() => loadScript(4)}>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-brand-accent border border-brand-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faVideo} className="text-orange-400 text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-brand-white text-xs font-semibold">Loom Bridge Script</span>
                      <span className="bg-brand-gold/10 text-brand-gold text-[10px] font-bold px-2 py-0.5 rounded uppercase">Tested</span>
                    </div>
                    <p className="text-brand-muted text-xs leading-relaxed">"I recorded a 2-minute Loom specifically for you — walked through exactly how I'd approach your situation based on what I saw on your profile. Worth 2 mins?"</p>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-[9px]" /> LinkedIn</span>
                      <span className="text-brand-muted text-[10px] flex items-center gap-1"><FontAwesomeIcon icon={faInstagram} className="text-pink-400 text-[9px]" /> Instagram</span>
                      <span className="text-brand-muted text-[10px]">Avg: 51% reply rate</span>
                    </div>
                  </div>
                  <button className="flex-shrink-0 border border-brand-gold/30 text-brand-gold text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:bg-brand-gold/10 transition-all opacity-0 group-hover:opacity-100">Use</button>
                </div>
              </div>
              {/* Script 5 */}
              <div className="px-6 py-4 hover:bg-brand-accent/30 transition-all cursor-pointer group" id="script-5" onClick={() => loadScript(5)}>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-brand-accent border border-brand-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faRotateRight} className="text-green-400 text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-brand-white text-xs font-semibold">Follow-Up #2 — Bump</span>
                      <span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Standard</span>
                    </div>
                    <p className="text-brand-muted text-xs leading-relaxed">"Hey [Name] — just circling back. I know you're busy. Still happy to share the framework if it's relevant. No pressure either way."</p>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="text-brand-muted text-[10px]">All platforms</span>
                      <span className="text-brand-muted text-[10px]">Avg: 28% re-engage rate</span>
                    </div>
                  </div>
                  <button className="flex-shrink-0 border border-brand-gold/30 text-brand-gold text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:bg-brand-gold/10 transition-all opacity-0 group-hover:opacity-100">Use</button>
                </div>
              </div>
              {/* Script 6 */}
              <div className="px-6 py-4 hover:bg-brand-accent/30 transition-all cursor-pointer group" id="script-6" onClick={() => loadScript(6)}>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-brand-accent border border-brand-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faDoorOpen} className="text-red-400 text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-brand-white text-xs font-semibold">Break-Up Message — Final Touch</span>
                      <span className="bg-brand-accent text-brand-muted text-[10px] font-bold px-2 py-0.5 rounded uppercase">Standard</span>
                    </div>
                    <p className="text-brand-muted text-xs leading-relaxed">"Hey [Name] — I'll leave you alone after this. If scaling your agency is ever a priority, I'm here. Wishing you the best either way."</p>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="text-brand-muted text-[10px]">All platforms</span>
                      <span className="text-brand-muted text-[10px]">Avg: 19% late-stage convert</span>
                    </div>
                  </div>
                  <button className="flex-shrink-0 border border-brand-gold/30 text-brand-gold text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg hover:bg-brand-gold/10 transition-all opacity-0 group-hover:opacity-100">Use</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Sidebar */}
        <div className="flex flex-col gap-5" id="voice-sidebar">
          {/* Daily Outreach Target */}
          <div className="bg-brand-card border border-brand-gold/30 rounded-xl overflow-hidden" id="daily-target-card">
            <div className="px-5 py-4 border-b border-brand-border" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.06) 0%, transparent 100%)' }}>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBullseye} className="text-brand-gold text-sm" />
                <h3 className="font-display font-700 text-brand-white text-sm">Today's Outreach Target</h3>
              </div>
            </div>
            <div className="px-5 py-5">
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-28 h-28">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" fill="none" r="15.9" stroke="#222222" strokeWidth="2.5"></circle>
                    <circle cx="18" cy="18" fill="none" r="15.9" stroke="#C9A84C" strokeDasharray="70 30" strokeLinecap="round" strokeWidth="2.5"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display font-800 text-brand-gold text-2xl">7</span>
                    <span className="text-brand-muted text-[10px]">of 10</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-light">Cold DMs Sent</span>
                  <span className="text-brand-gold font-bold">4/5</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-light">Inbound Replies</span>
                  <span className="text-green-400 font-bold">3/3 ✓</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-light">Follow-Ups Sent</span>
                  <span className="text-brand-muted font-bold">0/2</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-brand-border">
                <p className="text-brand-muted text-[10px] leading-relaxed">3 more outreaches needed to hit today\'s target. Focus on cold DMs and follow-ups.</p>
              </div>
            </div>
          </div>
          {/* Outreach Rules */}
          <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="outreach-rules-card">
            <div className="px-5 py-4 border-b border-brand-border flex items-center gap-2">
              <FontAwesomeIcon icon={faScroll} className="text-brand-gold text-sm" />
              <h3 className="font-display font-700 text-brand-white text-sm">Outreach Rules</h3>
            </div>
            <div className="px-5 py-4 space-y-3">
              {[
                { num: 1, content: <p className="text-brand-light text-xs leading-relaxed">Send <span className="text-brand-gold font-semibold">10 DMs per day</span> minimum. Non-negotiable.</p> },
                { num: 2, content: <p className="text-brand-light text-xs leading-relaxed">Always <span className="text-brand-gold font-semibold">personalize the first line</span>. Reference their content, company, or specific pain.</p> },
                { num: 3, content: <p className="text-brand-light text-xs leading-relaxed">Use <span className="text-brand-gold font-semibold">voice notes</span> when possible. They convert 2x better than text.</p> },
                { num: 4, content: <p className="text-brand-light text-xs leading-relaxed">Log <span className="text-brand-gold font-semibold">every conversation</span>. No untracked outreach.</p> },
                { num: 5, content: <p className="text-brand-light text-xs leading-relaxed">Follow up <span className="text-brand-gold font-semibold">3 times</span> before marking dead. Most closes happen on follow-up 2 or 3.</p> },
              ].map(rule => (
                <div key={rule.num} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-brand-black font-bold text-[9px]">{rule.num}</span>
                  </div>
                  {rule.content}
                </div>
              ))}
            </div>
          </div>
          {/* This Week\'s Stats */}
          <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="weekly-outreach-stats">
            <div className="px-5 py-4 border-b border-brand-border flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <h3 className="font-display font-700 text-brand-white text-sm">Week 2 Stats</h3>
            </div>
            <div id="outreach-stats-chart" style={{ height: '180px' }}></div>
            <div className="px-5 pb-4 grid grid-cols-3 gap-2">
              <div className="bg-brand-accent rounded-lg p-2.5 text-center">
                <div className="font-display font-700 text-brand-white text-lg">31</div>
                <div className="text-brand-muted text-[10px] uppercase tracking-wide">Sent</div>
              </div>
              <div className="bg-brand-accent rounded-lg p-2.5 text-center">
                <div className="font-display font-700 text-brand-gold text-lg">14</div>
                <div className="text-brand-muted text-[10px] uppercase tracking-wide">Replies</div>
              </div>
              <div className="bg-brand-accent rounded-lg p-2.5 text-center">
                <div className="font-display font-700 text-green-400 text-lg">5</div>
                <div className="text-brand-muted text-[10px] uppercase tracking-wide">Qualified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
