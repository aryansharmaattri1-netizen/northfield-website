import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

        const ContentHeroSection = () => (
          <>
            <section className="relative overflow-hidden rounded-2xl mb-8 bg-brand-card border border-brand-border" id="content-hero" style={{ backgroundImage: "linear-gradient(135deg, #111111 0%, #1a1200 60%, #0A0A0A 100%)" }}>
<div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, #C9A84C 40px, #C9A84C 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #C9A84C 40px, #C9A84C 41px)" }}></div>
<div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 px-8 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Content Engine</span>
<span className="text-brand-muted text-xs">•</span>
<span className="text-brand-muted text-xs font-medium">Reels, Posts &amp; Authority Content</span>
</div>
<h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-800 text-brand-white leading-tight mb-3">
                        Create. Schedule.<br/>
<span className="text-brand-gold">Dominate Your Feed.</span>
</h1>
<p className="text-brand-light text-sm md:text-base max-w-xl leading-relaxed">
                        Your content is your 24/7 outreach machine. Capture ideas, build your queue, publish consistently, and track what converts to conversations.
                    </p>
<div className="flex items-center gap-4 mt-5 flex-wrap">
<Link to="/content-engine" className="bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-lg transition-all flex items-center gap-2" id="quick-capture-btn">
<FontAwesomeIcon icon={faBolt} /> Quick Capture
                        </Link>
<Link to="/content-engine" className="border border-brand-border hover:border-brand-gold/50 text-brand-light hover:text-brand-white text-xs font-semibold uppercase tracking-wide px-5 py-2.5 rounded-lg transition-all flex items-center gap-2">
<FontAwesomeIcon icon={faCalendarPlus} /> Add to Queue
                        </Link>
</div>
</div>
<div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 flex-shrink-0">
<div className="bg-brand-accent border border-brand-border rounded-xl p-5 min-w-[160px]">
<div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-1">This Week</div>
<div className="font-display text-3xl font-800 text-brand-gold">5</div>
<div className="text-brand-light text-xs">Reels Published</div>
</div>
<div className="bg-brand-accent border border-brand-border rounded-xl p-5 min-w-[160px]">
<div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-1">In Queue</div>
<div className="font-display text-3xl font-800 text-brand-white">8</div>
<div className="text-brand-light text-xs">Drafts Ready</div>
</div>
<div className="bg-brand-accent border border-brand-border rounded-xl p-5 min-w-[160px]">
<div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-1">Idea Bank</div>
<div className="font-display text-3xl font-800 text-brand-white">23</div>
<div className="text-brand-light text-xs">Captured Ideas</div>
</div>
</div>
</div>
</section>
          </>
        );

        export default ContentHeroSection;
