import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

        const HeroBannerSection = () => (
          <>
            <section className="relative overflow-hidden rounded-2xl mb-8 bg-brand-card border border-brand-border" id="hero-banner" style={{ backgroundImage: "linear-gradient(135deg, #111111 0%, #1a1200 60%, #0A0A0A 100%)" }}>
<div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, #C9A84C 40px, #C9A84C 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #C9A84C 40px, #C9A84C 41px)" }}></div>
<div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 px-8 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Command Center</span>
<span className="text-brand-muted text-xs">•</span>
<span className="text-brand-muted text-xs font-medium">Tuesday, June 3, 2025</span>
</div>
<h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-800 text-brand-white leading-tight mb-3">
                        Execute Today.<br/>
<span className="text-brand-gold">Build $1M/Month.</span>
</h1>
<p className="text-brand-light text-sm md:text-base max-w-xl leading-relaxed">
                        Your daily operating system is live. Every task, script, and system you need — in one place. No excuses. No delays. Only execution.
                    </p>
</div>
<div className="flex flex-col items-start md:items-end gap-4 flex-shrink-0">
<Link to="/" className="bg-brand-gold hover:bg-brand-gold-light text-brand-black font-display font-700 text-base uppercase tracking-widest px-10 py-4 rounded-lg transition-all shadow-lg hover:shadow-brand-gold/20 hover:shadow-2xl flex items-center gap-3" id="start-now-hero">
<FontAwesomeIcon icon={faBolt} />
                        Start Now
                    </Link>
<p className="text-brand-muted text-xs text-center md:text-right">Day 14 of 30 • 57% Complete</p>
</div>
</div>
</section>
          </>
        );

        export default HeroBannerSection;
